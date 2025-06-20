import { NavLink } from "react-router-dom";
import classes from "../styles/customNavlink.module.css";
import type { SVGProps } from "react";

interface CustomNavlinkProps{
    to:string;
    Icon?:React.FC<SVGProps<SVGSVGElement>>;
    ActiveIcon?:React.FC<SVGProps<SVGSVGElement>>;
    label:string;
    mode?:string;
    onClick?:()=>void
}

export const CustomNavlink = ({ to = "/", Icon, ActiveIcon, label, mode = "",onClick }:CustomNavlinkProps) => {
    return (
        <NavLink to={to} onClick={onClick}>
            {({ isActive }) => (
                <div
                    className={`${isActive && mode === "outline" ? classes.sidebarLinksActive : ""} h-12 p-2 flex gap-2 items-center`}
                >
                    <div
                        className={` flex items-center justify-center ${isActive && mode === "outline" ? "w-[33px] h-[33px] p-1 bg-white rounded-lg" : ""
                            }`}
                    >
                        {isActive
                            ? ActiveIcon ? <ActiveIcon /> : null
                            : Icon ? <Icon /> : null
                        }
                    </div>
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
