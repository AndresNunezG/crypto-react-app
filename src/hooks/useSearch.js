import { useState, useEffect } from "react";

const useSearch = (cryptoData) => {
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData]  = useState(cryptoData);
    useEffect(() => {
        const result = cryptoData.filter(coinData => (
            `${coinData.symbol} ${coinData.name}`.toLowerCase()
            .includes(search.toLowerCase())
        ));
        setFilteredData(result);
    }, [cryptoData, search]);
    return {filteredData, search, setSearch}
}

export default useSearch;