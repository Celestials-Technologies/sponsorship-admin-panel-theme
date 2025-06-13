import { useEffect, useState } from "react";
import usermage from "@/shared/images/user_profile1.png";

const MAX_USERS = 1;

export function useTeamManager() {
    const [team, setTeam] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        type: "user",
        imageSrc: usermage,
    });
    const [error, setError] = useState({ message: "" });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchInitialUsers = async () => {
            try {
                const res = await fetch("/data/users.json");
                const data = await res.json();
                setTeam(data);
            } catch (err) {
                setError({ message: "Failed to load users." });
            } finally {
                setLoading(false);
            }
        };

        fetchInitialUsers();
    }, []);

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        setError({ message: "" });
    };

    const handleInvite = () => {
        if (
            formData.name.trim() === "" ||
            formData.email.trim() === "" ||
            formData.type.trim() === ""
        ) {
            setError({ message: "Please fill out all fields." });
            return;
        }

        if (team.length >= MAX_USERS) {
            setError({ message: "User limit reached." });
            return;
        }

        setTeam((prev) => [...prev, formData]);
        setFormData({ name: "", email: "", type: "user", imageSrc: usermage });
        setError({ message: "" });
    };

    const handleDelete = (email) => {
        setTeam((prev) => prev.filter((user) => user.email !== email));
    };

    return {
        team,
        formData,
        error,
        loading,
        handleChange,
        handleInvite,
        handleDelete,
    };
}
