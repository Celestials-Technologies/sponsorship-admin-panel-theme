import { Button } from "@/shared/ui/Button";
import CrossIcon from "@/shared/ui/CrossIcon";

export default function UserTable({ team, onDelete }) {
    return (
        <div className="w-full mt-5 rounded-xl overflow-x-scroll lg:overflow-hidden border border-gray-100 bg-gradient-to-r from-[#261A7E] to-[#191155]">
            <table className="w-full text-left">
                <thead className="border-b border-gray-100">
                    <tr>
                        <th className="p-4">User</th>
                        <th className="p-4">Email Address</th>
                        <th className="p-4">User Type</th>
                        <th className="p-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {team.map((user, index) => (
                        <tr
                            key={index}
                            className="hover:bg-[#291e6b] transition text-[18px]"
                        >
                            <td className="p-4 flex items-center gap-3">
                                <img
                                    src={user.imageSrc}
                                    alt="avatar"
                                    className="w-[62px] h-[62px] rounded-full"
                                />
                                {user.name}
                            </td>
                            <td className="p-4">{user.email}</td>
                            <td className="p-4 capitalize">{user.type}</td>
                            <td className="p-4">
                                <Button
                                    className="w-[46px] h-[46px] p-0"
                                    onClick={() => onDelete(user.email)}
                                    icon={<CrossIcon color="white" size="40px" />}
                                />
                            </td>
                        </tr>
                    ))}
                    {team.length === 0 && (
                        <tr>
                            <td colSpan={4} className="text-center py-6">
                                No team members added.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
