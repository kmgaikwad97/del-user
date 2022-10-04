// express
const express = require("express");
const app = express();

// dotenv
// const port = 3001;
const dotenv = require('dotenv')
dotenv.config({path:'./.env'})
const port = process.env.PORT;

require("./db/connect");

const userData = require("./models/user");
const router = require("./router/routesOld");

const cors = require("cors");
const morgan = require("morgan");

// app.get('/',(req,res)=>{
//     res.send('Home Page')
// });

app.use(express.json());
//  It parses incoming JSON requests and puts the parsed data in req.body.

app.use(cors());
app.use(morgan("tiny"));

// router
app.use(router);

app.listen(port, () => {
  console.log(`Connection is live at port number ${port}`);
});
