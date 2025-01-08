import Joi from 'joi';
import { MESSAGES } from '../../constants/message.constant.js';
import { MIN_PASSWORD_LENGTH } from '../../constants/auth.constant.js';

// 조이 오브젝트라는 메서드 이용해서 이메일, 패스워드, 패스워드 확인 및 이름을 검증할 스키마를 만든다.
const schema = Joi.object({
   // 이메일 필드: 문자열 형식, 필수, 올바른 이메일 형식인지 검증
  email: Joi.string().email().required().messages({
    'any.required': MESSAGES.AUTH.COMMON.EMAIL.REQUIRED,
    'string.email': MESSAGES.AUTH.COMMON.EMAIL.INVALID_FORMAT,
  }),
  // 비밀번호 필드: 문자열 형식, 필수, 최소 길이 검증
  password: Joi.string().required().min(MIN_PASSWORD_LENGTH).messages({
    'any.required': MESSAGES.AUTH.COMMON.PASSWORD.REQURIED,
    'string.min': MESSAGES.AUTH.COMMON.PASSWORD.MIN_LENGTH,
  }),
  // 비밀번호 확인 필드: 문자열 형식, 필수, 비밀번호와 일치해야 함
  passwordConfirm: Joi.string().required().valid(Joi.ref('password')).messages({
    'any.required': MESSAGES.AUTH.COMMON.PASSWORD_CONFIRM.REQURIED,
    'any.only': MESSAGES.AUTH.COMMON.PASSWORD_CONFIRM.NOT_MACHTED_WITH_PASSWORD,
  }),
  // 이름 필드: 문자열 형식, 필수
  name: Joi.string().required().messages({
    'any.required': MESSAGES.AUTH.COMMON.NAME.REQURIED,
  }),
});

export const signUpValidator = async (req, res, next) => {
  try {
    await schema.validateAsync(req.body);
    next();
  } catch (error) {
    next(error);
  }
};
