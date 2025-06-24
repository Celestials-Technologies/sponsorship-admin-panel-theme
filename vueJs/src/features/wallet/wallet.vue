<template>
  <div>
    <TitleHeader title="Wallet" :isButton="true" />
    <TotalPriceSection />
    <Progress />
    <div class="flex xl:flex-nowrap flex-wrap gap-5 mt-6">
      <Performance />
      <div class="w-full xl:w-[33.33%]">
        <CraditCard />
        <!-- Recent Transaction  -->
        <RecentCard />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { TitleHeader } from "@/shared/ui/TitleHeader";
import { TotalPriceSection } from "./ui/TotalPrice";
import Progress from "./ui/proggress/progress.vue";
import CraditCard from "./ui/craditCard/craditCard.vue";
import RecentCard from "./ui/recentCard/recentCard.vue";
import Performance from "./ui/performance/performance.vue";
</script>
