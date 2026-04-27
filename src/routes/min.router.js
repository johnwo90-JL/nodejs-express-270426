import express from "express";
import { getRootHandler } from "../controllers/root.controller.js";
import { getMinRouterHandler } from "../controllers/min.controller.js";

export const minRouter = express.Router();

minRouter.get("/", getMinRouterHandler);