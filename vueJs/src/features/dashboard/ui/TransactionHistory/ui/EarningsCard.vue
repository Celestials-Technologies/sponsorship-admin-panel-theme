<template>
  <div
    class="p-6 md:pt-6 md:pr-[31px] md:pb-[22px] md:pl-[26px] border border-white rounded-[15px] bg-gradient mt-6"
  >
    <div
      class="border-b border-dashed pb-6 mb-2 border-white flex flex-wrap gap-3 items-center justify-between"
    >
      <p class="text-xl md:text-[26px] text-white Gilroy-semibold">Earnings</p>
      <div class="flex items-center gap-2">
        <p class="text-sm Gilroy-normal text-white">Sort By</p>
        <Dropdown v-model="selectedDays" :options="daysOptions" />
      </div>
    </div>
    <canvas id="myChart" width="100%" height="40%"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Dropdown } from "@/shared/ui/dropdown";
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
