import express from "express";
import { getRootHandler, postRootDataHandler } from "../controllers/root.controller.js";
import { generateRequestId } from "../middlewares/request-id.middleware.js";
import { requestLoggerMiddleware } from "../middlewares/logger.middleware.js";

export const rootRouter = express.Router();

rootRouter.get("/:someValue", generateRequestId, requestLoggerMiddleware, getRootHandler);
rootRouter.post("/data", generateRequestId, requestLoggerMiddleware, /* Validation middleware */ postRootDataHandler);