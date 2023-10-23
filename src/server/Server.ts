import express from 'express';
// import bodyParser from 'body-paresr'
import { injectable, multiInject } from 'inversify';
import { INVERSIFY_TYPES } from '../inversify/inversifyTypes';
import { IRouterContorller } from './controllers/IRouterController';

@injectable()
export class Server {
    public readonly app: express.Application;
    constructor(
        @multiInject(INVERSIFY_TYPES.Controller) controllers: IRouterContorller[]
    ) {
        this.app = express();
        this.initializeMiddleware();
        this.initializeContollers(controllers)
    }

    public listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`app listening on port ${process.env.PORT}`);
        })
    }

    private initializeMiddleware() {
        this.app.use(express.json())
    }

    private initializeContollers(controllers: IRouterContorller[]) {
        controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        })
    }
}

export default Server;