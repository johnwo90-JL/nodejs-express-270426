import express, { json } from "express";
import { rootRouter, minRouter } from "./routes/index.js";
import { requestLoggerMiddleware } from "./middlewares/logger.middleware.js";
import { ErrorHandler } from "./middlewares/error-handler.middleware.js";

// Express.js app
export const app = express();

// Opprette endepunkt "[hostaddr]/"
app.use(json());
app.use("/", rootRouter);
app.use("/mine-endepunkter", minRouter);

// app.use(ErrorHandler);
app.use(async (err, req, res, next) => {
    // We have (an) error(s)!
    console.log("Error handler:", err);
    
    res.sendStatus(400);
    requestLoggerMiddleware(req,res,() => {});
})

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

