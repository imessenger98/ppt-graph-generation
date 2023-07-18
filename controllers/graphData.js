const verticalBarGraphOptions = {
  x: 5.5,
  y: 1.5,
  w: "45%",
  h: "45%",
  barDir: "col",
  showTitle: true,
  chartColors: ["90EE90"],
  title: "5 Year LDoS value (product $ LP)",
  //   titleFontFace: "Helvetica Neue Thin",
  titleFontSize: 10,
  titleColor: "000000",
  titlePos: { x: 0, y: 0 },
  showCatAxisTitle: true,
  //   catAxisLabelColor: "000000",
  //   catAxisTitleColor: "000000",
  catAxisTitle: "Years",
  catAxisTitleFontSize: 10,
  //
  showValAxisTitle: true,
  //   valAxisLabelColor: "000000",
  //   valAxisTitleColor: "000000",
  valAxisTitle: "Millions",
  valAxisTitleFontSize: 10,
};

const barGraphData = [
  {
    name: "Years",
    labels: ["2021", "2022", "2023"],
    values: [1.5, 2.0, 1.4],
  },
];

module.exports = {
  verticalBarGraphOptions,
  barGraphData,
};
