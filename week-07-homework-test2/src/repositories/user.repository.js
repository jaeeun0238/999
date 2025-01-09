// 1. repositories
// 2. services
// 3. controllers
// prisma import 하기 (orm 가져오려면 해야함)
// UserRepository class 생성
// 회원가입 매서드 만들기
// 만든 레포지토리 내보내기

import { prisma } from '../utils/prisma.util.js';

class UserRepository {
  #orm;

  constructor(prisma) {
    this.#orm = prisma;
  }

  signUp = async ({ email, password, name }) => {
    const user = await this.#orm.user.create({
      data: {
        email,
        password,
        name,
      },
    });
    return user;
  };
}

export default new UserRepository(prisma);
