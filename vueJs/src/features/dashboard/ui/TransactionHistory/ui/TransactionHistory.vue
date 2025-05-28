<template>
  <div
    class="p-6 md:pt-6 md:pr-[31px] md:pb-[22px] md:pl-[26px] border border-white rounded-[15px] bg-gradient mt-6"
  >
    <div
      class="border-b border-dashed pb-6 mb-2 border-white flex items-center justify-between mb-6 pb-6 flex-wrap gap-x-1"
    >
      <p class="text-xl md:text-[26px] text-white Gilroy-semibold">
        Transaction History
      </p>
      <div class="flex gap-3 flex-wrap">
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
        <div class="flex items-center gap-2">
          <p class="text-sm Gilroy-normal text-white">Sort By</p>
          <Dropdown v-model="selectedDays" :options="daysOptions" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Input from "@/shared/ui/input/Input.vue";
import SearchIcon from "@/shared/ui/Icons/svgs/SearchIcon.vue";
import { Dropdown } from "@/shared/ui/dropdown";
import { ref } from "vue";

const selectedDays = ref({
  label: "Last 15 days",
  value: "15",
});

const daysOptions = [
  {
    label: "Last 15 days",
    value: "15",
  },
  {
    label: "Last 10 days",
    value: "10",
  },
  {
    label: "Last 7 days",
    value: "7",
  },
];
</script>
