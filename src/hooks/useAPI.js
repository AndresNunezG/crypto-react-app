import { useState, useEffect } from "react";

const useAPI = (API) => {
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
            console.log(error);
            setFetchError(true);
         });
    }, []);
    return [cryptoData, fetchError];
}

export default useAPI;