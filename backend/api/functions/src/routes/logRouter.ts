import {Router} from "express";
import * as BodyParser from "body-parser";
import {basePage, deleteLog, getLog, postLog} from "../controllers/log";

// TODO: set up log API

export const LogRouter = Router();

LogRouter.use(BodyParser.json());
LogRouter.use(BodyParser.urlencoded({extended: false}));

LogRouter.get("/", basePage);

/**
* @method GET
* @access public
* @endpoint /log/get
**/
LogRouter.get("/get", getLog);


/**
 * @method POST
 * @access public
 * @endpoint /log/post
 **/
LogRouter.post("/post", postLog);

// /**
// * @method PUT
// * @access public
// * @endpoint /log/put/32323
// **/
//  exerciseRouter.put("/put/:id", (req, res) => {
//   res.json({
//       message: `PUT ${req.params.id} API for MERN Boilerplate`,
//   });
// });

// NOTE: the id will correspond to the exercise"s id???
/**
* @method DELETE
* @access public
* @endpoint /log/delete
**/
LogRouter.delete("/delete", deleteLog);
