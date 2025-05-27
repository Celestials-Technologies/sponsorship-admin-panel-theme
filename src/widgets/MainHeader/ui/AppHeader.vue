<script setup lang="ts">
import { type HeaderProps, type HeaderEmits } from "../model/types";
import BurgerIcon from "@/shared/ui/Icons/svgs/BurgerIcon.vue";
import HeaderSearch from "./HeaderSearch.vue";
import HeaderNotifications from "./HeaderNotifications.vue";
import HeaderCountrySelect from "./HeaderCountrySelect.vue";
import HeaderProfile from "./HeaderProfile.vue";
import WalletButton from "./WalletButton.vue";
import { Button } from "@/shared/ui/button";

defineOptions({
  name: "AppHeader",
});

const props = defineProps<HeaderProps>();
const emit = defineEmits<HeaderEmits>();

const handleToggleSidebar = () => {
  emit("toggle-sidebar");
};

const handleConnectWallet = () => {
  emit("connect-wallet");
};
</script>

<template>
  <header class="transition-all duration-300 relative z-[99999] fixed top-0">
    <div
      class="w-full py-[9px] md:pr-[18px] md:px-[33px] rounded-[15px] flex justify-between items-center gap-2.5 bg-sideBarBg border border-translucentWhite px-3 backdrop-blur-sm relative"
    >
      <div class="flex items-center gap-5 justify-between w-full">
        <nav class="flex gap-3 items-center">
          <Button
            @click="handleToggleSidebar"
            aria-label="Toggle Sidebar"
            class="hover:opacity-80 transition-opacity"
            variant="none"
            size="icon"
          >
            <BurgerIcon customClass="w-10 h-10" />
          </Button>
          <HeaderSearch />
        </nav>
        <div class="gap-3 flex items-center">
          <WalletButton @click="handleConnectWallet" />
          <HeaderNotifications />
          <HeaderCountrySelect />
          <HeaderProfile />
        </div>
      </div>
    </div>
  </header>
</template>
