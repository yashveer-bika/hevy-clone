"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exerciseRouter = void 0;
const express_1 = require("express");
const exercises_1 = require("../controllers/exercises");
const body_parser_1 = __importDefault(require("body-parser"));
exports.exerciseRouter = (0, express_1.Router)();
exports.exerciseRouter.use(body_parser_1.default.json());
exports.exerciseRouter.use(body_parser_1.default.urlencoded({ extended: false }));
/**
* @method GET
* @access public
* @endpoint /exercises/get
**/
exports.exerciseRouter.get('/get', exercises_1.getExercises);
/**
 * @method POST
 * @access public
 * @endpoint /exercises/post
 **/
exports.exerciseRouter.post('/post', exercises_1.postExercise);
// /**
// * @method PUT
// * @access public
// * @endpoint /exercises/put/32323
// **/
//  exerciseRouter.put('/put/:id', (req, res) => {
//   res.json({
//       message: `PUT ${req.params.id} API for MERN Boilerplate`,
//   });
// });
// NOTE: the id will correspond to the exercise's id???
/**
* @method DELETE
* @access public
* @endpoint /exercises/delete
**/
exports.exerciseRouter.delete('/delete', exercises_1.deleteExercise);
