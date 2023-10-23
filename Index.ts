import { ServerInit } from "./src/ServerInit";
import config from "./src/config/config";

process.env.NODE_PATH = __dirname;
process.env.PORT = config.app.backend.PORT;
process.env.NODE_ENV = config.server;

// Log node warnings
process.on("warning", (e) => console.log(e.stack));

// server less handler
let serverInit: ServerInit | undefined;

if (!serverInit) {
  serverInit = new ServerInit();
}


if (process.env.NODE_ENV === 'production') {
    serverInit.appServer.listen()
} else {
    serverInit.appServer.listen()
}
