import React, { useEffect } from 'react';

export default function Table () {
    const columnNames = ['#', "Moneda", "Precio", "", "Cambio de precio 24 h (%)"];
    
    useEffect(() => {
        fetch
    }, []);
    return (
        <div className="">
            <table className="">
                <tr>
                    {columnNames.map((columnName) => (
                        <th>{columnName}</th>
                    ))}
                </tr>
            </table>
        </div>
    )
}