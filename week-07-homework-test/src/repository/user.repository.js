// 1. 컨트롤러
// 2. 서비스
// 3. 레포지토리
// 우리가 사용해야할 orm인 prisma를 가져오기
// UserRepository 클래스 생성
// 회원가입을 해주는 매서드 만들기
// 만든 레포지토리 내보내기

import { prisma } from '../utils/prisma.util.js';

class UserRepository {
  #orm; // userRepository안에서 사용할 orm 선언하기

  constructor(prisma) {
    this.#orm = prisma;
  }

  signUp = async ({ email, password, name }) => {
    // 사용자 생성
    const user = await this.#orm.user.create({
      data: {
        email,
        password,
        name,
      },
    });
    // const user = {id:1, name:"영훈", age:30}
    return user;
  };
}
export default new UserRepository(prisma); // 인스턴스 생성후 내보내기 userRepository
