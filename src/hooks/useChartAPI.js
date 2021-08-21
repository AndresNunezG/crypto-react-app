import { useState, useEffect } from "react";

const useChartAPI = (API) => {
    const [chartData, setChartData] = useState([]);
    useEffect(() => {
        fetch(API, {method: 'GET'})
         .then(res => res.json())
         .then(response => setChartData(response))
         .catch(error => console.log(error));
    }, [API]);
    return chartData;
}

export default useChartAPI;