import { describe, it, expect, vi, beforeEach } from "vitest";
import { generateRequestId } from "../middlewares/request-id.middleware";

describe("Request ID middleware", () => {
    it("should generate a random UUID for `req`", () => {
        const req = {};
        const next = vi.fn();
        
        generateRequestId(req, null, next);

        expect(req.requestId).toBeDefined();
        expect(req.requestId.length).toBeDefined();
        expect(req.requestId.length).toEqual(32+4);
    });
});