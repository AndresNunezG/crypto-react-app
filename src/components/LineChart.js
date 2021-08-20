import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const useChartAPI = (API) => {
    const [chartData, setChartData] = useState([]);
    useEffect(() => {
        fetch(API, {method: 'GET'})
         .then(res => res.json())
         .then(response => setChartData(response))
         .catch(error => console.log(error));
    }, [API]);
    return chartData;
}

export default function LineChart (props) {
    const API = "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7&interval=daily";
    const dataAPI = useChartAPI(API);
    const [dataChart, setDataChart] = useState([]);
    useEffect(() => {
        if (dataAPI.prices) {
            const result = dataAPI.prices.map(coinPrice => coinPrice[1])
            setDataChart(result);
        }
    }, [dataAPI])
    const data = {
        labels: ['1', '2,', '3', '4', '5', '6', '7'],
        datasets: [
          {
            data: dataChart,
            fill: false,
            backgroundColor: '#34D399',
            borderColor: '#34D399',
          },
        ],
    }; 
    const options = {
        scales: {
            x: {
                display: false
            },
            y: {
                display: false
            }
        },
        plugins: {
            legend: {
                display: false,
            }
        }
    };
    return (
        <div className="px-8 w-full">
        <Line data={data} options={options} />
        </div>
      )
};