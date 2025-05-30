import australiaFlag from "@/shared/ui/Icons/png/flags/australia.png";
import italyFlag from "@/shared/ui/Icons/png/flags/italy.png";
import franceFlag from "@/shared/ui/Icons/png/flags/france.png";
import brazilFlag from "@/shared/ui/Icons/png/flags/brazil.png";
import canadaFlag from "@/shared/ui/Icons/png/flags/canada.png";
import chinaFlag from "@/shared/ui/Icons/png/flags/china.png";

export const countries = [
  { name: "Australia", flag: australiaFlag },
  { name: "Italy", flag: italyFlag },
  { name: "France", flag: franceFlag },
  { name: "Brazil", flag: brazilFlag },
  { name: "Canada", flag: canadaFlag },
  { name: "China", flag: chinaFlag },
];

export const notifications = [
  {
    id: 1,
    name: "Theresa Webb",
    message: "just ideas for next time",
    avatar: "images/user_profile10.png",
    count: 5,
    time: "4m",
  },
  {
    id: 2,
    name: "Bessie Cooper",
    message: "omg, this is amazing",
    avatar: "images/user_profile9.png",
    count: 1,
    time: "5m",
  },
  {
    id: 3,
    name: "Jerome Bell",
    message: "woohoooo",
    avatar: "images/user_profile3.png",
    count: 3,
    time: "10m",
  },
];

export const profileMenu = [
  { name: "Account", link: "account" },
  { name: "Setting", link: "setting" },
  { name: "Password", link: "password" },
  { name: "Media", link: "media" },
  { name: "Share", link: "share" },
  { name: "Logout", link: "logout" },
];
