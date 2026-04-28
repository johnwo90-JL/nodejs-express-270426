import { describe, it, expect, vi, beforeEach } from "vitest";
import request from "supertest";

import { app } from "../index.js";


describe("Unit - Root GET request handler", () => {
    it(`should return 400 if param.someValue !== "ping"`, async () => {
        const res = await request(app)
            .get("/not-ping");

        expect(res.statusCode).toBe(400);
    });

    it(`should return 200 if param.someValue === "ping"`, async () => {
        const res = await request(app)
            .get("/ping");

        expect(res.status).toBe(200);
    });

});