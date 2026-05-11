


export function parse(payload) {
    try { 
        const decoded = Buffer.from(payload, 'base64').toString('utf8');
        const [username, password, ..._rest] = decoded.split(":");

        if (!(username && password) || _rest.length !== 0) {
            throw new Error("Decoded payload doesn't contain exactly 2 elements");
        }

        return {
            username,
            password 
        };
    } catch (err) {
        console.error("An error occurred while decoding BASIC-authentication payload.", err);
        return null;
    }
}