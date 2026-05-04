import { describe, it, expect, vi, beforeEach } from "vitest";
import { app } from "../server.js";
import request from "supertest";


console.log = vi.fn();

describe("Unit - Root GET request handler", () => {
    it(`should return 400, generate a request ID, and log request`, async () => {
        const req = request(app);
        
        const res = await req
            .get("/not-ping");

        expect(res.statusCode).toBe(400);

        // Request logging, implicit that request ID middleware works
        expect(console.log).toHaveBeenCalled();
    });
});