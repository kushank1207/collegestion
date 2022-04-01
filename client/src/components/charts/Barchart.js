import { Chart } from "react-google-charts";

export const data = [
  ["Country", "2021 Products", "2022 Products"],
  ["Canada", 8175000, 8008000],
  ["Germany", 3792000, 3694000],
  ["France", 2695000, 2896000],
  ["Italy", 2099000, 1953000],
  ["USA", 1526000, 1517000],
];

export const options = {
  title: "Products From Different Countries",
  chartArea: { width: "50%" },
  hAxis: {
    title: "Total Products",
    minValue: 0,
  },
  vAxis: {
    title: "Country",
  },
};

export function BarChart() {
  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
