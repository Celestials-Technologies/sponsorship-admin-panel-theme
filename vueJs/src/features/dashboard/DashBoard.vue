<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";
import type { DashboardData } from "@/features/dashboard/model/types";

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

const showLiquidityModal = ref(false);
const dashboardData = ref<DashboardData>({
  cryptoCards: [],
  stakingRewards: [],
  subscriptions: [],
  balanceData: {
    total: "",
    percentage: 0,
    income: "",
    expenses: "",
  },
});
const isLoading = ref(true);

onMounted(async () => {
  try {
    isLoading.value = true;
    const response = await axios.get("dashboardData/data.json");
    dashboardData.value = response.data;
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
  } finally {
    isLoading.value = false;
  }
});

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
    <div v-if="isLoading" class="text-white">Loading...</div>
    <div
      v-else
      class="flex flex-wrap 2xl:flex-nowrap items-center gap-y-5 relative"
      id="blockZindex"
      style="z-index: 9999"
    >
      <template v-for="card in dashboardData.cryptoCards" :key="card.symbol">
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
        <BalanceCard :balanceData="dashboardData.balanceData" />
        <StakingRewards :stakingRewards="dashboardData.stakingRewards" />
        <SubscriptionsCard :subscriptions="dashboardData.subscriptions" />
      </div>
    </div>

    <LiquidityModal
      v-if="showLiquidityModal"
      @close="showLiquidityModal = false"
    />
  </div>
</template>
