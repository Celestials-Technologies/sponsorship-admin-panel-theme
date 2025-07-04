<template>
  <div>
    <TitleHeader
      title="Balance Details"
      :isButton="true"
      @click-button="openLiquidityModal"
    />
    <div v-if="isLoading" class="text-white">Loading...</div>

    <div
      class="flex flex-wrap xl:flex-nowrap gap-y-6 gap-x-5 relative"
      id="blockZindex"
      style="z-index: 9999"
    >
      <AverageBalance :data="averageBalanceData" v-if="averageBalanceData" />
      <CurrencyOverview
        :data="currencyOverviewData"
        v-if="currencyOverviewData"
      />
    </div>
    <TransactionHistory />

    <LiquidityModal
      v-if="showLiquidityModal"
      @close="showLiquidityModal = false"
    />
  </div>
</template>
<script setup lang="ts">
import { TitleHeader } from "@/shared/ui/TitleHeader";
import { LiquidityModal } from "@/entities/liquidity";
import AverageBalance from "./ui/AverageBalance.vue";
import CurrencyOverview from "./ui/CurrencyOverview.vue";
import TransactionHistory from "@/features/dashboard/ui/TransactionHistory/ui/TransactionHistory.vue";
import { useBalanceDetailsData } from "./api";
import { ref } from "vue";

const { averageBalanceData, currencyOverviewData, isLoading } =
  useBalanceDetailsData();
const showLiquidityModal = ref(false);

const openLiquidityModal = () => {
  showLiquidityModal.value = true;
};
</script>
