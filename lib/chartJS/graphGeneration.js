const {
  getVerticalBarGraphConfiguration,
  getHorizontalBarGraphConfiguration,
  getDoughnutBarGraphConfiguration,
} = require("./graphConfigurations");
const { createBase64ChartImage } = require("./createBase64Chart");

//Main
async function generateGraph(data = {}) {
  try {
    const [verticalGraphBarImage, horizontalGraphBarImage, doughnutGraphBar] =
      await Promise.all([
        generateVerticalGraph(data),
        generateHorizontalBarGraph(data),
        generateDoughnutBarGraph(data),
      ]);
    console.log("graph Generated SuccessFully")
    return { doughnutGraphBar, verticalGraphBarImage, horizontalGraphBarImage };
  } catch (error) {
    console.error("Error generating graph images:", error);
    throw error;
  }
}

//vertical Graph
async function generateVerticalGraph(data) {
  try {
    const verticalBarGraphBody = {
      dataValues: [5, 10, 15, 20, 4, 1],
      titleText: "5 Year LDoS Value (product $LP) $8,089,020",
      labels: ["2021", "2022", "2023", "2021", "2022", "2023"],
    };
    const configurations = await getVerticalBarGraphConfiguration(
      verticalBarGraphBody
    );
    const result = await createBase64ChartImage(configurations);
    return result;
  } catch (error) {
    console.log(error);
  }
}

//horizontalBarGraph
async function generateHorizontalBarGraph(data) {
  try {
    const HorizontalBarGraphData = {
      labels: [
        "No of EndDates",
        "No of Service levels",
        "No of  Service partners",
      ],
      dataValues: [20, 8, 2],
    };
    const configurations = await getHorizontalBarGraphConfiguration(
      HorizontalBarGraphData
    );
    const result = await createBase64ChartImage(configurations);
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function generateDoughnutBarGraph(data) {
  try {
    const doughnutBarGraphData = {
      labels: ["Q4 2023", "Q1 2024", "Q2 2024", "Q2 2024"],
      dataValues: [25, 15, 10, 5],
      titleText: "Renewal: Current FQ+ next 3 FQs Default Service List",
    };
    const configurations = await getDoughnutBarGraphConfiguration(
      doughnutBarGraphData
    );
    const result = await createBase64ChartImage(configurations);
    return result;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  generateGraph,
};
