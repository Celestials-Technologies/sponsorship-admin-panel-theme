<template>
  <div
    class="bg-sideBarBg border border-translucentWhite py-1.5 pl-5 pr-2 gap-4 rounded-full flex items-center"
  >
    <input
      type="text"
      id="myInput"
      onkeyup=""
      placeholder="Search"
      class="text-base bg-transparent leading-6 text-white outline-none Gilroy-medium w-[calc(100%-20%)]"
    />
    <div
      onclick=""
      class="p-1 flex items-center justify-center bg-white cursor-pointer w-fit rounded-full searchIconBox"
    >
      <SearchIcon />
    </div>
  </div>
</template>

<script setup lang="ts">
import SearchIcon from "@/components/ui/svgs/serachIcon.vue";
</script>
