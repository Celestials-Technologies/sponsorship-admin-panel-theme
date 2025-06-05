import { useEffect, useState } from "react";
import { fetchDocuments } from "../../../shared/lib//documents";

export function useFetchDocuments() {
    const [documents, setDocuments] = useState([]);
    const [error, setError] = useState(null);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsFetching(true);
            try {

                await new Promise(resolve => setTimeout(resolve, 1000));
                const documentsData = await fetchDocuments();
                setDocuments(documentsData);
            } catch (error) {
                setError({message: "Failed to fetch documents! Try Again Later!" });
            } finally {

                setIsFetching(false);
            }
        };
        fetchData();
    }, []);
    return {
        isFetching,
        documents,
        error
    };
}
