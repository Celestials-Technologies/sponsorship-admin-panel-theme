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
import { ref, onMounted } from "vue";
import axios from "axios";
import { TitleHeader } from "@/shared/ui/TitleHeader";
import { LiquidityModal } from "@/entities/liquidity";
import AverageBalance from "./ui/AverageBalance.vue";
import CurrencyOverview from "./ui/CurrencyOverview.vue";
import TransactionHistory from "@/features/dashboard/ui/TransactionHistory/ui/TransactionHistory.vue";
import {
  DashboardData,
  AverageBalanceData,
  CurrencyOverviewData,
} from "./model/types";
const showLiquidityModal = ref(false);
const isLoading = ref(false);
const averageBalanceData = ref<AverageBalanceData[]>([]);
const currencyOverviewData = ref<CurrencyOverviewData[]>([]);
const openLiquidityModal = () => {
  showLiquidityModal.value = true;
};
onMounted(async () => {
  try {
    isLoading.value = true;
    const response = await axios.get("/balanceDetailData/data.json");
    const data = response.data;
    averageBalanceData.value = data.AverageBalanceInfo;
    currencyOverviewData.value = data.CurrencyOverview;
    console.log(data);
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
  } finally {
    isLoading.value = false;
  }
});
</script>
