<script lang="ts">
export default {
  name: "Sidebar",
};
</script>

<script setup lang="ts">
import { computed, defineProps, withDefaults } from "vue";
import { useRoute } from "vue-router";
import { type NavigationItem } from "../model/types";
import { navigationConfig } from "../model/config";
import SidebarNav from "../ui/SidebarNav.vue";
import SidebarLogo from "../ui/SidebarLogo.vue";
import SidebarFooter from "../ui/SidebarFooter.vue";

interface Props {
  isVisible?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  isVisible: false,
});

const route = useRoute();

const isActiveRoute = computed(() => (path: string) => route.path === path);

const isActiveParent = (item: NavigationItem) => {
  if (!item.children) return isActiveRoute.value(item.path);
  return item.children.some((child) => isActiveRoute.value(child.path));
};
</script>

<template>
  <div
    id="sideBar"
    class="fixed top-[25px]"
    :class="{ 'lg:block': isVisible, 'lg:hidden': !isVisible }"
    style="width: 260px; transition: all 0.5s ease; left: 24px"
  >
    <div
      class="w-full rounded-[20px] pt-[46px] pb-5 flex-col justify-between bg-sideBarBg border border-translucentWhite hidden lg:flex h-[92vh] sticky top-6 tableScroll overflow-y-auto"
    >
      <div class="px-2.5">
        <SidebarLogo />
        <SidebarNav
          :navigation-items="navigationConfig"
          :is-active-route="isActiveRoute"
          :is-active-parent="isActiveParent"
        />
      </div>
      <SidebarFooter />
    </div>
  </div>
</template>
