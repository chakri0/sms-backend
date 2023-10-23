import config from "./config";

export interface IAppConfig {
  app: {
    frontend: {
      baseUrl: string;
    };
    backend: {
      baseUrl: string
      PORT: string
    }
  };
  email: {
    host: string;
    port: number;
    fromEmail: string;
    secure: boolean;
    auth: {
      user: string;
      pass: string;
    };
    logger: boolean;
  };

  server: string
}

const appConfig: IAppConfig = config;

export default appConfig;
