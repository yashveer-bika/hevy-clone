"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logRouter = void 0;
const express_1 = require("express");
const body_parser_1 = __importDefault(require("body-parser"));
const log_1 = require("../controllers/log");
// TODO: set up log API
exports.logRouter = (0, express_1.Router)();
exports.logRouter.use(body_parser_1.default.json());
exports.logRouter.use(body_parser_1.default.urlencoded({ extended: false }));
exports.logRouter.get('/', log_1.basePage);
/**
* @method GET
* @access public
* @endpoint /log/get
**/
exports.logRouter.get('/get', log_1.getLog);
/**
 * @method POST
 * @access public
 * @endpoint /log/post
 **/
exports.logRouter.post('/post', log_1.postLog);
// /**
// * @method PUT
// * @access public
// * @endpoint /log/put/32323
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
* @endpoint /log/delete
**/
exports.logRouter.delete('/delete', log_1.deleteLog);
