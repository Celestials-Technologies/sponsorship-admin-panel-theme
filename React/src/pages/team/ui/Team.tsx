import { useTeamManager } from "../api/useTeamManager";
import UserTable from "./UserTable";
import InviteUserSection from "./InviteUserSection";

export function Team() {
    const {
        team,
        formData,
        error,
        loading,
        handleChange,
        handleInvite,
        handleDelete,
    } = useTeamManager();

    if (loading) return <p className="text-white">Loading...</p>;

    return (
        <section className="bg-secondary py-10 text-white max-w-[1300px] mx-auto">
            <div>
                <h2 className="text-[28px] mb-2 Gilroy-bold">Team</h2>
                <p className="mb-4 Gilroy-medium text-[18px]">
                    Manage who has access to this workspace.
                </p>
                <InviteUserSection error={error} formData={formData} team={team} handleChange={handleChange} handleInvite={handleInvite} />
                <UserTable team={team} onDelete={handleDelete} />
            </div>
        </section>
    );
}
