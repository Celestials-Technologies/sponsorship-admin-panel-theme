<template>
  <div>
    <TitleHeader
      title="Analytics"
      :isButton="true"
      @click-button="openLiquidityModal"
    />
    <InfoSection />
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
const showLiquidityModal = ref(false);

const openLiquidityModal = () => {
  showLiquidityModal.value = true;
};
</script>
