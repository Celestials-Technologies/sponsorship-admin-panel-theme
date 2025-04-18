<script setup lang="ts">
import { ref } from "vue";
import AppHeader from "@/components/layout/AppHeader.vue";
import AppSidebar from "@/components/layout/AppSidebar.vue";
// Add any required imports or logic here

const isSidebarVisible = ref(true);

const handleToggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value;
};
</script>

<template>
  <div class="min-h-screen bg-bgPrimary">
    <AppSidebar :is-visible="isSidebarVisible" />
    <div
      class="transition-all duration-300"
      :class="{
        'lg:ml-[284px]': isSidebarVisible,
        'lg:ml-0': !isSidebarVisible,
      }"
    >
      <AppHeader
        @toggle-sidebar="handleToggleSidebar"
        :is-sidebar-visible="isSidebarVisible"
      />
      <main class="mt-[25px] px-6 transition-all duration-300">
        <router-view />
      </main>
    </div>
  </div>
</template>
