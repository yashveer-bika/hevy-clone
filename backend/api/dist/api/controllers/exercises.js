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
exports.deleteExercise = exports.postExercise = exports.getExercises = void 0;
const Exercise_1 = require("../../models/Exercise");
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
function getExercises(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // TODO: get exercises from database
        // TODO: set up some error checking on GET request (req.body)
        //    empty table case works
        const data = req.body;
        // {} corresponds to full table
        // otherwise send an exercise name
        let exerciseTable;
        // const exerciseRow = exerciseModel.find({});
        try {
            exerciseTable = yield Exercise_1.exerciseModel.find(data).exec();
            res.send(exerciseTable);
        }
        catch (err) {
            // TODO: set up error handling
        }
    });
}
exports.getExercises = getExercises;
function exerciseTypeCheck(data) {
    if (data.name === undefined || data.equipment == undefined ||
        data.primary === undefined || data.img === undefined ||
        data.style === undefined || data.secondary === undefined) {
        throw new Error("data doesn't satisfy Exercise type");
    }
    else {
    }
}
// Write a single exercise
function postExercise(req, res) {
    const data = req.body;
    exerciseTypeCheck(data);
    // TODO: make sure data follows my desired type
    // TODO: check if exercise already exists
    // Write `data` into the exerciseModel
    const document = Exercise_1.exerciseModel.build(data);
    document.save(); // TODO: error handling??
    // res.send('Data Received: ' + JSON.stringify(data));
    res.json(data);
    // res.send('POST request to post page');
}
exports.postExercise = postExercise;
function deleteExercise(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // const id = req.params.id;
        // TODO: make sure ID in db
        // TODO: delete row/document in table/collection
        const deleteCount = yield Exercise_1.exerciseModel.deleteOne(req.body);
        // TODO: respond with ????
        // res.json({
        //     message: `DELETE ${req.params.id} API for MERN Boilerplate`,
        // });
    });
}
exports.deleteExercise = deleteExercise;
