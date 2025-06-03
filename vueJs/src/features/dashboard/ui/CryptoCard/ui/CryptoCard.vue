<template>
  <div
    class="py-6 px-3.5 rounded-xl border border-translucentWhite w-full bg-sideBarBg h-full flex items-center justify-center"
  >
    <div class="w-full">
      <div
        class="flex border-b border-dashed border-white pb-4 mb-4 items-center gap-3"
      >
        <img :src="icon" :alt="name" class="w-8 h-8" />
        <p class="text-white Gilroy-semibold pt-0.5 text-xl sm:text-2xl">
          {{ symbol }}
        </p>
      </div>
      <div class="flex gap-4 justify-between">
        <div>
          <p class="text-xl whitespace-nowrap text-white Gilroy-semibold">
            {{ amount }} {{ currency }}
          </p>
          <div class="flex items-center gap-2 mt-3">
            <!-- <img :src="trendIcon" :alt="trend" class="w-6 h-6" /> -->
            <GrowthIcon v-if="trend === 'up'" :color="trendColor" />
            <p
              :class="`text-sm sm:text-base Gilroy-normal pt-0.5`"
              :style="{ color: trendColor }"
            >
              {{ percentage }}%
            </p>
          </div>
        </div>
        <div class="h-[35%]">
          <canvas :id="chartId" width="100%" height="100%"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import GrowthIcon from "@/shared/ui/Icons/svgs/GrowthIcon.vue";
/* eslint-disable */
const props = defineProps<{
  icon: string;
  name: string;
  symbol: string;
  amount: number;
  currency: string;
  trend: "up" | "down";
  percentage: number;
  trendColor: string;
  chartId: string;
}>();
</script>
