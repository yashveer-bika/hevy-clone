import {Request, Response} from "express";
import {Exercise} from "../types/Data";
import {ExerciseModel} from "../models/Exercise";

// READ
// req.body corresponds to the mongoose Model.find() command
/*

// find all documents
await MyModel.find({}); ---> {}

// find all documents named john
await MyModel.find({ name: "john").exec(); --> { name: "john" }

// find all documents named john and at least 18
await MyModel.find({ name: "john", age: { $gte: 18 } }).exec();
  --> { name: "john", age: { $gte: 18 } }

*/

/**
 * getExercises
 * @param {Request} req - request
 * @param {Response} res - response
 * @return {boolean} true if I can get exercises from the DB table, else false
 */
export async function getExercises(req: Request, res: Response) {
  // TODO: get exercises from database

  // TODO: set up some error checking on GET request (req.body)
  //    empty table case works

  const data = req.body;
  // {} corresponds to full table
  // otherwise send an exercise name

  let exerciseTable;
  // const exerciseRow = exerciseModel.find({});
  try {
    exerciseTable = await ExerciseModel.find(data).exec();
    res.send(exerciseTable);
    return true;
  } catch (err : any) {
    // TODO: set up error handling
    return false;
  }
}

/**
 * @param {Exercise} data - 1 unit of exercise data
 * @return {boolean} - TODO
 */
function exerciseTypeCheck(data : Exercise) {
  if (data.name === undefined || data.equipment == undefined ||
    data.primary === undefined || data.img === undefined ||
    data.style === undefined || data.secondary === undefined) {
    throw new Error("data doesn't satisfy Exercise type");
  } else {
    return true;
  }
}

/**
 * Write a single exercise
 * @param {Request} req - request
 * @param {Response} res - response
 */
export function postExercise(req : Request, res : Response) {
  const data : Exercise = req.body;
  exerciseTypeCheck(data);
  // TODO: make sure data follows my desired type
  // TODO: check if exercise already exists
  // Write `data` into the exerciseModel
  const document = ExerciseModel.build(data);
  document.save(); // TODO: error handling??
  // res.send("Data Received: " + JSON.stringify(data));
  res.json(data);
  // res.send("POST request to post page");
}

/**
 * delete an exercise
 * @param {Request} req - request
 * @param {Response} res - response
 */
export async function deleteExercise(req : Request, res : Response) {
  // const id = req.params.id;
  // TODO: make sure ID in db
  // TODO: delete row/document in table/collection

  // const deleteCount = await ExerciseModel.deleteOne(req.body);

  // TODO: respond with ????
  // res.json({
  //     message: `DELETE ${req.params.id} API for MERN Boilerplate`,
  // });
}
