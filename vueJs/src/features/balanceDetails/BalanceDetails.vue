<template>
  <div>
    <TitleHeader
      title="Balance Details"
      :isButton="true"
      @click-button="openLiquidityModal"
    />

    <div
      class="flex flex-wrap xl:flex-nowrap gap-y-6 gap-x-5 relative"
      id="blockZindex"
      style="z-index: 9999"
    >
      <AverageBalance />
      <CurrencyOverview />
    </div>
    <TransactionHistory />

    <LiquidityModal
      v-if="showLiquidityModal"
      @close="showLiquidityModal = false"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

import { TitleHeader } from "@/shared/ui/TitleHeader";
import { LiquidityModal } from "@/entities/liquidity";
import AverageBalance from "./ui/AverageBalance.vue";
import CurrencyOverview from "./ui/CurrencyOverview.vue";
import TransactionHistory from "@/features/dashboard/ui/TransactionHistory/ui/TransactionHistory.vue";
const showLiquidityModal = ref(false);

const openLiquidityModal = () => {
  showLiquidityModal.value = true;
};
</script>
