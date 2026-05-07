import express from "express";
import { randomUUID } from "node:crypto";

export function useRequestId(req, res, next) {
    req.requestId = randomUUID();

    next();
}
