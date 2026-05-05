import express from "express";
import { getRootHandler, postRootDataHandler } from "../controllers/root.controller.js";
import { generateRequestId } from "../middlewares/request-id.middleware.js";
import { requestLoggerMiddleware } from "../middlewares/logger.middleware.js";
import { RootSchemaPostData } from "../schemas/root.schema.js";
import { validateRequestDataSchema } from "../middlewares/validate-request-data.middleware.js";

export const rootRouter = express.Router();

rootRouter.get("/:someValue", generateRequestId, requestLoggerMiddleware, getRootHandler);
rootRouter.post("/data", generateRequestId, requestLoggerMiddleware, validateRequestDataSchema(RootSchemaPostData), postRootDataHandler);