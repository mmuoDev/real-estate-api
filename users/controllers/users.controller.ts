import express from 'express';
import usersService from '../services/users.service';
import argon2 from 'argon2';

class UsersController {

    async createUser(req: express.Request, res: express.Response) {
        req.body.password = await argon2.hash(req.body.password);
        const userId = await usersService.create(req.body);
        res.status(201).send({ id: userId });
    }

}

export default new UsersController();