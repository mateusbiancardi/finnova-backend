import { FastifyInstance } from 'fastify';
import * as controllers from '../controllers';
import { utils } from '../utils';
import { loginSchema, signupSchema } from '../schemas/User';

async function userRouter(fastify: FastifyInstance) {
  fastify.post(
    '/login',
    {
      schema: {
        body: {
          type: 'object',
          required: ['login', 'password'],
          properties: {
            login: { type: 'string', minLength: 2, maxLength: 50 },
            password: { type: 'string', minLength: 6, maxLength: 30 },
          },
        },
      },
      config: {
        description: 'User login endpoint',
      },
      preValidation: utils.preValidation(loginSchema),
    },
    controllers.login,
  );

  fastify.post(
    '/signup',
    {
      schema: {
        body: {
          type: 'object',
          required: ['login', 'password'],
          properties: {
            login: { type: 'string', minLength: 2, maxLength: 50 },
            password: { type: 'string', minLength: 6, maxLength: 30 },
          },
        },
      },
      config: {
        description: 'User signup endpoint',
      },
      preValidation: utils.preValidation(signupSchema),
    },
    controllers.signUp,
  );
}

export default userRouter;
