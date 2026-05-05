import express from "express";
import { ZodObject } from "zod";

/**
 * 
 * @param {ZodObject} schema
 * @returns {function (express.Request, express.Response, express.NextFunction): void }
 */
export function validateRequestDataSchema(schema) {
    return async function (req, res, next) {
        req.parsedData = await schema.parseAsync(req);
        next();
    };
}


async function foo(num) {
    return 2 * num;
}


(async () => console.log(await foo(123)))();