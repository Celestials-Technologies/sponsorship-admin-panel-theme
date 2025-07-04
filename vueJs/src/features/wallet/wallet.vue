<template>
  <div>
    <TitleHeader title="Wallet" :isButton="true" />
    <TotalPriceSection />
    <Progress :limits="limits" v-if="limits" />
    <div class="flex xl:flex-nowrap flex-wrap gap-5 mt-6">
      <Performance :tableData="tableData" v-if="tableData" />
      <div class="w-full xl:w-[33.33%]">
        <CraditCard />
        <RecentCard
          :recentTransaction="recentTransaction"
          v-if="recentTransaction"
        />
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
import { useWalletData } from "./api";

const { limits, recentTransaction, tableData } = useWalletData();
</script>
