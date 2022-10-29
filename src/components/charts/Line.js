import React from "react";
import Chart from "react-apexcharts";

export default function Line() {
  const [series, setSeries] = React.useState([
    { name: "series-1", data: [30, 40, 45, 50, 49, 60, 70, 91] },
  ]);
  const [options, setOptions] = React.useState({
    chart: { id: "basic-bar" },
    xaxis: { categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998] },
  });
  return (
    <div>
      <Chart options={options} series={series} type="line" width="600" height="220" />
    </div>
  );
}
