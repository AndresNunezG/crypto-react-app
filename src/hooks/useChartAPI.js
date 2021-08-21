import { useState, useEffect } from "react";

const useChartAPI = (API) => {
    const [chartData, setChartData] = useState([]);
    const [fetchChartError, setFetchChartError] = useState(false);
    useEffect(() => {
        fetch(API, {method: 'GET'})
         .then(res => res.json())
         .then(response => setChartData(response))
         .catch(error => setFetchChartError(true));
    }, [API]);
    return [chartData, fetchChartError];
}

export default useChartAPI;