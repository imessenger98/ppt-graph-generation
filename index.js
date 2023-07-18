const express = require("express");
const controller = require("./controllers/generate-pptxjenjs");

const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  controller.generatePPT(req, res);
});

// Listen on port
app.listen(PORT, () => {
  console.log(`Server started on port  http://localhost:${PORT}`);
});
