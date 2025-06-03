<template>
  <div
    class="md:p-6 p-4 border border-[#e5e5e585] rounded-[15px] bg-gradient w-full xl:w-1/2"
  >
    <Header title="Average Balance" />

    <div
      class="grid sm:grid-cols-2 grid-cols-1 gap-3 items-center justify-between gap-5"
    >
      <div
        v-for="item in AverageBalanceInfo"
        :key="item.title"
        class="p-4 md:p-6 border border-[#fff3] w-full max-w-full bg-sideBarBg h-full rounded-xl"
      >
        <Typography
          color="white"
          variant="h3"
          class="w-full border-b border-dashed border-[#e5e5e585] md:pb-6 md:mb-6 pb-5 mb-5 text-base md:text-lg text-white Gilroy-medium"
        >
          {{ item.title }}
        </Typography>
        <div>
          <Typography color="white" variant="h3" class="text-start">
            {{ item.balance }}
          </Typography>
          <div class="flex items-center gap-1 mt-3">
            <GrowthIcon :color="item.growthColor" />
            <Typography :color="item.growthColor" variant="p">
              {{ item.growth }}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "./header/Header.vue";
import GrowthIcon from "@/shared/ui/Icons/svgs/GrowthIcon.vue";
import Typography from "@/shared/ui/typography/Typography.vue";

const AverageBalanceInfo = [
  {
    title: "Estimated Balance",
    balance: "$124,326",
    growth: "$124,326",
    icon: "GrowthIcon",
    growthColor: "#8956ff",
  },
  {
    title: "Spot balance",
    balance: "0.261 BTC",
    growth: "$124,326",
    icon: "GrowthIcon",
    growthColor: "#8956ff",
  },
  {
    title: "Fiat balance",
    balance: "0.261 BTC",
    growth: "$124,326",
    icon: "GrowthIcon",
    growthColor: "#ff5656",
  },
  {
    title: "Today's PNL",
    balance: "+$12,007",
    growth: "$124,326",
    icon: "GrowthIcon",
    growthColor: "#ff5656",
  },
];
</script>
