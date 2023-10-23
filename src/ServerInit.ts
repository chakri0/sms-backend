import { Container } from "inversify";
import "reflect-metadata";
import { Server } from "./server/Server";
import {
  initialiseAuthServices,
  initialiseControllers,
  initialiseDatastore,
  initialiseRepositories,
  initialiseServer,
} from "./inversify/inversify";
import { INVERSIFY_TYPES } from "./inversify/inversifyTypes";

export class ServerInit {
  public readonly appServer: Server;

  private inversifyContainer: Container;

  constructor() {
    this.inversifyContainer = this.initInversifyContainer();

    this.appServer = this.inversifyContainer.get<Server>(
      INVERSIFY_TYPES.Server
    );
  }
  /**
   * Initialise server dependecy
   * @Author Aman kumar Choudhary
   */

  private initInversifyContainer(): Container {
    const container = new Container();

    initialiseAuthServices(container);
    initialiseDatastore(container);
    initialiseRepositories(container);
    initialiseControllers(container);
    initialiseServer(container);
    
    return container;
  }
}

export default ServerInit;
