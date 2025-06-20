import { useEffect, useState } from "react";
import { fetchPlansData } from "../utils/plans";
import type { PlansType } from "../type/plans";




export function useFetchPlans() {
    const [plans, setPlans] = useState<PlansType[]>([]);
    const [error, setError] = useState<{message:string}>();
    const [isFetching, setIsFetching] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsFetching(true);
            try {
                await new Promise(resolve => setTimeout(resolve, 500));
                const plansData = await fetchPlansData();
                console.log("plansData:",plansData)
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
