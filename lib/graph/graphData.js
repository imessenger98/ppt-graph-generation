const verticalBarGraphData = [
  {
    name: "Years",
    labels: ["2021", "2022", "2023"],
    values: [1.5, 2.0, 1.4],
  },
];

const HorizontalBarGraphData = [
  {
    name: "Years",
    labels: [
      "No of EndDates",
      "No of Service levels",
      "No of  Service partners",
    ],
    values: [20, 8, 2],
  },
];

const DoughnutChartData = [
  {
    name: "Renewal: Current FQ+ next 3 FQs Default Service List",
    labels: ["Q4 2023", "Q1 2024", "Q2 2024", "Q2 2024"],
    values: [25, 15, 10, 5],
  },
];

module.exports = {
  HorizontalBarGraphData,
  verticalBarGraphData,
  DoughnutChartData,
};
