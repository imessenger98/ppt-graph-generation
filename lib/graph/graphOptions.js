//verticalBarGraph
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

//horizontalBarGraph
const HorizontalBarGraphOptions = {
  x: 5.5,
  y: 1.5,
  w: "45%",
  h: "45%",
  barDir: "bar",
  chartColors: ["8B0000"],
  dataLabel: true,
  dataLabelColor: "000000",
  dataLabelFontSize: 5,
  catAxisHidden: false,
  valAxisHidden: true,
  showLegend: false,
  showValue: true,
};

//pieChart Graph
const pieChartOptions = {
  x: 5.0,
  y: 1.4,
  w: "50%",
  h: "50%",
  chartArea: { fill: { color: "F1F1F1" } },
  holeSize: 80,
  showLabel: false,
  showValue: false,
  showPercent: true,
  showLegend: true,
  legendPos: "b",
  chartColors: ["FF0000", "F2AF00", "7AB800", "4472C4", "672C7E", "A9A9A9"],
  dataBorder: { pt: "2", color: "F1F1F1" },
  dataLabelColor: "FFFFFF",
  dataLabelFontSize: 10,
  showTitle: true,
  title: "Renewal: Current FQ+ next 3 FQs Default Service List",
  titleColor: "000000",
  titleFontFace: "Helvetica Neue",
  titleFontSize: 10,
};

module.exports = {
  verticalBarGraphOptions,
  HorizontalBarGraphOptions,
  pieChartOptions,
};
