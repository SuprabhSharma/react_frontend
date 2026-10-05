import { useEffect , useState } from "react";

const API_KEY = import.meta.env.VITE_EXCHANGE_RATE_API_KEY;

function useCurrencyInfo(currency) {
    const [data , setData] = useState({})
    useEffect(() => {
        if (!API_KEY) {
            console.error("Missing VITE_EXCHANGE_RATE_API_KEY environment variable");
            return;
        }

        fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${currency.toUpperCase()}`)
        .then((res) => res.json())
        .then((res) => setData(res.conversion_rates ?? {}))
        .catch((error) => console.error("Failed to fetch currency rates", error));
    }, [currency])

    return data
}



export default useCurrencyInfo;

