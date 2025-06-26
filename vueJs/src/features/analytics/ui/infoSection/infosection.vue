<template>
  <div
    class="flex flex-wrap 2xl:flex-nowrap items-center gap-5 relative w-full"
    id="blockZindex"
    style="z-index: 9999"
  >
    <div
      v-for="item in analyticsInfo"
      :key="item.id"
      class="sm:w-[48%] xl:w-[31.333%] 2xl:w-full w-full max-w-full h-full"
    >
      <div
        class="p-4 md:p-6 border border-[#fff3] w-full max-w-full bg-sideBarBg h-full rounded-xl"
      >
        <div
          class="flex border-b border-dashed border-[#e5e5e585] pb-4 mb-4 items-center gap-3"
        >
          <h3 class="text-white Gilroy-semibold text-xl sm:text-2xl">
            {{ item.name }}
          </h3>
        </div>
        <div class="flex items-center justify-between">
          <div>
            <h4
              class="text-white Gilroy-semibold text-xl sm:text-2xl whitespace-nowrap"
            >
              {{ item.amount }} USDT
            </h4>
            <div class="flex items-center gap-2 mt-3">
              <GrowthIcon :color="item.growthColor" />
              <Typography variant="p" class="text-[#00A385] pt-0.5">
                {{ item.percentage }}%
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import GrowthIcon from "@/shared/ui/Icons/svgs/GrowthIcon.vue";
import { Typography } from "@/shared/ui/typography";
import { AnalyticsInfo } from "@/features/analytics/model/types";

const props = defineProps<{
  analyticsInfo: AnalyticsInfo[];
}>();
</script>
