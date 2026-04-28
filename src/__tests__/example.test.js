import { it, describe, should, vi, expect } from "vitest";

// Test-target
import { logger }from "../example.js";


describe("Unit: Logger", () => {
    it("should log to the interface, using `log`", () => {
        const mockInterface = {
            log: vi.fn(),
            info: vi.fn(),
            warn: vi.fn(),
            error: vi.fn(),
        };

         mockInterface.log("Hello, World!");

         expect(mockInterface.log).calledOnceWith("Hello, World!");
    });
});

