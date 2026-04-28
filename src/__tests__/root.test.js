import { describe, it, expect, vi, beforeEach } from "vitest";

// Test-target
import { getRootHandler } from "../controllers/root.controller";


// Request & Response mocks

const createRequest = (someValue) => {
    return {
        params: {
            someValue
        }
    };
};

const createResponse = () => {
    return {
        status: vi.fn((statusCode) => {
            return {
                send: vi.fn((msg) => console.log(msg))
            }
        })
    };
};

let req = createRequest("DEFAULT");
let res = createResponse();

describe("Unit - Root GET request handler", () => {

    beforeEach(()=>{
        req = createRequest("DEFAULT");
        res = createResponse();
    });

    it(`should return 400 if param.someValue !== "ping"`, () => {
        getRootHandler(req, res);
        expect(res.status).toHaveBeenCalledWith(400);
    });

    it(`should return 200 if param.someValue === "ping"`, () => {
        req.params.someValue = "ping";
        getRootHandler(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
    });

});