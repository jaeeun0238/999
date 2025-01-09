//express 도구를 가져온다. express 는 서버를 만들기 위해 도와주는 도구입니다.
import express from 'express';
import bcrypt from 'bcrypt'; // 비밀번호 해시화를 위한 bcrypt 라이브러리
import jwt from 'jsonwebtoken'; // JWT 생성을 위한 jsonwebtoken 라이브러리
import { HTTP_STATUS } from '../constants/http-status.constant.js'; // HTTP 상태 코드 상수
import { MESSAGES } from '../constants/message.constant.js'; // 메시지 상수
import { signUpValidator } from '../middlewares/validators/sign-up-validator.middleware.js'; // 회원가입 검증 미들웨어
import { signInValidator } from '../middlewares/validators/sign-in-validator.middleware.js'; // 로그인 검증 미들웨어
import { prisma } from '../utils/prisma.util.js'; // Prisma 클라이언트
import {
  ACCESS_TOKEN_EXPIRES_IN,
  HASH_SALT_ROUNDS,
} from '../constants/auth.constant.js'; // 인증 관련 상수
import { ACCESS_TOKEN_SECRET } from '../constants/env.constant.js'; // 액세스 토큰 비밀 키

const authRouter = express.Router(); // Express 라우터 인스턴스 생성

// 회원가입 엔드포인트
authRouter.post('/sign-up', signUpValidator, async (req, res, next) => {
  try {
    const { email, password, name } = req.body; // 요청 바디에서 이메일, 비밀번호, 이름 추출

    // 이메일 중복 확인
    const existedUser = await prisma.user.findUnique({ where: { email } });

    // 이메일이 중복된 경우
    if (existedUser) {
      return res.status(HTTP_STATUS.CONFLICT).json({
        status: HTTP_STATUS.CONFLICT,
        message: MESSAGES.AUTH.COMMON.EMAIL.DUPLICATED, // 중복 이메일 메시지
      });
    }

    // 비밀번호 해시화
    const hashedPassword = bcrypt.hashSync(password, HASH_SALT_ROUNDS);

    // 사용자 생성
    const data = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    data.password = undefined; // 응답에서 비밀번호 제거

    return res.status(HTTP_STATUS.CREATED).json({
      status: HTTP_STATUS.CREATED,
      message: MESSAGES.AUTH.SIGN_UP.SUCCEED, // 회원가입 성공 메시지
      data,
    });
  } catch (error) {
    next(error); // 오류 발생 시 다음 미들웨어로 전달
  }
});

// 로그인 엔드포인트
authRouter.post('/sign-in', signInValidator, async (req, res, next) => {
  try {
    const { email, password } = req.body; // 요청 바디에서 이메일과 비밀번호 추출

    // 사용자 찾기
    const user = await prisma.user.findUnique({ where: { email } });

    // 비밀번호 확인
    const isPasswordMatched =
      user && bcrypt.compareSync(password, user.password);

    // 비밀번호 불일치 시
    if (!isPasswordMatched) {
      return res.status(HTTP_STATUS.UNAUTHORIZED).json({
        status: HTTP_STATUS.UNAUTHORIZED,
        message: MESSAGES.AUTH.COMMON.UNAUTHORIZED, // 인증 실패 메시지
      });
    }

    // JWT 페이로드 생성
    const payload = { id: user.id };

    // 액세스 토큰 생성
    const accessToken = jwt.sign(payload, ACCESS_TOKEN_SECRET, {
      expiresIn: ACCESS_TOKEN_EXPIRES_IN, // 토큰 만료 시간 설정
    });

    return res.status(HTTP_STATUS.OK).json({
      status: HTTP_STATUS.OK,
      message: MESSAGES.AUTH.SIGN_IN.SUCCEED, // 로그인 성공 메시지
      data: { accessToken }, // 액세스 토큰 반환
    });
  } catch (error) {
    next(error); // 오류 발생 시 다음 미들웨어로 전달
  }
});

export { authRouter }; // authRouter 내보내기
