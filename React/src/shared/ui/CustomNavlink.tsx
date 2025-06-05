import { NavLink } from "react-router-dom";
import classes from "../styles/customNavlink.module.css";

export const CustomNavlink = ({ to = "/", icon = undefined, label, mode = "" }) => {
    return (
        <NavLink to={to}>
            {({ isActive }) => (
                <div
                    className={`${isActive ? (mode === "outline" ? classes.sidebarLinksActive : "") : ""} h-12 p-2 flex gap-2 items-center`}
                >
                    {icon}
                    <p
                        className={`text-sm md:text-base leading-5 ${isActive
                            ? mode === "outline"
                                ? "text-white"
                                : "text-primary" :
                            "text-white"} pt-[3px] Gilroy-semibold`}
                    >
                        {label}
                    </p>
                </div>
            )}
        </NavLink>
    );
};
