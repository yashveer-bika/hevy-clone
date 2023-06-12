import {Request, Response} from "express";
import {LogModel} from "../models/Log";
import {LogRow} from "../types/Data";

/**
 * @param {Request} req - TODO
 * @param {Response} res - TODO
 */
export async function basePage(req: Request, res: Response) {
  res.send("Log API");
}


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
 * @param {Request} req - request
 * @param {Response} res - response
 */
export async function getLog(req: Request, res: Response) {
  //   // TODO: error handling

  const data = req.body;
  // {} corresponds to full table
  // otherwise send an exercise name

  let logTable;
  // const exerciseRow = exerciseModel.find({});
  try {
    logTable = await LogModel.find(data).exec();
    res.send(logTable);
  } catch (err : any) {
    // TODO: set up error handling
    res.send("error");
  }

  // res.send("TODO: send log data");
}

/**
 * @param {LogRow} data - a log row datum
 */
function logTypeCheck(data : LogRow) {
  if (data.title === undefined || data.startTime == undefined ||
    data.endTime === undefined || data.description === undefined ||
    data.exercise_title === undefined || data.superset_id === undefined ||
    data.exercise_notes === undefined || data.set_index === undefined ||
    data.set_type === undefined || data.weight_lbs === undefined ||
    data.reps === undefined || data.distance_miles === undefined ||
    data.duration_seconds === undefined) {
    throw new Error("data doesn't satisfy Exercise type");
  }
}

// Write a single exercise
/**
 * @param {Request} req -  TODO
 * @param {Response} res - TODO
 */
export function postLog(req : Request, res : Response) {
  const data : LogRow = req.body;
  logTypeCheck(data);

  // TODO: make sure data follows my desired type
  // TODO: check if exercise already exists

  // Write `data` into the exerciseModel
  const document = LogModel.build(data);
  document.save(); // TODO: error handling??
  // res.send("Data Received: " + JSON.stringify(data));
  res.json(data);
  // res.send("POST request to post page");
}

/**
 * @param {Request} req -  TODO
 * @param {Response} res - TODO
 */
export async function deleteLog(req : Request, res : Response) {
  // const id = req.params.id;
  // TODO: make sure ID in db
  // TODO: delete row/document in table/collection

  // const deleteCount = await LogModel.deleteOne(req.body);

  // TODO: respond with ????
  // res.json({
  //     message: `DELETE ${req.params.id} API for MERN Boilerplate`,
  // });
}
