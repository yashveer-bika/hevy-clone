"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const db = mongoose_1.default.connection;
const DB_URI = process.env.DB_URI;
function connectToDB() {
    mongoose_1.default.connect(DB_URI);
    // When successfully connected
    mongoose_1.default.connection.on('connected', () => {
        console.log('Connection to database established successfully');
    });
    // If the connection throws an error
    mongoose_1.default.connection.on('error', (err) => {
        console.error(`Error connecting to database: ${err}`);
    });
    // When the connection is disconnected
    mongoose_1.default.connection.on('disconnected', () => {
        console.log('Database disconnected');
    });
}
exports.connectToDB = connectToDB;
// // TODO: write a good type for the callback function
// export function find (name : string, query : mongoose.mongo.Filter<mongoose.mongo.BSON.Document> , cb : any) {
//     mongoose.connection.db.collection(name, (err : any, collection : any) {
//        collection.find(query).toArray(cb);
//    });
// }
// connectToDB();
