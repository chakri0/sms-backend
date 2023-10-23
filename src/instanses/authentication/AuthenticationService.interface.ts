export interface IAuthenticationService {
    getAccessToken(payload: any): string;
    verifyAccessToken(token: string): any | null;
}
  