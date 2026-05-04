import { writeFileSync, appendFileSync, existsSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";
import express from "express";

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {express.NextFunction} next 
 */
export function requestLoggerMiddleware(req, res, next) {
    // 1. Sjekk om loggfil for inneværende dag eksisterer
    // 2. Skrive til loggfil
    // 3. Kalle `next()`
    const logfile = `request-${new Date().toISOString().split("T")[0]}.log`

    // Does directory exist?
    if (!existsSync(resolve(process.cwd(), "logs"))) {
        mkdirSync(resolve(process.cwd(), "logs"));
    }

    // Does logfile exist?
    if (!existsSync(resolve(process.cwd(), "logs", logfile))) {
        writeFileSync(resolve(process.cwd(), "logs", logfile), "");
    }

    const logEntry = `${new Date().toISOString()}   - ${req.method} ${req.url} ${req.requestId}\n`;
    appendFileSync(resolve(process.cwd(), "logs", logfile), logEntry);
    console.log(logEntry);

    next();
}