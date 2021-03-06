import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

import useChartAPI from '../hooks/useChartAPI';

export default function LineChart (props) {
    const API = (coin) => `https://api.coingecko.com/api/v3/coins/${coin.replace(/\s/g, '').toLowerCase()}/market_chart?vs_currency=usd&days=7&interval=daily`;
    const [dataAPI, fetchChartError] = useChartAPI(API(props.coinData.name));
    const [dataChart, setDataChart] = useState([]);
    const color = props.coinData.price_change_24h < 0 ? '#F87171' : '#34D399';
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
            backgroundColor: color,
            borderColor: color,
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
    if (fetchChartError || dataChart.length === 0) {
        return (
            <div className="py-2 px-8 w-52 flex justify-center">
                -
            </div>
        )
    }
    return (
        <div className="py-2 px-8 w-52">
            <Line data={data} options={options} />
        </div>
      )
};