import { describe, it, expect, vi, beforeEach } from "vitest";
import { requestLoggerMiddleware } from "../middlewares/logger.middleware";

console.log = vi.fn();

describe("Request logger middleware", () => {
     it("should log to console or `req`", () => {
        const next = vi.fn();
        
        requestLoggerMiddleware({
            method: "GET",
            url: "https://somesite.com/ping",
            requestId: "foo"
        }, null, next);

        expect(console.log).toHaveBeenCalled();
    });
});