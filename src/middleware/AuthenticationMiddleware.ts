import express from 'express';
import { inject, injectable } from 'inversify';
import { expressPromiseCd } from './ExperssCd';


@injectable()
export class AuthenticationMiddleware {
    constructor() 
    {}

    public authHandler(
        hideField?: string[],
        userIsRequired: boolean | undefined = true
    ): expressPromiseCd {
        return async (
            request: express.Request,
            response: express.Response,
            next: express.NextFunction
        ): Promise<void> => {
            const handleRequestClose = async () => {
                const cleanUp = () => {
                    response.removeListener('close', handleRequestClose);
                    response.removeListener('finish', handleRequestClose);
                    response.removeListener('error', handleRequestClose);
                };
                cleanUp();
            }
            response.once('close', handleRequestClose);
            response.once('finish', handleRequestClose);
            response.once('error', handleRequestClose);

            next();
        }
    }
}