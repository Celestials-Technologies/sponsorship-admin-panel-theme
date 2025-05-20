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
        <InputField />
        <div class="flex items-center gap-2">
          <p class="text-sm Gilroy-normal text-white">Sort By</p>
          <Dropdown v-model="selectedDays" :options="daysOptions" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import InputField from "@/components/ui/inputField.vue";
import Dropdown from "@/components/ui/Dropdown.vue";
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
