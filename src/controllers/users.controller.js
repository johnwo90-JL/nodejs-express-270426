import express from "express";
import { RootSchemaPostData } from "../schemas/root.schema.js";
import { getAll, getById } from "../services/users.service.js";

/**
 * Handler for the `/:id`-endpoint
 * Returns one specific user
 * 
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


/**
 * Handler for the `/`-endpoint
 * Returns all users
 * 
 * @param {express.Request} req
 * @param {express.Response} res 
 */
export function getUsers(req, res) {
    const users = getAll();
    
    res.status(200).send(users);
} 
