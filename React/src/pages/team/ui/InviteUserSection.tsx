import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";

export default function InviteUserSection({ error, formData, team, handleChange, handleInvite }) {
    return (
        <div className="px-5 pb-4 pt-2 rounded-3xl border border-gray-700 bg-[#302964]">
            <div className="flex justify-between items-center mb-3">
                <h3 className="text-[20px] Gilroy-bold">Invite User</h3>
                <p className="text-[19.5px] Gilroy-medium py-2">
                    User Limit: <span className="text-primary">1/{team.length}</span>
                </p>
            </div>
            <p className="text-white text-sm mb-4">
                The user you are creating will get an email with login details.
            </p>
            {error.message && <p className="text-red-500 mb-2">{error.message}</p>}
            <div className="flex flex-col sm:flex-row gap-3 mb-3">
                <Input
                    placeholder="Employee Full Name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                />
                <Input
                    placeholder="Employee Email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                />
                <select
                    className=" lg:min-w-[303px] px-3 py-3 h-[49px] text-gray-700 text-sm rounded-lg bg-gray-100 border border-[#3d2d9c] focus:outline-none"
                    value={formData.type}
                    onChange={(e) => handleChange("type", e.target.value)}
                >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>
                <Button
                    label="Invite User"
                    className="rounded-full bg-primary-button min-w-[115px] h-[47px]"
                    onClick={handleInvite}
                />
            </div>
        </div>)
}
