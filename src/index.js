import express from "express";
import { rootRouter, minRouter } from "./routes/index.js";


// Express.js app
export const app = express();


// Opprette endepunkt "[hostaddr]/"
app.use("/", rootRouter);
app.use("/mine-endepunkter", minRouter);


// // Start server
// app.listen(3000, "0.0.0.0", (err) => {
//     if (err) {
//         console.error(err);
//         process.exit(1); //- == 0 => OK / Graceful exit/termination
//                          //- != 0 => Feil
//     }

//     console.log(`Server listening on port 3000.`);
// });
