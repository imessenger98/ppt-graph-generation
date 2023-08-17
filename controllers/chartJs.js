const express = require("express");
const router = express.Router();

const { generateGraph } = require("../lib/chartJS/graphGeneration");
const { htmlContent } = require("../templates/charts");

/**
 * Generates  three types of charts based using chartJs.
 */
router.get("/generate", async (req, res) => {
  try {
    const data = await generateGraph();
    const { doughnutGraphBar, horizontalGraphBarImage, verticalGraphBarImage } =
      data;
    const template = htmlContent({
      verticalGraphBarImage,
      horizontalGraphBarImage,
      doughnutGraphBar,
    });
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(template);
  } catch (error) {
    res.status(500).send("Error generating chart:", error);
    console.error("Error generating chart:", error);
  }
});

module.exports = router;
