<script setup lang="ts">
import { TitleHeader } from "@/shared/ui/TitleHeader";
import {
  CryptoCard,
  BalanceCard,
  EarningsCard,
  StakingRewards,
  AddMoreCard,
  TransactionHistory,
  SubscriptionsCard,
} from "@/features/dashboard/ui";

import { LiquidityModal } from "@/entities/liquidity";

import { ref } from "vue";
import { cryptoCards } from "@/features/dashboard/model/dashboardData";

const showLiquidityModal = ref(false);

const openLiquidityModal = () => {
  showLiquidityModal.value = true;
};
</script>
<template>
  <div>
    <TitleHeader
      title="Dashboard"
      :isButton="true"
      @click-button="openLiquidityModal"
    />
    <div
      class="flex flex-wrap 2xl:flex-nowrap items-center gap-y-5 relative"
      id="blockZindex"
      style="z-index: 9999"
    >
      <template v-for="card in cryptoCards" :key="card.symbol">
        <div
          class="sm:w-3/6 xl:w-[31.333%] 2xl:w-full w-full max-w-full sm:px-2.5 h-full max-h-full"
        >
          <CryptoCard
            :icon="card.icon"
            :name="card.name"
            :symbol="card.symbol"
            :amount="card.amount"
            :currency="card.currency"
            :trend="card.trend"
            :percentage="card.percentage"
            :trendColor="card.trendColor"
            :chartId="card.chartId"
          />
        </div>
      </template>
      <AddMoreCard />
    </div>

    <div class="flex flex-wrap xl:flex-nowrap">
      <div class="w-full xl:w-[70%] xl:px-2.5">
        <EarningsCard />
        <TransactionHistory />
      </div>
      <div class="w-full xl:w-[30%] px-0 xl:px-2.5 flex flex-col gap-6 mt-6">
        <BalanceCard />
        <StakingRewards />
        <SubscriptionsCard />
      </div>
    </div>

    <LiquidityModal
      v-if="showLiquidityModal"
      @close="showLiquidityModal = false"
    />
  </div>
</template>
