import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale);

// Dummy data for the graph
const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'Health Status',
            data: [75, 70, 80, 85, 90, 95, 100, 95, 90, 85, 80, 75],
            borderColor: 'red',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: true,
            tension: 0.1,
        },
        {
            label: 'Time Spent (hours)',
            data: [5, 6, 7, 5, 8, 9, 6, 7, 8, 6, 7, 5],
            borderColor: 'blue',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            fill: true,
            tension: 0.1,
        },
    ],
};

// Options for the graph
const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        tooltip: {
            callbacks: {
                label: function (tooltipItem) {
                    return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
                },
            },
        },
    },
    scales: {
        x: {
            title: {
                display: true,
                text: 'Month',
            },
        },
        y: {
            title: {
                display: true,
                text: 'Value',
            },
        },
    },
};

const PatientProgressGraph = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl mx-auto">
            <h2 className="text-lg font-bold mb-4 text-center">Patient Progress</h2>
            <div className="h-96">
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default PatientProgressGraph;
