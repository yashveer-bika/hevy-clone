import {Router} from "express";
import {getExercises, postExercise, deleteExercise} from
  "../controllers/exercises";
import * as BodyParser from "body-parser";

export const exerciseRouter = new (Router() as any);

exerciseRouter.use(BodyParser.json());
exerciseRouter.use(BodyParser.urlencoded({extended: false}));

/**
* @method GET
* @access public
* @endpoint /exercises/get
**/
exerciseRouter.get("/get", getExercises);


/**
 * @method POST
 * @access public
 * @endpoint /exercises/post
 **/
exerciseRouter.post("/post", postExercise);

// /**
// * @method PUT
// * @access public
// * @endpoint /exercises/put/32323
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
* @endpoint /exercises/delete
**/
exerciseRouter.delete("/delete", deleteExercise);
