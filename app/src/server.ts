import express = require('express');
import * as bodyParser from "body-parser"; 
import { APIs } from './api/APIConstants';


const jsonParser = bodyParser.json({ limit: '100000kb' });

let router = express.Router();
router.use(jsonParser);
router.use(bodyParser.urlencoded({extended: false}));

let routes = new APIs(router);
routes.attachAPIs();
//routes.prepareForTests();

const app: express.Application = express();

app.use(router);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});