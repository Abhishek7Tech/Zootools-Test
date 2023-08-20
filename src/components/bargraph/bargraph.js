import { BarElement, CategoryScale, Chart, Legend, LinearScale, Tooltip } from "chart.js/auto";
import BAR_DATA from "../../resources/bardata";
import { Bar } from "react-chartjs-2";

Chart.register(CategoryScale, LinearScale, BarElement, Legend, Tooltip)

const data = {
    labels: BAR_DATA.map((row) => row.label),
    datasets: [
        {   
           data:BAR_DATA.map((row) => row.signups),
            backgroundColor: ["#fde047"],
            borderRadius: 50,
        }
        
    ]
}

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        }
    
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
        display: false
        
       },
       y: {
        grid: {
            drawOnChartArea: false,
        },
        ticks: {
            display: false
        },
        display: false
       
       }
    }
}

const SignUpChart = () => {

    return (
        <div className="chart-container">
            <Bar data={data} height={100} options={options}>

            </Bar>
        </div>
    )
}

export default SignUpChart;