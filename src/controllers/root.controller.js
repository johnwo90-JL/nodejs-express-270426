import express from "express";
import { RootSchemaPostData } from "../schemas/root.schema.js";

/**
 * Handler for the `/`-endpoint
 * @param {express.Request} req
 * @param {express.Response} res 
 */
export function getRootHandler(req, res) {
    console.debug("[DBG] Request ID:", req.requestId);

    const { someValue } = req.params;

     // Fast-returns, guard-clauses, early-return
    if (someValue !== "ping") {
        return res.status(400).send(`Invalid input! Got "${someValue}", expected "ping"`);
    }
    
    res.status(200).send("Pong!");
} 


/**
 * Handler for the `/data`-endpoint
 * @param {express.Request} req
 * @param {express.Response} res 
 */
export async function postRootDataHandler(req, res) {
    console.debug("[DBG] Request ID:", req.requestId);
    
    const { email, password } = req.parsedData;
    
    res.status(200).json({ email, password });

} 