const { ChartJSNodeCanvas } = require("chartjs-node-canvas");

async function createBase64ChartImage(configurations) {
  const width = 500; //px
  const height = 500; //px
  const backgroundColor = "white";
  try {
    const chartJSNodeCanvas = new ChartJSNodeCanvas({
      width,
      height,
      backgroundColor,
      plugins: {
        modern: ["chartjs-plugin-datalabels"],
      },
    });
    const image = await chartJSNodeCanvas.renderToBuffer(configurations);
    const chartImageBase64 = image.toString("base64");
    return chartImageBase64;
  } catch (error) {
    console.error("Error generating chart:", error);
    res.send("error");
  }
}

module.exports = {
  createBase64ChartImage,
};
