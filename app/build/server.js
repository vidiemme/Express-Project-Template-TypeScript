"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = __importStar(require("body-parser"));
var APIConstants_1 = require("./api/APIConstants");
var jsonParser = bodyParser.json({ limit: '100000kb' });
var router = express.Router();
router.use(jsonParser);
router.use(bodyParser.urlencoded({ extended: false }));
var routes = new APIConstants_1.APIs(router);
routes.attachAPIs();
var app = express();
app.use(router);
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
