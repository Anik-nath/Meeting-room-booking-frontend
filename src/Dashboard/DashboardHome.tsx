import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const chartData = {
  labels: ["2016", "2017", "2018", "2019", "2020"], // X-axis labels
  datasets: [
    {
      label: "Users Gained", // Dataset label
      data: [500, 1000, 1500, 2000, 2500], // Y-axis data points
      backgroundColor: [
        "rgba(75, 192, 192, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(153, 102, 255, 0.6)",
      ], // Bar colors
      borderColor: [
        "rgba(75, 192, 192, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
      ],
      borderWidth: 1, // Bar border width
    },
  ],
};

export default function DashboardHome() {
  return (
    <div className="bg-gray-100 p-4 rounded-xl">
      <div className="chart-container" style={{ height: "400px" }}>
        <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
        <Bar
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Users Gained between 2016-2020",
              },
              legend: {
                display: false,
              },
            },
            responsive: true,
            maintainAspectRatio: false, // Ensure the chart resizes correctly
          }}
        />
      </div>
    </div>
  );
}
