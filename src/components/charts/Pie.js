import React from "react";
import Chart from "react-apexcharts";
export default function Pie() {
  const [series, setSeries] = React.useState([44, 55]);
  const [options, setOptions] = React.useState({
    labels: ["Unsuccessful Queries", "Successful Queries"],
  });
  return (
    <div>
      <div className="donut">
        <Chart
          options={options}
          series={series}
          type="donut"
          width="400"
          labels={["A", "B"]}
        />
      </div>
    </div>
  );
}
