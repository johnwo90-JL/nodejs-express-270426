import express from "express";
import { getRootHandler } from "../controllers/root.controller.js";
import { generateRequestId } from "../middleware/request-id.middleware.js";
import { requestLoggerMiddleware } from "../middleware/logger.middleware.js";

export const rootRouter = express.Router();

rootRouter.get("/:someValue", generateRequestId, requestLoggerMiddleware, getRootHandler);