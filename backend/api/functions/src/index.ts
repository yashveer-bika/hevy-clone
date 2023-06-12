import express, {Express} from "express";
import dotenv from "dotenv";
import {exerciseRouter, LogRouter} from "./routes";
import {connectToDB} from "./controllers/db";
import cors from "cors";
// import { logRouter } from "./routes/logRouter";


dotenv.config();

const app: Express = express();
const port = process.env.PORT;
console.log(`Port = ${port}`);

connectToDB();

// // Basic homepage
// app.get("/", (req: Request, res: Response) => {
//   res.send("Express + TypeScript Server is running");
// });

app.use(cors());

app.use("/log", LogRouter);

app.use("/exercises", exerciseRouter);

// // a document instance
// exerciseModel.build(
//   {
//       "name": "Plank",
//       "equipment": "None",
//       "primary": "Abdominals",
//       "img": "default", // TODO: figure out a good type for img
//       "style": "Duration",
//       "secondary": []
//     }
// ).save();

// TODO: add all my routes here

// Listen command is required
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

export default app;

/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// import {onRequest} from "firebase-functions/v2/https";
// import * as logger from "firebase-functions/logger";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
