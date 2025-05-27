export interface Country {
  name: string;
  flag: string;
}

export interface Notification {
  id: number;
  name: string;
  message: string;
  avatar: string;
  count?: number;
  time: string;
}

export interface MenuItem {
  name: string;
  link: string;
}

export interface HeaderProps {
  isSidebarVisible: boolean;
}

export type HeaderEmits = {
  (e: "toggle-sidebar"): void;
  (e: "connect-wallet"): void;
};
