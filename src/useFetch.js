import { useState, useEffect } from "react";
import axios from 'axios';

const useFetch = (query) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [isError, setIsError] = useState(false);
    let url = `https://api.punkapi.com/v2/beers${query}`;

    useEffect(() => {
        (async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                const response = await axios.get(url);
                setData(response.data);
                setIsLoading(false);
            } catch (err) {
                setIsError(true);
                setIsLoading(false);
            }
        })(url)
    }, [url]);
    return { isLoading, data, isError };
}
export default useFetch;