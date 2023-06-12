"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = require("./routes/");
const db_1 = require("./controllers/db");
const cors_1 = __importDefault(require("cors"));
// import { logRouter } from './routes/logRouter';
const firebase_functions_1 = __importDefault(require("firebase-functions"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
console.log(`Port = ${port}`);
(0, db_1.connectToDB)();
// // Basic homepage
// app.get('/', (req: Request, res: Response) => {
//   res.send('Express + TypeScript Server is running');
// });
app.use((0, cors_1.default)());
app.use('/log', routes_1.logRouter);
app.use('/exercises', routes_1.exerciseRouter);
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
exports.default = app;
exports.app = firebase_functions_1.default.https.onRequest(app);
