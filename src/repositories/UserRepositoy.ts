import { inject, injectable } from "inversify";
import { ILogin } from "../server/responseType/ILogin";
import { IUserRepository } from "./UserRepository.interface";
import { INVERSIFY_TYPES } from "../inversify/inversifyTypes";
import { IUserDatastore } from "../database/datastores/UserDatastore.interface";
import { userResponse } from "../common/helpers/ResponseHandle";

@injectable()
export class UserRepository implements IUserRepository {
    constructor(
        @inject(INVERSIFY_TYPES.UserDatastore)
        private userDatastore: IUserDatastore,
    ){}

    public async userLogin(email: string, password: string): Promise<ILogin> {

        const userDetail = await this.userDatastore.getUserByEmail(email);
        if(!userDetail) {
            throw new Error(`No user found`);
        }

        const userRole = await this.userDatastore.getUserRoleById(userDetail.id);
        if(!userRole) {
            throw new Error(`No user found`);
        }
        const userData = {
            user: userResponse(userDetail),
            accessToken: "dummy access token",
            refreshToken: "dummy refresh token"
        }
        return userData
    }
}