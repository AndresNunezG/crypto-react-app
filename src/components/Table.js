import React from 'react';

import Loader from './Loader';
import TableRow from './TableRow';

import useAPI from '../hooks/useAPI';
import useSearch from '../hooks/useSearch';

export default function Table () {
    const API = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
    const [cryptoData, loading] = useAPI(API);
    const {filteredData, search, setSearch} = useSearch(cryptoData);
    if (loading || cryptoData.length === 0) {
        return (
            <Loader />
        )
    }
    return (
        <div className="min-h-screen flex flex-col justify-star items-center w-full h-full bg-gray-300">
            <div className="m-8 min-w-min">
                <label htmlFor="search" className="cursor-pointer">
                    <i className="p-2.5 text-green-500 absolute fas fa-search"></i>
                </label>
                <input
                 id="search"
                 className="w-full px-8 py-1 rounded-lg border-2 border-gray-500 focus:outline-none focus:border-green-500 md:px-10"
                 onChange={e => setSearch(e.target.value)}
                 value={search}
                 placeholder="Buscar...">
                </input>
            </div>
            <div className="w-full flex justify-center items-center mb-8">
                <div className="w-10/12 rounded-xl overflow-x-scroll">
                    <table className="w-full border-collapse overflow-hidden rounded-xl table-auto">
                        <thead className="text-gray-50">
                            <tr className="bg-gray-800">
                                <th className="p-2">#</th>
                                <th className="p-2">Símbolo</th>
                                <th className="p-2">Moneda</th>
                                <th className="p-2">Precios USD</th>
                                <th className="p-2">Precio 24 h</th>
                                <th className="p-2">% 24 h</th>
                                <th className="p-2">7 d</th>
                            </tr>
                        </thead>
                        <tbody>    
                            {filteredData.map((coinData, index) => (
                                <TableRow coinData={coinData} key={index}/>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}