<template>
  <div class="w-full xl:w-[66.66%]">
    <div
      class="p-4 md:pt-6 md:pr-[31px] md:pb-[22px] md:pl-[26px] border border-[#e5e5e585] rounded-[15px] bg-gradient xAxisScroll"
    >
      <div
        class="border-b border-dashed pb-6 mb-2 border-[#e5e5e585] flex flex-wrap gap-3 items-center justify-between"
      >
        <p class="text-xl md:text-[26px] text-white Gilroy-semibold">
          Performance
        </p>

        <div class="flex items-center gap-2">
          <p class="text-sm Gilroy-normal text-white">Sort By</p>

          <Dropdown v-model="selectedDays" :options="daysOptions" />
        </div>
      </div>

      <div class="md:w-full w-[659px] md:h-full h-[263px]">
        <canvas id="myChart" width="100%" height="40%"></canvas>
      </div>
    </div>

    <UpcommingTable :tableData="props.tableData" v-if="props.tableData" />
  </div>
</template>
<script setup lang="ts">
import UpcommingTable from "../UpcommingTable/table.vue";
import { Dropdown } from "@/shared/ui/dropdown";
import { ref } from "vue";
import { UpcommingTransactionType } from "../../modals/types";

const props = defineProps<{
  tableData: UpcommingTransactionType[];
}>();

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
