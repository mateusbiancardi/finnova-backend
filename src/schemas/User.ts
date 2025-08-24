import Joi from 'joi';

export interface IUserLoginDto {
  login: string;
  password: string;
}

export interface IUserSignupDto {
  login: string;
  password: string;
}

export const loginSchema = Joi.object({
  login: Joi.string().min(2).max(50).required(),
  password: Joi.string().min(6).max(30).required(),
});

export const signupSchema = Joi.object({
  login: Joi.string().min(2).max(50).required(),
  password: Joi.string().min(6).max(30).required(),
});
