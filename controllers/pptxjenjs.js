const pptxgen = require("pptxgenjs");
const express = require("express");
const router = express.Router();

const {
  verticalBarGraph,
  HorizontalBarGraph,
  DougNutChart,
} = require("../lib/graph/graph-generate");

/**
 * Generates a PowerPoint presentation with three types of graphs based on the graph data file.
 * @function generatePPT
 */
router.get("/generate", (req, res) => {
  try {
    const pptx = new pptxgen();
    verticalBarGraph(pptx);
    HorizontalBarGraph(pptx);
    DougNutChart(pptx);
    pptx
      .writeFile({
        compression: true,
        fileName: "my-presentation.pptx",
      })
      .then(() => {
        console.log("Presentation created successfully.");
        res.status(200).download("my-presentation.pptx");
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send("Error generating PowerPoint presentation.");
      });
  } catch (error) {
    console.error("Error generating PowerPoint presentation", error);
    res.status(500).send("Error generating PowerPoint presentation");
  }
});

module.exports = router;
