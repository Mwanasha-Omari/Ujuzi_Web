'use client';
import React from "react";
import { Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);

const Progress = () => {
  // Data for the Doughnut Charts
  const doughnutData1 = {
    labels: ["Incomplete", "Complete"],
    datasets: [
      {
        label: "Progress",
        data: [30, 70], // Example percentages
        backgroundColor: ["#FFC107", "#001F3F"], // primary-amber and primary-blue
        borderWidth: 1,
      },
    ],
  };

  const doughnutData2 = {
    labels: ["Incomplete", "Complete"],
    datasets: [
      {
        label: "Progress",
        data: [50, 50], // Example percentages
        backgroundColor: ["#FFC107", "#001F3F"],
        borderWidth: 1,
      },
    ],
  };

  const doughnutData3 = {
    labels: ["Incomplete", "Complete"],
    datasets: [
      {
        label: "Progress",
        data: [40, 60], // Example percentages
        backgroundColor: ["#FFC107", "#001F3F"],
        borderWidth: 1,
      },
    ],
  };

  // Data for the Line Chart
  const lineData = {
    labels: ["Module 1", "Module 2", "Module 3"], // X-axis labels
    datasets: [
      {
        label: "Score per module",
        data: [70, 30, 90], // Example scores
        fill: false,
        borderColor: "#001F3F", // primary-blue
        tension: 0.3, // Curve smoothness
      },
    ],
  };

  // Options for the Line Chart
  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hides the legend
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Module",
        },
      },
      y: {
        title: {
          display: true,
          text: "Score per module",
        },
      },
    },
  };

  // JSX to Render
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center" }}>Progress per module in each subcounty</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <div>
          <Doughnut data={doughnutData1} />
          <p style={{ textAlign: "center", fontWeight: "bold" }}>Module 1</p>
        </div>
        <div>
          <Doughnut data={doughnutData2} />
          <p style={{ textAlign: "center", fontWeight: "bold" }}>Module 2</p>
        </div>
        <div>
          <Doughnut data={doughnutData3} />
          <p style={{ textAlign: "center", fontWeight: "bold" }}>Module 3</p>
        </div>
      </div>
      <h2 style={{ textAlign: "center", marginTop: "30px" }}>
        (Subcounty) Teachers Performance
      </h2>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <Line data={lineData} options={lineOptions} />
      </div>
    </div>
  );
};

export default Progress;
