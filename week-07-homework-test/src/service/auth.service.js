// 1. 컨트롤러
// 2. 서비스
// 3. 레포지토리
// 유저레포지토리를 가져오기
// Authservice 클래스 생성
// 회원가입을 하는 함수 생성
// 그 안에서 userRepository 인스턴스를 사용하기

import userRepository from '../repository/user.repository.js';

class Authservice {
  #repository;

  constructor(userRepository) {
    this.#repository = userRepository;
  }

  signUp = async ({ email, password, name }) => {
    // const user = await this.#repository.signUp({
    //   email,
    //   password,
    //   name,
    // });

    const user = await this.#repository.signUp({
      email,
      password,
      name,
    });
    return user;
  };
}
export default new Authservice(userRepository);
