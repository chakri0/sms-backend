import { ILogin } from "../server/responseType/ILogin";

export interface IUserRepository {
    userLogin(email: string, password: string): Promise<ILogin>
}