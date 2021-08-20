import React, { useEffect, useState } from 'react';

import "tailwindcss/tailwind.css";

export default function Table () {
    const columnNames = ['Símbolo', "Moneda", "Precio USD", "", "Cambio de precio 24 h (%)"];
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
            <table className="table-fixed">
                <thead className="text-gray-50">
                    <tr className="bg-gray-800">
                        <th className="w-1/5">Símbolo</th>
                        <th className="w-2/5">Moneda</th>
                        <th className="w-1/5">Precios USD</th>
                        <th className="w-1/5">Cambio de precio 24h %</th>
                    </tr>
                </thead>
                <tbody>    
                    {cryptoData.map((coinData, index) => {
                        return (
                            <tr className="bg-gray-600 border-b border-gray-100 text-gray-50 hover:bg-gray-500" key={index}>
                                <td className="text-center font-mono  text-gray-100 text-opacity-50">{coinData.symbol.toUpperCase()}</td>
                                <td className="flex items-center"><img className="w-6 m-3.5" src={coinData.image} alt={index}></img> {coinData.name}</td>
                                <td className="">{coinData.current_price}</td>
                                <td className={coinData.price_change_percentage_24h < 0 ? "text-red-500" : "text-green-500"}>
                                    {coinData.price_change_percentage_24h}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}