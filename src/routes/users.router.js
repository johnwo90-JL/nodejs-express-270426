import express from "express";
import { useRequestId, validateRequestDataSchema } from "../middlewares/index.js";
import { getById } from "../schemas/users.schema.js";
import { getUser, getUsers } from "../controllers/users.controller.js";
import { useBasicAuthn } from "../middlewares/authn.basic.middleware.js";

export const usersRouter = express.Router();

usersRouter.get("/", useRequestId, useBasicAuthn, getUsers);
usersRouter.get("/:id", useRequestId, validateRequestDataSchema(getById), getUser);