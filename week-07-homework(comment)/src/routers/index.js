//express 도구를 가져온다. express 는 서버를 만들기 위해 도와주는 도구입니다.
import express from 'express'; 
import { authRouter } from './auth.router.js'; // 인증 관련 라우터 
import { usersRouter } from './users.router.js'; // 사용자 관련 라우터 
import { resumesRouter } from './resumes.router.js'; // 이력서 관련 라우터 
import { requireAccessToken } from '../middlewares/require-access-token.middleware.js'; // 액세스 토큰 요구 미들웨어 

const apiRouter = express.Router(); // Express 라우터 인스턴스 생성

// '/auth' 경로에 인증 라우터 사용
apiRouter.use('/auth', authRouter);

// '/users' 경로에 사용자 라우터 사용
apiRouter.use('/users', usersRouter);

// '/resumes' 경로에 이력서 라우터 사용, 액세스 토큰 요구
apiRouter.use('/resumes', requireAccessToken, resumesRouter);

// apiRouter 내보내기
export { apiRouter };
