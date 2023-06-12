"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLog = exports.postLog = exports.getLog = exports.basePage = void 0;
const Log_1 = require("../../models/Log");
function basePage(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.send("Log API");
    });
}
exports.basePage = basePage;
// READ
// req.body corresponds to the mongoose Model.find() command
/*

// find all documents
await MyModel.find({}); ---> {}

// find all documents named john
await MyModel.find({ name: 'john').exec(); --> { name: 'john' }

// find all documents named john and at least 18
await MyModel.find({ name: 'john', age: { $gte: 18 } }).exec(); --> { name: 'john', age: { $gte: 18 } }

*/
function getLog(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        //   // TODO: error handling
        const data = req.body;
        // {} corresponds to full table
        // otherwise send an exercise name
        let logTable;
        // const exerciseRow = exerciseModel.find({});
        try {
            logTable = yield Log_1.logModel.find(data).exec();
            res.send(logTable);
        }
        catch (err) {
            // TODO: set up error handling
            res.send("error");
        }
        // res.send("TODO: send log data");
    });
}
exports.getLog = getLog;
function logTypeCheck(data) {
    if (data.title === undefined || data.startTime == undefined ||
        data.endTime === undefined || data.description === undefined ||
        data.exercise_title === undefined || data.superset_id === undefined
        || data.exercise_notes === undefined
        || data.set_index === undefined
        || data.set_type === undefined
        || data.weight_lbs === undefined
        || data.reps === undefined
        || data.distance_miles === undefined
        || data.duration_seconds === undefined) {
        throw new Error("data doesn't satisfy Exercise type");
    }
    else {
    }
}
// Write a single exercise
function postLog(req, res) {
    const data = req.body;
    logTypeCheck(data);
    // TODO: make sure data follows my desired type
    // TODO: check if exercise already exists
    // Write `data` into the exerciseModel
    const document = Log_1.logModel.build(data);
    document.save(); // TODO: error handling??
    // res.send('Data Received: ' + JSON.stringify(data));
    res.json(data);
    // res.send('POST request to post page');
}
exports.postLog = postLog;
function deleteLog(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // const id = req.params.id;
        // TODO: make sure ID in db
        // TODO: delete row/document in table/collection
        const deleteCount = yield Log_1.logModel.deleteOne(req.body);
        // TODO: respond with ????
        // res.json({
        //     message: `DELETE ${req.params.id} API for MERN Boilerplate`,
        // });
    });
}
exports.deleteLog = deleteLog;
