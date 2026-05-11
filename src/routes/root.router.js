import express from "express";
import { getRootHandler, postRootDataHandler } from "../controllers/root.controller.js";
import { useRequestId } from "../middlewares/request-id.middleware.js";
import { requestLoggerMiddleware } from "../middlewares/logger.middleware.js";
import { RootSchemaPostData } from "../schemas/root.schema.js";
import { validateRequestDataSchema } from "../middlewares/validate-request-data.middleware.js";

export const rootRouter = express.Router();

rootRouter.get("/ping", useRequestId, requestLoggerMiddleware, getRootHandler);
rootRouter.post("/data", useRequestId, requestLoggerMiddleware, validateRequestDataSchema(RootSchemaPostData), postRootDataHandler);