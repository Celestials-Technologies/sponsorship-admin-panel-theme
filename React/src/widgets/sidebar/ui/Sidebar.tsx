import { CustomNavlink } from "@/shared/ui/CustomNavlink";
import { Button } from "@/shared/ui/Button";
import ConnectSponsersLogo from "@/shared/ui/ConnectSponsersLogo";
import DashboardIcon from "./DashboardIcon"
import DashboardActiveIcon from "./DashboardActiveIcon ";
import ProPlanIcon from "./ProPlanIcon"
import ProPlanActiveIcon from "./ProPlanActiveIcon";
import StartupPlanIcon from "./StartupPlanIcon"
import StartupPlanActiveIcon from "./StartupPlanActiveIcon";
import OpportunitiesIcon from "./OpportunitiesIcon"
import OpportunitiesActiveIcon from "./OpportunitiesActiveIcon";
import EntrepreneursIcon from "./EntrepreneursIcon"
import EntrepreneursActiveIcon from "./EntrepreneursActiveIcon";
import PartnerIcons from "./PartnerIcons"
import PartnerActiveIcons from "./PartnerActiveIcons";
import YoutubeIcon from "./YoutubeIcon"
import YoutubeActiveIcon from "./YoutubeActiveIcon";


const asideNavLinks = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
    activeIcon: <DashboardActiveIcon />,
    src: "/"
  },
  {
    name: "Startup Plan",
    icon: <StartupPlanIcon />,
    activeIcon: <StartupPlanActiveIcon />,
    src: "startup-plan"
  },
  {
    name: "Pro Plan",
    icon: <ProPlanIcon />,
    activeIcon: <ProPlanActiveIcon />,
    src: "pro-plan"
  },
  {
    name: "Featured Sponsorship Opportunities",
    icon: <OpportunitiesIcon />,
    activeIcon: <OpportunitiesActiveIcon />,
    src: "opportunities"
  },
  {
    name: "Featured Content Entrepreneurs",
    icon: <EntrepreneursIcon />,
    activeIcon: <EntrepreneursActiveIcon />,
    src: "Entrepreneurs"
  },
  {
    name: "Partner apps, tools & courses",
    icon: <PartnerIcons />,
    activeIcon: <PartnerActiveIcons />,
    src: "partner-apps"
  },
  {
    name: " Suggest Youtube Channel",
    icon: <YoutubeIcon />,
    activeIcon: <YoutubeActiveIcon />,
    src: "youtube-channel"
  },
]

export default function Sidebar() {
  return (
    <div
      className="relative rounded-xl pt-11 pb-5 flex-col justify-between bg-[#302964] border border-[#474175] hidden lg:flex min-h-[700px]  overflow-y-auto w-full lg:min-w-[260px] lg:w-[260px] "
    >
      <div className="px-2">
        <h1 className="text-2xl leading-8 text-center Gilroy-extrabold">
          <ConnectSponsersLogo />
        </h1>
        <ul className="mt-5 md:mt-[90px] space-y-2">
          {asideNavLinks.map(link => (
            <li key={link.name} className="">
              <CustomNavlink key={link.name} to={link.src} icon={link.icon} activeIcon={link.activeIcon} label={link.name} mode="outline" />
            </li>
          ))}
        </ul>


        <Button label="Logout" variant="ghost" className="text-base text-gray-50 p-4 py-6 border border-gray-200 w-[90%] rounded-full absolute bottom-5"></Button>

      </div>
    </div>
  )
}
