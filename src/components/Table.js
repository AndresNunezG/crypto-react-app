import React, { useEffect, useState } from 'react';

import "tailwindcss/tailwind.css";

export default function Table () {
    const API = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
    const [cryptoData, setCryptoData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [search, setSearch] = useState('');
    useEffect(() => {
        fetch(API, {method: "GET"})
         .then(res => res.json())
         .then(response => {
            setCryptoData(response);
            setFilteredData(response);
            setFetchError(false)
         })
         .catch(error => {
            setFetchError(true);
         });
    }, []);
    const handleChangeSearch = (e) => {
        setSearch(e.target.value);
        if (search.toLowerCase() !== '') {
            const cryptoDataFiltered = cryptoData.filter(coinData => {
                return (
                    `${coinData.symbol} ${coinData.name}`.toLowerCase().includes(search.toLowerCase())
                )
            })
            setFilteredData(cryptoDataFiltered);
        } else {
            setFilteredData(cryptoData);
        }
    }
    return (
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="m-4">
                <i className="p-2.5 text-green-500 absolute fas fa-search"></i>
                <input
                 className="w-full px-8 py-1 border-2 border-gray-500 focus:outline-none focus:border-2 focus:border-blue-800"
                 onChange={handleChangeSearch}
                 value={search}
                 placeholder="Buscar...">
                </input>
            </div>
            <div className="w-full">
                <table className="w-full m-8 p-8 table-auto">
                    <thead className="text-gray-50">
                        <tr className="bg-gray-800">
                            <th className="p-2">#</th>
                            <th className="p-2">Símbolo</th>
                            <th className="p-2">Moneda</th>
                            <th className="p-2">Precios USD</th>
                            <th className="p-2">24 h</th>
                        </tr>
                    </thead>
                    <tbody>    
                        {filteredData.map((coinData, index) => {
                            return (
                                <tr className="bg-gray-600 border-b border-gray-800 text-gray-50 hover:bg-gray-500" key={index}>
                                    <td className="text-center font-mono  text-gray-100 text-opacity-50">{index}</td>
                                    <td className="text-center font-mono  text-gray-100 text-opacity-50">{coinData.symbol.toUpperCase()}</td>
                                    <td className="flex items-center px-8"><img className="w-7 m-3.5" src={coinData.image} alt={index}></img> {coinData.name}</td>
                                    <td className="text-right px-8">{coinData.current_price}</td>
                                    <td className={coinData.price_change_percentage_24h < 0 ? "px-8 text-right text-red-500" : "px-8 text-right text-green-500 mx-4"}>
                                        {coinData.price_change_percentage_24h}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}