/*
 * Created on: Mon Jul 24 2023
 * Author: Muhammed Yazeen AN
 */

const express = require("express");
const controller = require("./controllers/generate-pptxjenjs");

const app = express();

const PORT = 3000;

app.get("/download", (req, res) => {
  controller.generatePPT(req, res);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/templates/index.html');
});
// Listen on port
app.listen(PORT, () => {
  console.log(`Server started on port:http://localhost:${PORT}`);
});
