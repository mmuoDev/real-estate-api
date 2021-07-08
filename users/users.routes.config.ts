import { CommonRoutesConfig } from '../commons/common.routes.config';
import UsersController from './controllers/users.controller';
import BodyValidationMiddleware from '../commons/middleware/body.validation.middleware';
import { body } from 'express-validator';

import express from 'express';

export class UsersRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'UsersRoutes');
    }

    configureRoutes(): express.Application {
        this.app
            .route(`/users`)
            .post(
                body('email').isEmail(),
                body('password')
                    .isLength({ min: 5 })
                    .withMessage('Must include password (5+ characters)'),
                BodyValidationMiddleware.verifyBodyFieldsErrors,
                UsersController.createUser
            );

        return this.app;
    }
}