import React from "react";
import ReactApexChart from "react-apexcharts";

export default function Area() {
  const [options, setOptions] = React.useState({
    chart: {
      type: "area",
      height: 350,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },

    xaxis: {
      labels: {
        datetimeFormatter: {
          hour: "HH:mm",
        },
      },
      type: "datetime",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      tickAmount: 4,
      floating: false,

      labels: {
        style: {
          colors: "#8e8da4",
        },
        offsetY: -7,
        offsetX: 0,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    fill: {
      opacity: 0.5,
    },
    tooltip: {
      x: {
        format: "HH:mm",
      },
      fixed: {
        enabled: false,
        position: "topRight",
      },
    },
    grid: {
      yaxis: {
        lines: {
          offsetX: -30,
        },
      },
      padding: {
        left: 20,
      },
    },
  });

  const [series, setSeries] = React.useState([
    {
      name: "Create",
      data: [
        {
          x: 1666981800,
          y: 322,
        },
        {
          x: 1666985400,
          y: 324,
        },
        {
          x: 1666989000,
          y: 329,
        },
        {
          x: 1666992600,
          y: 342,
        },
        {
          x: 1666996200,
          y: 348,
        },
        {
          x: 1666999800,
          y: 334,
        },
      ],
    },
    {
      name: "Read",
      data: [
        {
          x: 1666981800,
          y: 162,
        },
        {
          x: 1666985400,
          y: 300,
        },
        {
          x: 1666989000,
          y: 50,
        },
        {
          x: 1666992600,
          y: 77,
        },
        {
          x: 1666996200,
          y: 205,
        },
        {
          x: 1666999800,
          y: 150,
        },
      ],
    },
    {
      name: "Update",
      data: [
        {
          x: 1666981800,
          y: 102,
        },
        {
          x: 1666985400,
          y: 90,
        },
        {
          x: 1666989000,
          y: 50,
        },
        {
          x: 1666992600,
          y: 57,
        },
        {
          x: 1666996200,
          y: 45,
        },
        {
          x: 1666999800,
          y: 100,
        },
      ],
    },
    {
      name: "Delete",
      data: [
        {
          x: 1666981800,
          y: 10,
        },
        {
          x: 1666985400,
          y: 12,
        },
        {
          x: 1666989000,
          y: 11,
        },
        {
          x: 1666992600,
          y: 15,
        },
        {
          x: 1666996200,
          y: 22,
        },
        {
          x: 1666999800,
          y: 26,
        },
      ],
    },
  ]);
  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={200}
      />
    </div>
  );
}
