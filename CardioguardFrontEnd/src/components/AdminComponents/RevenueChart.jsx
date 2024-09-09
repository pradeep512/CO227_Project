import { useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto"; // Ensure you are importing chart.js/auto properly

const RevenueChart = () => {
  const chartRef = useRef(null); // Create a ref to hold the chart instance

  const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Income",
        borderColor: "#4caf50",
        fill: false,
        data: [1500, 2000, 1800, 2400, 2200, 2100, 2500],
      },
      {
        label: "Expense",
        borderColor: "#f44336",
        fill: false,
        data: [1200, 1700, 1600, 2000, 1900, 1800, 2300],
      },
    ],
  };

  useEffect(() => {
    // Cleanup the chart instance when the component unmounts
    return () => {
      if (chartRef.current && chartRef.current.chartInstance) {
        chartRef.current.chartInstance.destroy();
      }
    };
  }, []);

  return <Line ref={chartRef} data={data} />;
};

export default RevenueChart;
