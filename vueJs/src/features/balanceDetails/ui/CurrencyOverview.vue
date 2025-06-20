<template>
  <div
    class="md:p-6 p-4 border border-[#e5e5e585] rounded-[15px] bg-gradient w-full xl:w-1/2"
  >
    <Header title="Currency Overview" />
    <div class="grid sm:grid-cols-2 grid-cols-1 gap-y-6 gap-x-5 items-center">
      <div
        class="lg:p-6 p-4 border border-[#fff3] w-full max-w-full bg-sideBarBg h-full rounded-xl"
        v-for="item in currency"
        :key="item.id"
      >
        <div class="flex gap-3 sm:gap-4 items-center">
          <img :src="item.icon" alt="BitCoin" />
          <div class="flex flex-col gap-3">
            <Typography
              class="text-sm md:text-base Gilroy-medium text-white"
              variant="h4"
              color="white"
            >
              {{ item.name }}
            </Typography>
            <Typography
              class="text-xl md:text-2xl Gilroy-semibold text-white"
              variant="h3"
              color="white"
            >
              {{ item.price }}
            </Typography>
          </div>
        </div>
        <div class="md:mt-7 mt-6">
          <div
            class="w-full h-[5px] rounded-[5px] bg-[#dfe0e4] rewardsPercentAnimation bounce-up"
          >
            <div class="subject h-full rounded-[5px] bg-btnSecondary"></div>
          </div>
        </div>
        <div class="flex flex-wrap gap-3 mt-4">
          <div class="flex flex-wrap gap-1">
            <GrowthIcon :color="'#8956ff'" />
            <p class="text-sm md:text-base text-[#8956ff] Gilroy-normal">
              {{ item.growth }}
            </p>
          </div>
          <p class="text-sm md:text-base Gilroy-normal text-white">
            Since last mounth
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "./header/Header.vue";
import GrowthIcon from "@/shared/ui/Icons/svgs/GrowthIcon.vue";

const currency = [
  {
    id: 1,
    icon: "images/bit_xxl.png",
    name: "BTC-USD",
    price: "$23,000",
    growth: "+2,4%",
  },
  {
    id: 2,
    icon: "images/car_xxl.png",
    name: "ADA-USD",
    price: "$7,500",
    growth: "-1,2%",
  },
  {
    id: 3,
    icon: "images/usd_xxl.png",
    name: "BTC-USD",
    price: "$23,000",
    growth: "+2,4%",
  },
  {
    id: 4,
    icon: "images/ele_xxl.png",
    name: "ETN-USD",
    price: "$7,500",
    growth: "+2,4%",
  },
];
</script>
