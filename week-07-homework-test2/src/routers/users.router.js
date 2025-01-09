//express 도구를 가져온다. express 는 서버를 만들기 위해 도와주는 도구입니다.
import express from 'express'; 
import { requireAccessToken } from '../middlewares/require-access-token.middleware.js'; // 액세스 토큰 요구 미들웨어 
import { HTTP_STATUS } from '../constants/http-status.constant.js'; // HTTP 상태 코드 상수 
import { MESSAGES } from '../constants/message.constant.js'; // 메시지 상수 

const usersRouter = express.Router(); // Express 라우터 인스턴스 생성

// '/me' 엔드포인트: 현재 사용자 정보 조회
usersRouter.get('/me', requireAccessToken, (req, res, next) => {
  try {
    const data = req.user; // 인증된 사용자 정보 추출

    return res.status(HTTP_STATUS.OK).json({
      status: HTTP_STATUS.OK,
      message: MESSAGES.USERS.READ_ME.SUCCEED, // 사용자 정보 조회 성공 메시지
      data, // 사용자 정보 반환
    });
  } catch (error) {
    next(error); // 오류 발생 시 다음 미들웨어로 전달
  }
});

export { usersRouter }; // usersRouter 내보내기
