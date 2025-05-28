import DashboardIcon from "@/shared/ui/Icons/svgs/DashboardIcon.vue";
import BalanceIcon from "@/shared/ui/Icons/svgs/BalanceIcon.vue";
import AssetDetailsIcon from "@/shared/ui/Icons/svgs/AssetDetailsIcons.vue";
import AccountIcon from "@/shared/ui/Icons/svgs/AccountIcon.vue";
import WalletIcon from "@/shared/ui/Icons/svgs/Wallet.vue";
import AnalyticsIcon from "@/shared/ui/Icons/svgs/AnalyticsIcon.vue";
import { type NavigationItem } from "./types";

export const navigationConfig: NavigationItem[] = [
  {
    path: "/dashboard",
    label: "Dashboard",
    icon: DashboardIcon,
  },
  {
    path: "/balance",
    label: "Balance Details",
    icon: BalanceIcon,
  },
  {
    path: "/analytics",
    label: "Analytics",
    icon: AnalyticsIcon,
  },
  {
    path: "/wallet",
    label: "Wallet",
    icon: WalletIcon,
  },
  {
    path: "/asset-details",
    label: "Asset Details",
    icon: AssetDetailsIcon,
    children: [
      { path: "/asset-details", label: "Asset Details" },
      { path: "/new-asset", label: "New Asset" },
    ],
  },
  {
    path: "/setting",
    label: "Account",
    icon: AccountIcon,
    children: [
      { path: "/setting", label: "Setting" },
      { path: "/password", label: "Password" },
      { path: "/billing", label: "Billing" },
      { path: "/notification", label: "Notification" },
      { path: "/team", label: "Team" },
      { path: "/login", label: "Login" },
      { path: "/signup", label: "Sign Up" },
    ],
  },
];
