import { useState, useEffect } from "react";

const useAPI = (API) => {
    const [cryptoData, setCryptoData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
       setLoading(true);
        fetch(API, {method: "GET"})
         .then(res => res.json())
         .then(response => {
            setCryptoData(response);
            setLoading(false);
         })
         .catch(error => {
            console.log(error);
            setLoading(true);
         });
    }, [API]);
    return [cryptoData, loading];
}

export default useAPI;