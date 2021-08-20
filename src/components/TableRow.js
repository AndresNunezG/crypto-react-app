import React from 'react';

export default function TableRow (props) {
    return (
        <tr className="bg-gray-600 border-b border-gray-800 text-gray-50 hover:bg-gray-500" key={props.index}>
            <td className="text-center font-mono  text-gray-100 text-opacity-50">{props.index}</td>
            <td className="text-center font-mono  text-gray-100 text-opacity-50">{props.coinData.symbol.toUpperCase()}</td>
            <td className="flex items-center px-8"><img className="w-7 m-3.5" src={props.coinData.image} alt={props.index}></img> {props.coinData.name}</td>
            <td className="text-right px-8">{props.coinData.current_price}</td>
            <td className="text-right px-8">{props.coinData.price_change_24h}</td>
            <td className={props.coinData.price_change_percentage_24h < 0 ? "px-8 text-right text-red-500" : "px-8 text-right text-green-500 mx-4"}>
                {props.coinData.price_change_percentage_24h}
            </td>
        </tr>
 )
}