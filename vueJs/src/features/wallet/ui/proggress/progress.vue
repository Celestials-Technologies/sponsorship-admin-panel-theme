<template>
  <div class="mt-6 flex flex-wrap 2xl:flex-nowrap items-center gap-5">
    <div
      v-for="limit in Limits"
      :key="limit.title"
      class="sm:w-[48%] xl:w-[31.333%] 2xl:w-full w-full max-w-full h-full"
    >
      <div
        class="py-6 px-3.5 border border-[#fff3] w-full max-w-full bg-sideBarBg h-full rounded-xl"
      >
        <div
          class="flex border-b border-dashed border-[#e5e5e585] pb-4 mb-4 items-center gap-3 w-full"
        >
          <p class="text-white Gilroy-semibold pt-0.5 text-xl md:text-2xl">
            {{ limit.title }}
          </p>
        </div>
        <div class="flex gap-4 items-center justify-between">
          <div>
            <p class="text-xl whitespace-nowrap text-white Gilroy-semibold">
              {{ limit.amount }} EUR
            </p>
            <div class="flex flex-col gap-1 mt-3">
              <div class="flex items-center gap-2">
                <GrowthIcon :color="limit.growthColor" />
                <p
                  :style="{ color: limit.growthColor }"
                  class="text-sm sm:text-sm md:text-base Gilroy-normal pt-0.5"
                >
                  {{ limit.value }} EUR
                </p>
              </div>
              <p class="text-sm md:text-base Gilroy-normal text-white">
                (Daily Limit)
              </p>
            </div>
          </div>
          <div>
            <svg viewBox="0 0 36 36" class="w-[70px] h-[70px] orange">
              <path
                class="circle-bg"
                d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                class="circle"
                stroke-dasharray="33.5, 100"
                d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text
                x="18"
                y="20.35"
                class="Gilroy-semibold fill-[#E9901A] circleText"
              >
                33.5%
              </text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LimitsType } from "@/features/wallet/modals/types";
import GrowthIcon from "@/shared/ui/Icons/svgs/GrowthIcon.vue";

const Limits: LimitsType[] = [
  {
    title: "Todays Expenses",
    amount: "370,00",
    value: "7.500,00",
    growthColor: "#00A385",
  },
  {
    title: "Today's Withdrawal",
    amount: "1800,00",
    value: "1000,00",
    growthColor: "#FFA51F",
  },
  {
    title: "Monthly Withdrawal",
    amount: "6510,00",
    value: "7.500,00 ",
    growthColor: "#8956ff",
  },
];
</script>
