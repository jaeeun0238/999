// dotenv 패키지를 사용하여 .env 파일에 정의된 환경 변수를 로드합니다.
import 'dotenv/config';

// 서버가 실행될 포트를 환경 변수에서 가져옵니다.
// 이 값은 서버의 포트 번호로 사용됩니다.
export const SERVER_PORT = process.env.SERVER_PORT;

// 액세스 토큰을 생성할 때 사용할 비밀키를 환경 변수에서 가져옵니다.
// 이 값은 토큰의 서명 및 검증에 사용됩니다.
export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

// 아래 코드는 주석 처리된 객체를 정의합니다.
// dotenvObj는 환경 변수에서 가져온 SERVER_PORT와 ACCESS_TOKEN_SECRET을 포함합니다.
// const dotenvObj = {
//     SERVER_PORT: process.env.SERVER_PORT,
//     ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET
// }

// 주석 처리된 객체를 export합니다. 
// export default dotenvObj;
