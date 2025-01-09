// 1. 컨트롤러
// 2. 서비스
// 3. 레포지토리
// 서비스를 임포트 하기
// Authcontroller 클래스 생성
// req, res 받아오기
// 내보내기

import authService from '../service/auth.service.js';

class Authcontroller {
  #service;

  constructor(authService) {
    this.#service = authService;
  }
  signUp = async (req, res) => {
    const { email, password, name } = req.body;

    const user = await this.#service.signUp({
      email,
      password,
      name,
    });
    res.status(201).json({ user, message: '회원가입완료' });
  };
}
export default new Authcontroller(authService);
