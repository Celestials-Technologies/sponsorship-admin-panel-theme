<template>
  <div class="w-full">
    <div
      class="p-4 md:pt-6 md:pr-[31px] md:pb-[22px] md:pl-[26px] border border-[#e5e5e585] rounded-[15px] bg-gradient BTCtoETCchart xAxisScroll"
    >
      <div
        class="border-b border-dashed pb-6 mb-2 border-[#e5e5e585] flex flex-wrap gap-3 items-center justify-between"
      >
        <Typography variant="h3" class="text-white">
          {{ title }}
        </Typography>

        <div class="flex items-center gap-2">
          <p class="text-sm Gilroy-normal text-white">Sort By</p>
          <Dropdown v-model="fromDays" :options="daysOptions" />
        </div>
      </div>
      <a
        v-if="title === 'Asset Allocation'"
        onclick="seeAll()"
        id="seeAll"
        class="w-[85px] flex gap-2 py-2"
      >
        <Typography variant="p" class="text-[#FFA51F] cursor-pointer">
          See All
        </Typography>
        <Icon
          icon="heroicons:arrow-small-right"
          width="24"
          height="24"
          color="#FFA51F"
        />
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Typography } from "@/shared/ui/typography";
import { Icon } from "@iconify/vue";
import Dropdown from "@/shared/ui/dropdown/Dropdown.vue";
import { ref } from "vue";
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
const fromDays = ref({
  label: "10 days",
  value: "10",
});
const daysOptions = [
  {
    label: "10 days",
    value: "10",
  },
  {
    label: "15 days",
    value: "15",
  },
  {
    label: "30 days",
    value: "30",
  },
];
</script>
