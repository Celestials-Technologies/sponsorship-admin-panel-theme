import { CustomNavlink } from "@/shared/ui/CustomNavlink";
import { Button } from "@/shared/ui/Button";
import ConnectSponsersLogo from "@/shared/ui/ConnectSponsersLogo";
import DashboardIcon from "./DashboardIcon"
import ProPlanIcon from "./ProPlanIcon"
import StartupPlanIcon from "./StartupPlanIcon"
import OpportunitiesIcon from "./OpportunitiesIcon"
import EntrepreneursIcon from "./EntrepreneursIcon"
import PartnerIcons from "./PartnerIcons"
import YoutubeIcon from "./YoutubeIcon"


const asideNavLinks = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
    src: "/"
  },
  {
    name: "Startup Plan",
    icon: <StartupPlanIcon />,
    src: "startup-plan"
  },
  {
    name: "Pro Plan",
    icon: <ProPlanIcon />,
    src: "pro-plan"
  },
  {
    name: "Featured Sponsorship Opportunities",
    icon: <OpportunitiesIcon />,
    src: "opportunities"
  },
  {
    name: "Featured Content Entrepreneurs",
    icon: <EntrepreneursIcon />,
    src: "Entrepreneurs"
  },
  {
    name: "Partner apps, tools & courses",
    icon: <PartnerIcons />,
    src: "partner-apps"
  },
  {
    name: " Suggest Youtube Channel",
    icon: <YoutubeIcon />,
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
              <CustomNavlink key={link.name} to={link.src} icon={link.icon} label={link.name} mode="outline" />
            </li>
          ))}
        </ul>


        <Button label="Logout" variant="ghost" className="text-base text-gray-50 p-4 py-6 border border-gray-200 w-[90%] rounded-full absolute bottom-5"></Button>

      </div>
    </div>
  )
}
