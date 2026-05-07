import express from "express";
import { RootSchemaPostData } from "../schemas/root.schema.js";
import { getById } from "../services/users.service.js";

/**
 * Handler for the `/`-endpoint
 * @param {express.Request} req
 * @param {express.Response} res 
 */
export function getUser(req, res) {
    const { id } = req.parsedData.params;

    const user = getById(id);

    if (user === null) {
        return res.sendStatus(404);
    }
    
    res.status(200).send(user);
} 
