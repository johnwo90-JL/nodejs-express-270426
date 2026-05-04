import express from "express";

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