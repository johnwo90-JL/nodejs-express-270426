
import JWT from "jsonwebtoken";

const SECRET = "foobar1234567890";

export function parse(payload) {
    try { 
        const result = JWT.verify(payload, SECRET);

        return {
            username: result.username,
            password: null
        };
    } catch (err) {
        console.error("An error occurred while decoding JWT-authentication payload.", err);
        return null;
    }
}

export function createPayload({ username }) {
    try {
        return JWT.sign({ username }, SECRET);
    } catch (err) {
        console.error("An error occurred while signing the JWT.", err);
        return null;
    }
}