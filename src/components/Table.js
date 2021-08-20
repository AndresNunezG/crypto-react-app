import React from 'react';

import TableRow from './TableRow';
import useAPI from '../hooks/useAPI';
import useSearch from '../hooks/useSearch';

export default function Table () {
    const API = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
    const [cryptoData, fetchError] = useAPI(API);
    const {filteredData, search, setSearch} = useSearch(cryptoData);
    return (
        <div className="flex flex-col justify-center items-center w-full h-full bg-gray-300">
            <div className="m-8 w-3/12">
                <i className="p-2.5 text-green-500 absolute fas fa-search"></i>
                <input
                 className="w-full px-8 py-1 rounded-lg border-2 border-gray-500 focus:outline-none focus:border-2 focus:border-blue-800"
                 onChange={e => setSearch(e.target.value)}
                 value={search}
                 placeholder="Buscar...">
                </input>
            </div>
            <div className="w-full flex justify-center items-center mb-8">
                <div className="w-10/12 rounded-xl">
                    <table className="w-full border-collapse overflow-hidden rounded-xl table-auto">
                        <thead className="text-gray-50">
                            <tr className="bg-gray-800">
                                <th className="p-2">#</th>
                                <th className="p-2">Símbolo</th>
                                <th className="p-2">Moneda</th>
                                <th className="p-2">Precios USD</th>
                                <th className="p-2">Precio 24 h</th>
                                <th className="p-2">% 24 h</th>
                            </tr>
                        </thead>
                        <tbody>    
                            {filteredData.map((coinData, index) => (
                                <TableRow coinData={coinData} key={index} index={index}/>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}