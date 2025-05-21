<script setup lang="ts">
import { ref } from "vue";
import { AppHeader } from "@/widgets/MainHeader";
import { Sidebar } from "@/widgets/Sidebar";
// Add any required imports or logic here

const isSidebarVisible = ref(true);

const handleToggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value;
};
</script>

<template>
  <div
    class="min-h-screen bg-bgPrimary flex gap-[25px] pt-[25px] pb-[53px] px-6"
  >
    <Sidebar :is-visible="isSidebarVisible" />
    <div
      class="transition-all duration-300 w-full"
      :class="{
        'lg:ml-[284px]': isSidebarVisible,
        'lg:ml-0': !isSidebarVisible,
      }"
    >
      <AppHeader
        @toggle-sidebar="handleToggleSidebar"
        :is-sidebar-visible="isSidebarVisible"
      />
      <main class="h-[calc(92vh-120px)] overflow-auto mt-12">
        <router-view />
      </main>
    </div>
  </div>
</template>
