<template>
  <div class="border border-white bg-sideBarBg p-6 rounded-xl">
    <div class="flex items-center justify-between">
      <p class="text-base text-white Gilroy-medium">Balance</p>
      <div class="flex items-center gap-1">
        <ArrowUpTrend color="#8957ff" />
        <p class="text-base text-[#8957ff] Gilroy-normal pt-0.5">
          {{ balanceData.percentage }}%
        </p>
      </div>
    </div>
    <h3 class="mt-4 mb-10 text-2xl md:text-[32px] text-white Gilroy-semibold">
      {{ balanceData.total }}
    </h3>
    <div class="flex justify-between items-center gap-6">
      <div class="flex flex-col gap-4">
        <div class="flex gap-1 items-center">
          <ArrowBottom />
          <p class="pt-0.5 text-white text-base Gilroy-normal">Income</p>
        </div>
        <p class="text-base Gilroy-medium text-white">
          {{ balanceData.income }}
        </p>
      </div>
      <div class="flex flex-col gap-4">
        <div class="flex gap-1 items-center">
          <ExpenceArrowTop />
          <p class="pt-0.5 text-white text-base Gilroy-normal">Expenses</p>
        </div>
        <p class="text-base Gilroy-medium text-white">
          {{ balanceData.expenses }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { balanceData } from "@/store/dashboardData";
</script>
