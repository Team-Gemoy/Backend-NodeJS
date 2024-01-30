import type { Knex } from "knex";
import "dotenv/config";

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    seeds: {
      directory: "./src/database/seeds/dev"
    },
    migrations: {
      directory: "./src/database/migrations"
    }
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    seeds: {
      directory: "./database/seeds/dev"
    },
    migrations: {
      directory: "./database/migrations"
    }
  }
};

module.exports = config;
