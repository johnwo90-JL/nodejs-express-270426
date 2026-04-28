import express from "express";
import { getRootHandler } from "../controllers/root.controller.js";

export const rootRouter = express.Router();

rootRouter.get("/:someValue", getRootHandler);