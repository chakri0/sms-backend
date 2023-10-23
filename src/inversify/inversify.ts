import { Container } from "inversify";
import { INVERSIFY_TYPES } from "./inversifyTypes";
import { IRouterContorller } from "../server/controllers/IRouterController";
import { UserController } from "../server/controllers/userController/UserContoller";
import Server from "../server/Server";
import { IAuthenticationService } from "../instanses/authentication/AuthenticationService.interface";
import AuthenticationService from "../instanses/authentication/AuthenticationService";
import { IUserDatastore } from "../database/datastores/UserDatastore.interface";
import { UserDatastore } from "../database/datastores/UserDatastore";
import { IUserRepository } from "../repositories/UserRepository.interface";
import { UserRepository } from "../repositories/UserRepositoy";

export function initialiseAuthServices(container: Container): Container {
  container
    .bind<IAuthenticationService>(INVERSIFY_TYPES.AuthenticationService)
    .to(AuthenticationService);
  return container;
}

export function initialiseDatastore(container: Container): Container {
    container.bind<IUserDatastore>(INVERSIFY_TYPES.UserDatastore).to(UserDatastore)

    return container
}

export function initialiseRepositories(container: Container): Container {
  container.bind<IUserRepository>(INVERSIFY_TYPES.UserRepository).to(UserRepository)

  return container
}

export function initialiseControllers(container: Container): Container {
  container
    .bind<IRouterContorller>(INVERSIFY_TYPES.Controller)
    .to(UserController);
  return container;
}

export function initialiseServer(container: Container): Container {
  container.bind<Server>(INVERSIFY_TYPES.Server).to(Server).inSingletonScope();
  return container;
}
