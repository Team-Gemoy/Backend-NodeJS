import express, { Application } from "express";
import cors from "cors";
import * as config from "../knexfile";
import knex from "knex";
import { Model } from "objection";
import notificationRoute from "./routes/NotificationRoute";

const ENV: string = "development";
//@ts-expect-error
const knexInstance = knex(config[ENV]);
Model.knex(knexInstance);

const app: Application = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json({ limit: "20mb" }));

app.use("/api", notificationRoute);
export default app;
