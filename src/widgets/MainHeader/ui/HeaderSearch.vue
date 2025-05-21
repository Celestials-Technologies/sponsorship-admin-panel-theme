<script setup lang="ts">
import SearchIcon from "@/shared/ui/Icons/svgs/SearchIcon.vue";
import Input from "@/shared/ui/input/Input.vue";
</script>

<template>
  <div
    class="bg-sideBarBg border border-translucentWhite py-1.5 pl-5 pr-2 gap-4 rounded-full flex items-center hidden md:flex"
  >
    <Input
      variant="search"
      placeholder="Search"
      class="text-base bg-transparent leading-6 text-white outline-none Gilroy-medium max-w-[195px]"
    />
    <div
      class="p-1 flex items-center justify-center bg-white cursor-pointer w-fit rounded-full searchIconBox"
    >
      <SearchIcon />
    </div>
  </div>
</template>
