import express from "express";

/**
 * Handler for the `/`-endpoint
 * @param {express.Request} req
 * @param {express.Response} res 
 */
export function getMinRouterHandler(req, res) {
    res.status(200).send("Min router GET-endepunkt");
}