import {
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js/auto";
import BAR_DATA from "../../resources/bardata";
import { Bar } from "react-chartjs-2";

Chart.register(CategoryScale, LinearScale, BarElement, Legend, Tooltip);

const data = {
  labels: BAR_DATA.map((row) => row.y + " " + row.label),
  datasets: [
    {
      data: BAR_DATA,
      backgroundColor: ["#fde047"],
      borderRadius: 50,
      borderSkipped: false,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (context) => {
          console.log(context.raw);
          return `${context.raw.date}`;
        },
        labelColor: () => {
          return {
            backgroundColor: "#f8fafc",
          };
        },
        labelTextColor: (context) => {
          return `#09090b`;
        },
      },
      backgroundColor: "#f8fafc",
      titleColor: "#09090b",
    },
  },
  layout: {
    padding: 12,
  },
  maintainAspectRation: false,

  scales: {
    x: {
      grid: {
        drawOnChartArea: false,
      },
      ticks: {
        display: false,
      },
      display: false,
    },
    y: {
      grid: {
        drawOnChartArea: false,
      },
      ticks: {
        display: false,
      },
      display: false,
    },
  },
};

const SignUpChart = () => {
  return (
    <div className="chart-container">
      <Bar data={data} height={65} options={options}></Bar>
    </div>
  );
};

export default SignUpChart;
