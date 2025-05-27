<template>
  <div class="border border-white bg-sideBarBg p-6 rounded-xl">
    <div
      class="border-b border-dashed border-white pb-6 mb-6 flex gap-1 justify-between items-center"
    >
      <h4 class="text-xl md:text-2xl text-white Gilroy-semibold">
        Staking rewards
      </h4>
      <button type="button" onclick="rewardsRefresh()">
        <RefreshButton />
      </button>
    </div>
    <div class="flex flex-col gap-6">
      <div
        v-for="reward in stakingRewards"
        :key="reward.name"
        class="border-b border-dashed border-white pb-6 flex gap-5"
      >
        <img :src="reward.icon" :alt="reward.name" class="w-8 h-8" />
        <div class="flex flex-col w-full gap-2">
          <div class="flex items-center gap-1 justify-between">
            <h5 class="text-[18px] md:text-xl text-white Gilroy-medium">
              Staked {{ reward.name }}
            </h5>
            <h5 class="text-[18px] md:text-xl text-white Gilroy-medium">
              {{ reward.amount }} {{ reward.name }}
            </h5>
          </div>
          <div
            class="flex gap-3 items-center rewardsPercentAnimation bounce-up"
          >
            <p id="rewardsValue" class="text-base text-white">
              {{ reward.percentage }}%
            </p>
            <div class="w-full h-[5px] rounded-[5px] bg-[#dfe0e4]">
              <div
                id="rewardsPercent"
                class="h-full rounded-[5px] bg-btnSecondary subject"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import RefreshButton from "@/shared/ui/Icons/svgs/dashboardSvgs/RefreshButton.vue";
import { stakingRewards } from "@/features/dashboard/model/dashboardData";
</script>
