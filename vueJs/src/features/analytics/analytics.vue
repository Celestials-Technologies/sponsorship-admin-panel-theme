<template>
  <div>
    <TitleHeader
      title="Analytics"
      :isButton="true"
      @click-button="openLiquidityModal"
    />
    <InfoSection :analyticsInfo="analyticsInfo" v-if="analyticsInfo" />
    <AnalyticsCharts />
    <LiquidityModal
      v-if="showLiquidityModal"
      @close="showLiquidityModal = false"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { InfoSection } from "@/features/analytics/ui";
import { AnalyticsCharts } from "@/features/analytics/ui/Charts";
import { TitleHeader } from "@/shared/ui/TitleHeader";
import { LiquidityModal } from "@/entities/liquidity";
import { useAnalyticsData } from "./api";
const showLiquidityModal = ref(false);
const { analyticsInfo } = useAnalyticsData();

const openLiquidityModal = () => {
  showLiquidityModal.value = true;
};
</script>
