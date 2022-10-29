import React from "react";
import Chart from "react-apexcharts";
export default function Pie() {
  const [series, setSeries] = React.useState([21, 230, 57, 10]);
  const [options, setOptions] = React.useState({
    labels: ["Create", "Read", "Update", "Delete"],
  });
  return (
    <div>
      <div className="donut">
        <Chart options={options} series={series} type="donut" width="300" />
      </div>
    </div>
  );
}
