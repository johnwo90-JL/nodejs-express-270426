import express, { json } from "express";
import { rootRouter, minRouter } from "./routes/index.js";

// Express.js app
export const app = express();

// Opprette endepunkt "[hostaddr]/"
app.use(json());
app.use("/", rootRouter);
app.use("/mine-endepunkter", minRouter);

export function startServer(port = 3000, host = "0.0.0.0") {
    app.listen(port, host, (err) => {
        if (err) {
            console.error(err);
            process.exit(1); //- == 0 => OK / Graceful exit/termination
                             //- != 0 => Feil
        }
    
        console.log(`Server listening on port 3000.`);
    });
}
