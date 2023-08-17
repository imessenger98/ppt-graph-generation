/*
 * Created on: Mon Jul 24 2023
 * Author: Muhammed Yazeen AN
 */

const express = require("express");
const controllers = require("./controllers");

const app = express();

const PORT = 3000;

app.use("/pptxgenjs", controllers.pptxjenjsController);
app.use("/chart-js", controllers.chartJSController);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/templates/index.html");
});

app.listen(PORT, () => {
  console.log(`Server started on port: http://localhost:${PORT}`);
});
