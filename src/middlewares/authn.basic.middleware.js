import express from "express";
import { parse } from "../providers/authn.basic.provider.js";

/**
 * 
 * @param {import("express").Request} req 
 * @param {*} res 
 * @param {*} next 
 */
export function useBasicAuthn(req, res, next) {
    const authnHeader = req.headers.authorization?.split(" ")[1] || req.headers["www-authenticate"]?.split(" ")[1] || null;
    
    if (!authnHeader) {
        res.sendStatus(400);
        console.warn("User authn attempt failed, headers:", authnHeader);
        return;
    }

    console.log(authnHeader);

    const authnResult = parse(authnHeader);


    if (authnResult.username !== "Foo") {
        res.sendStatus(401);
        console.warn("User authn attempt failed, user doesn't exist!");
        return;
    }
    
    if (authnResult.password !== "Foobar123") {
        res.sendStatus(401);
        console.warn("User authn attempt failed, invalid password!");
        return;
    }

    req.authn = { ...authnResult, password: null }; // TODO, diskuter

    next();
}
