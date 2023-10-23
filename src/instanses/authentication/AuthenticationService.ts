import jwt from 'jsonwebtoken';
import { injectable } from 'inversify'
import { IAuthenticationService } from './AuthenticationService.interface';

@injectable()
export class AuthenticationService implements IAuthenticationService {
  private secretKey: string = 'yourSecretKey'; // Replace with your actual secret key

  public getAccessToken(payload: any): string {
    // Create a JWT token with the given payload
    const token = jwt.sign(payload, this.secretKey, { expiresIn: '1h' }); // You can customize the expiration time

    return token;
  }

  public verifyAccessToken(token: string): any | null {
    try {
      // Verify the JWT token and return the payload if it's valid
      const payload = jwt.verify(token, this.secretKey);
      return payload;
    } catch (error) {
      // If the token is invalid or has expired, return null
      return null;
    }
  }
}

export default AuthenticationService;