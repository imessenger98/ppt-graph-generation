const {
  verticalBarGraphData,
  HorizontalBarGraphData,
  DoughnutChartData,
} = require("./graphData");

const {
  verticalBarGraphOptions,
  HorizontalBarGraphOptions,
  pieChartOptions,
} = require("./graphOptions");

function verticalBarGraph(pptx) {
  const slide = pptx.addSlide();
  slide.addChart(
    pptx.charts.BAR,
    verticalBarGraphData,
    verticalBarGraphOptions
  );
}

function HorizontalBarGraph(pptx) {
  try {
    const slide = pptx.addSlide();
    slide.addChart(
      pptx.charts.BAR,
      HorizontalBarGraphData,
      HorizontalBarGraphOptions
    );
  } catch (error) {
    console.log(error);
  }
}

function DougNutChart(pptx) {
  try {
    const slide = pptx.addSlide();
    slide.addChart(pptx.charts.DOUGHNUT, DoughnutChartData, pieChartOptions);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  DougNutChart,
  HorizontalBarGraph,
  verticalBarGraph,
};
