/// verticalBarGraph
async function getVerticalBarGraphConfiguration({
  dataValues = [],
  titleText = "",
  labels = "",
}) {
  try {
    return {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            data: dataValues,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: titleText,
            position: "bottom",
          },
        },
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Millions", // X-axis label
            },
          },
          x: {
            title: {
              display: true,
              text: "Year", // X-axis label
            },
          },
        },
      },
      plugins: {
        datalabels: {
          anchor: "end",
          align: "top",
          formatter: Math.round,
          font: {
            weight: "bold",
          },
        },
      },
    };
  } catch (error) {
    console.log("error in Graph Configuration");
  }
}

//horizontalBarGraph
async function getHorizontalBarGraphConfiguration({
  dataValues = [],
  titleText = "",
  labels = "",
}) {
  try {
    return {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            data: dataValues,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        indexAxis: "y",
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
            text: titleText,
            position: "bottom",
          },
        },
        responsive: true,
        scales: {
          y: {
            display: true,
            title: {
              display: false,
            },
          },
          x: {
            display: true,
            title: {
              display: false,
            },
          },
        },
      },
      plugins: {
        datalabels: {
          anchor: "end",
          align: "end",
          formatter: Math.round,
          font: {
            weight: "bold",
          },
        },
      },
    };
  } catch (error) {
    console.log("error in Graph Configuration");
  }
}

//getDoughnutBarConfiguration
async function getDoughnutBarGraphConfiguration({
  dataValues = [],
  titleText = "",
  labels = "",
}) {
  try {
    return {
      type: "doughnut",
      data: {
        labels,
        datasets: [
          {
            label: "quarter",
            data: dataValues,
            backgroundColor: [
              "#3e95cd",
              "#8e5ea2",
              "#3cba9f",
              "#e8c3b9",
              "#c45850",
            ],
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: true,
          },
          title: {
            display: true,
            text: titleText,
            position: "bottom",
          },
        },
      },
    };
  } catch (error) {
    console.log("error in Graph Configuration");
  }
}
module.exports = {
  getVerticalBarGraphConfiguration,
  getHorizontalBarGraphConfiguration,
  getDoughnutBarGraphConfiguration,
};
