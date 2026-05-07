import express from "express";
import { useRequestId, validateRequestDataSchema } from "../middlewares/index.js";
import { getById } from "../schemas/users.schema.js";
import { getUser } from "../controllers/users.controller.js";

export const usersRouter = express.Router();

usersRouter.get("/:id", useRequestId, validateRequestDataSchema(getById), getUser);