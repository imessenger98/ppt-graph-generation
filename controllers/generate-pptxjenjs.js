const pptxgen = require("pptxgenjs");
const { verticalBarGraphOptions, barGraphData } = require("./graphData");

function verticalBarGraph(pptx) {
  const slide = pptx.addSlide();
  slide.addChart(pptx.charts.BAR, barGraphData, verticalBarGraphOptions);
}

function HorizontalBarGraph(pptx) {
  const slide = pptx.addSlide();
  const options = { ...verticalBarGraphOptions };
  options.barDir = "bar";
  slide.addChart(pptx.charts.BAR, barGraphData, options);
}

//Main Function
async function generatePPT(req, res) {
  try {
    const pptx = new pptxgen();

    verticalBarGraph(pptx);
    HorizontalBarGraph(pptx);

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
    console.log(error);
    res.status(500).send("Error generating PowerPoint presentation");
  }
}

module.exports = { generatePPT };
