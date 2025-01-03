import express from 'express'; // Express 프레임워크 
import { HTTP_STATUS } from '../constants/http-status.constant.js'; // HTTP 상태 코드 상수 
import { MESSAGES } from '../constants/message.constant.js'; // 메시지 상수 
import { createResumeValidator } from '../middlewares/validators/create-resume-validator.middleware.js'; // 이력서 생성 검증 미들웨어 
import { prisma } from '../utils/prisma.util.js'; // Prisma 클라이언트 
import { updateResumeValidator } from '../middlewares/validators/update-resume-validator.middleware.js'; // 이력서 수정 검증 미들웨어 

const resumesRouter = express.Router(); // Express 라우터 인스턴스 생성

// 이력서 생성
resumesRouter.post('/', createResumeValidator, async (req, res, next) => {
  try {
    const user = req.user; // 인증된 사용자 정보
    const { title, content } = req.body; // 요청 바디에서 제목과 내용 추출
    const authorId = user.id; // 작성자 ID

    // 이력서 생성
    const data = await prisma.resume.create({
      data: {
        authorId,
        title,
        content,
      },
    });

    return res.status(HTTP_STATUS.CREATED).json({
      status: HTTP_STATUS.CREATED,
      message: MESSAGES.RESUMES.CREATE.SUCCEED, // 생성 성공 메시지
      data,
    });
  } catch (error) {
    next(error); // 오류 발생 시 다음 미들웨어로 전달
  }
});

// 이력서 목록 조회
resumesRouter.get('/', async (req, res, next) => {
  try {
    const user = req.user; // 인증된 사용자 정보
    const authorId = user.id; // 작성자 ID

    let { sort } = req.query; // 쿼리 파라미터에서 정렬 방식 추출
    sort = sort?.toLowerCase(); // 소문자로 변환

    // 정렬 방식 검증
    if (sort !== 'desc' && sort !== 'asc') {
      sort = 'desc'; // 기본값을 'desc'로 설정
    }

    // 이력서 목록 조회
    let data = await prisma.resume.findMany({
      where: { authorId }, // 작성자 ID로 필터링
      orderBy: {
        createdAt: sort, // 생성일 기준 정렬
      },
      include: {
        author: true, // 작성자 정보 포함
      },
    });

    // 응답 데이터 형식 변환
    data = data.map((resume) => {
      return {
        id: resume.id,
        authorName: resume.author.name,
        title: resume.title,
        content: resume.content,
        status: resume.status,
        createdAt: resume.createdAt,
        updatedAt: resume.updatedAt,
      };
    });

    return res.status(HTTP_STATUS.OK).json({
      status: HTTP_STATUS.OK,
      message: MESSAGES.RESUMES.READ_LIST.SUCCEED, // 목록 조회 성공 메시지
      data,
    });
  } catch (error) {
    next(error); // 오류 발생 시 다음 미들웨어로 전달
  }
});

// 이력서 상세 조회
resumesRouter.get('/:id', async (req, res, next) => {
  try {
    const user = req.user; // 인증된 사용자 정보
    const authorId = user.id; // 작성자 ID

    const { id } = req.params; // URL 파라미터에서 이력서 ID 추출

    // 이력서 상세 조회
    let data = await prisma.resume.findUnique({
      where: { id: +id, authorId }, // 작성자 ID와 이력서 ID로 필터링
      include: { author: true }, // 작성자 정보 포함
    });

    // 이력서가 존재하지 않는 경우
    if (!data) {
      return res.status(HTTP_STATUS.NOT_FOUND).json({
        status: HTTP_STATUS.NOT_FOUND,
        message: MESSAGES.RESUMES.COMMON.NOT_FOUND, // 이력서 없음 메시지
      });
    }

    // 응답 데이터 형식 변환
    data = {
      id: data.id,
      authorName: data.author.name,
      title: data.title,
      content: data.content,
      status: data.status,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };

    return res.status(HTTP_STATUS.OK).json({
      status: HTTP_STATUS.OK,
      message: MESSAGES.RESUMES.READ_DETAIL.SUCCEED, // 상세 조회 성공 메시지
      data,
    });
  } catch (error) {
    next(error); // 오류 발생 시 다음 미들웨어로 전달
  }
});

// 이력서 수정
resumesRouter.put('/:id', updateResumeValidator, async (req, res, next) => {
  try {
    const user = req.user; // 인증된 사용자 정보
    const authorId = user.id; // 작성자 ID

    const { id } = req.params; // URL 파라미터에서 이력서 ID 추출

    const { title, content } = req.body; // 요청 바디에서 제목과 내용 추출

    // 이력서 존재 여부 확인
    let existedResume = await prisma.resume.findUnique({
      where: { id: +id, authorId }, // 작성자 ID와 이력서 ID로 필터링
    });

    // 이력서가 존재하지 않는 경우
    if (!existedResume) {
      return res.status(HTTP_STATUS.NOT_FOUND).json({
        status: HTTP_STATUS.NOT_FOUND,
        message: MESSAGES.RESUMES.COMMON.NOT_FOUND, // 이력서 없음 메시지
      });
    }

    // 이력서 수정
    const data = await prisma.resume.update({
      where: { id: +id, authorId }, // 작성자 ID와 이력서 ID로 필터링
      data: {
        ...(title && { title }), // 제목이 있는 경우 업데이트
        ...(content && { content }), // 내용이 있는 경우 업데이트
      },
    });

    return res.status(HTTP_STATUS.OK).json({
      status: HTTP_STATUS.OK,
      message: MESSAGES.RESUMES.UPDATE.SUCCEED, // 수정 성공 메시지
      data,
    });
  } catch (error) {
    next(error); // 오류 발생 시 다음 미들웨어로 전달
  }
});

// 이력서 삭제
resumesRouter.delete('/:id', async (req, res, next) => {
  try {
    const user = req.user; // 인증된 사용자 정보
    const authorId = user.id; // 작성자 ID

    const { id } = req.params; // URL 파라미터에서 이력서 ID 추출

    // 이력서 존재 여부 확인
    let existedResume = await prisma.resume.findUnique({
      where: { id: +id, authorId }, // 작성자 ID와 이력서 ID로 필터링
    });

    // 이력서가 존재하지 않는 경우
    if (!existedResume) {
      return res.status(HTTP_STATUS.NOT_FOUND).json({
        status: HTTP_STATUS.NOT_FOUND,
        message: MESSAGES.RESUMES.COMMON.NOT_FOUND, // 이력서 없음 메시지
      });
    }

    // 이력서 삭제
    const data = await prisma.resume.delete({ where: { id: +id, authorId } });

    return res.status(HTTP_STATUS.OK).json({
      status: HTTP_STATUS.OK,
      message: MESSAGES.RESUMES.DELETE.SUCCEED, // 삭제 성공 메시지
      data: { id: data.id }, // 삭제된 이력서 ID 반환
    });
  } catch (error) {
    next(error); // 오류 발생 시 다음 미들웨어로 전달
  }
});

export { resumesRouter }; // resumesRouter 내보내기
