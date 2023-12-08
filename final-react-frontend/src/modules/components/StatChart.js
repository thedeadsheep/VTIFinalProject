import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const labels = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6',
    'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'];
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export default function StatChart() {
    const data = {
        labels,
        datasets: [
            {
                label: 'Số điện',
                data: labels.map(() => getRandomInt(200)),
                backgroundColor: '#EFDF00',
                stack: 'Stack 0',
            },
            {
                label: 'Số nước',
                data: labels.map(() => getRandomInt(200)),
                backgroundColor: '#00B4F0',
                stack: 'Stack 0',
            },
        ],
    };
    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Thống kê điện nước',
            },
        },
        responsive: true,
        interaction: {
            intersect: false,
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        },
    };
    useEffect(() => {

    }, [])
    return (
        <div>
            <Bar options={options} data={data} />
        </div>
    )
}