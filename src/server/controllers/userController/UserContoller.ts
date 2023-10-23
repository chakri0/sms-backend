import express from 'express';
import { inject, injectable } from 'inversify';
import { IRouterContorller } from '../IRouterController';
import { INVERSIFY_TYPES } from '../../../inversify/inversifyTypes';
import { IUserDatastore } from '../../../database/datastores/UserDatastore.interface';
import { IUserRepository } from '../../../repositories/UserRepository.interface';

@injectable()
export class UserController implements IRouterContorller {
    public readonly router: express.Router;

    private path = '/user';

    constructor(
        @inject(INVERSIFY_TYPES.UserDatastore)
        private userDatastore: IUserDatastore,
        @inject(INVERSIFY_TYPES.UserRepository)
        private userRepository: IUserRepository,
    ) {
        this.router = express.Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(`${this.path}/login`,
        this.UserLogin
        )
    }

    private UserLogin = async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        try {
            console.log(req);
            
            const { email, password } = req.body; 
            const user = await this.userRepository.userLogin(email, password)
            res.status(200).json({user})    
        } catch (error) {
            next(error);
        }
    }
}