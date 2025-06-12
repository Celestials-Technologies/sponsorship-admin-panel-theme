import { useEffect, useState } from "react";
import { fetchPlansData } from "../utils/plans";

export function useFetchPlans() {
    const [plans, setPlans] = useState([]);
    const [error, setError] = useState(null);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsFetching(true);
            try {
                await new Promise(resolve => setTimeout(resolve, 500));
                const plansData = await fetchPlansData();
                setPlans(plansData);
            } catch (error) {
                setError({message: "Failed to fetch plans! Try Again Later!" });
            } finally {
                setIsFetching(false);
            }
        };
        fetchData();
    }, []);
    return {
        isFetching,
        plans,
        error
    };
}
