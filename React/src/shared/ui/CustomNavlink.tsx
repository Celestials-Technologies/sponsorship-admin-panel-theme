import { NavLink } from "react-router-dom";
import classes from "../styles/customNavlink.module.css";

export const CustomNavlink = ({ to = "/", icon, activeIcon, label, mode = "" }) => {
    return (
        <NavLink to={to}>
            {({ isActive }) => (
                <div
                    className={`${isActive && mode === "outline" ? classes.sidebarLinksActive : ""} h-12 p-2 flex gap-2 items-center`}
                >
                    <div
                        className={` flex items-center justify-center ${isActive && mode === "outline" ? "w-[33px] h-[33px] p-1 bg-white rounded-lg" : ""
                            }`}
                    >
                        {isActive ? activeIcon : icon}
                    </div>
                    <p className="text-sm md:text-base leading-5 text-white pt-[3px] Gilroy-semibold">
                        {label}
                    </p>
                </div>
            )}
        </NavLink>
    );
};
