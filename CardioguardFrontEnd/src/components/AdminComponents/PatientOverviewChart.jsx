import { useRef, useEffect } from "react";
import { Bar } from "react-chartjs-2";

const PatientOverviewChart = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ["4 Jul", "5 Jul", "6 Jul", "7 Jul", "8 Jul"],
    datasets: [
      {
        label: "Child",
        backgroundColor: "#42A5F5",
        data: [35, 40, 50, 45, 60],
      },
      {
        label: "Adult",
        backgroundColor: "#66BB6A",
        data: [50, 55, 65, 70, 80],
      },
      {
        label: "Elderly",
        backgroundColor: "#FFA726",
        data: [20, 30, 25, 35, 40],
      },
    ],
  };

  useEffect(() => {
    // Cleanup function to destroy chart instance when component unmounts
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return <Bar ref={chartRef} data={data} />;
};

export default PatientOverviewChart;
