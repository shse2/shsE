const express = require("express");
const app = express();
const port = 80;
const db = require("oracledb");
const bodyParser = require("body-parser");

app.use(express.static("./client/static"));  // main.js file 위치 기준
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", "./client");  // main.js file 위치 기준
app.set("view engine", "ejs");


const SELECT_QUERY = "SELECT * FROM ACCOUNTS";

module.exports = {
  /* default server setting */
  express,
  app,
  port,
  /* default server setting */

  /* db config */
  user: "C##SHSE",
  password: "#glTn344774",  //process.env.NODE_ORACLEDB_PASSWORD,
  host: "localhost",
  database: "xe",
  db,
  SELECT_QUERY
  /* db config */
}
