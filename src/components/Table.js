import React, { useEffect, useState } from 'react';

import "tailwindcss/tailwind.css";

export default function Table () {
    const columnNames = ['#', "Moneda", "Precio", "", "Cambio de precio 24 h (%)"];
    const API = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
    const [cryptoData, setCryptoData] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    useEffect(() => {
        fetch(API, {method: "GET"})
         .then(res => res.json())
         .then(response => {
            setCryptoData(response);
            setFetchError(false)
         })
         .catch(error => {
            setFetchError(true);
         })
    }, []);
    return (
        <div className="">
            <table className="">
                <tbody>    
                    <tr>
                        {columnNames.map((columnName, index) => (
                            <th key={index}>{columnName}</th>
                        ))}
                    </tr>
                    {cryptoData.map((coinData, index) => (
                        <tr key={index}>
                            <td className="font-mono font-thin text-gray-200">{coinData.symbol.toUpperCase()}</td>
                            <td className="flex"><img className="w-6" src={coinData.image} alt={index}></img> {coinData.name}</td>
                            <td>{coinData.current_price}</td>
                            <td>{coinData.price_change_percentage_24h}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}