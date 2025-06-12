import { useEffect, useState } from "react";
import { fetchOffers } from "../utils/offers";

export function useFetchOffers() {
    const [offers, setOffers] = useState([]);
    const [error, setError] = useState(null);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsFetching(true);
            try {
                await new Promise(resolve => setTimeout(resolve, 1000));
                const offersData = await fetchOffers();
                setOffers(offersData);
            } catch (error) {
                setError({message: "Failed to fetch Partner Offers! Try Again Later!" });
            } finally {

                setIsFetching(false);
            }
        };
        fetchData();
    }, []);
    return {
        isFetching,
        offers,
        error
    };
}
