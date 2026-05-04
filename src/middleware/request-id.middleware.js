import express from "express";
import { randomUUID } from "node:crypto";

export function generateRequestId(req, res, next) {
    req.requestId = randomUUID();

    next();
}
