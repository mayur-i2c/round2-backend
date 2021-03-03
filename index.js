require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const apiRouter = require("./Routes");
const app = express();

// Enable All CORS Requests
app.use(cors());

// parse application/x-www-form-urlencoded data
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json data
app.use(bodyParser.json());

app.use("/", apiRouter);

const port = 5000 || process.env.PORT;
app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});
