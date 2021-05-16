export default function (historical) {
  return {
    title: {
      text: "",
    },

    // subtitle: {
    //   text: "Source: thesolarfoundation.com",
    // },

    yAxis: {
      title: {
        text: "Price",
      },
    },

    xAxis: {
      accessibility: {
        rangeDescription: "Range: 2010 to 2017",
      },
    },

    xAxis: { type: "datetime" },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointStart: 2010,
      },
    },

    series: historical,
    // {
    //   name: "Manufacturing",
    //   data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
    // },
    // {
    //   name: "Sales & Distribution",
    //   data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
    // },
    // {
    //   name: "Project Development",
    //   data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
    // },
    // {
    //   name: "Other",
    //   data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
    // },

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  };
}
