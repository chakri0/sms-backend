import { DataSource } from "typeorm";
import * as mysqlDriver from "mysql2";
import { DataSourceOptions } from "typeorm";

export function getConfig() {
  return {
    driver: mysqlDriver,
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "phillypizza_local",
    synchronize: false,
    migrations: ["src/database/migrations/*.ts"],
    entities: ["src/database/entities/*.ts"],
  } as DataSourceOptions;
}

const datasource = new DataSource(getConfig()); // config is one that is defined in datasource.config.ts file
datasource.initialize();
export default datasource;