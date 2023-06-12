"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.crudRouter = void 0;
const express_1 = __importDefault(require("express"));
exports.crudRouter = express_1.default.Router();
// crudRouter.use('/', (req, res) => {
//     res.send("POGGERS");
//     // res.send('POST request to post page');
//   });
/**
 * @method POST
 * @access public
 * @endpoint /api/v1/post
 **/
exports.crudRouter.post('/post', (req, res) => {
    res.json({
        message: 'POST API for MERN Boilerplate',
    });
    // res.send('POST request to post page');
});
/**
* @method GET
* @access public
* @endpoint /api/v1/get
**/
exports.crudRouter.get('/get', (req, res) => {
    res.json({
        message: 'GET API for MERN Boilerplate',
        APIs: 'Other Endpoints',
        create: '/api/v1/post',
        read: '/api/v1/get',
        update: '/api/v1/put/<ID>',
        delete: '/api/v1/delete/<ID>',
    });
});
/**
* @method PUT
* @access public
* @endpoint /api/v1/put/32323
**/
exports.crudRouter.put('/put/:id', (req, res) => {
    res.json({
        message: `PUT ${req.params.id} API for MERN Boilerplate`,
    });
});
/**
* @method DELETE
* @access public
* @endpoint /api/v1/delete/424
**/
exports.crudRouter.delete('/delete/:id', (req, res) => {
    res.json({
        message: `DELETE ${req.params.id} API for MERN Boilerplate`,
    });
});
