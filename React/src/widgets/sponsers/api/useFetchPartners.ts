import { useEffect, useState } from "react";
import { fetchPartnersData } from "@/shared/lib/partners";

export function useFetchPartners() {
    const [partners, setPartners] = useState([]);
    const [error, setError] = useState(null);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsFetching(true);
            try {
                await new Promise(resolve => setTimeout(resolve, 1000));
                const partnersData = await fetchPartnersData();
                setPartners(partnersData);
            } catch (error) {
                setError({message: "Failed to fetch Partners! Try Again Later!" });
            } finally {
                setIsFetching(false);
            }
        };
        fetchData();
    }, []);
    return {
        isFetching,
        partners,
        error
    };
}
