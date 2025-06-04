<template>
  <div
    class="md:p-6 p-4 border border-[#e5e5e585] rounded-[15px] bg-gradient w-full xl:w-1/2"
  >
    <Header title="Average Balance" />

    <div
      class="flex flex-wrap sm:flex-nowrap gap-3 items-center justify-between gap-5"
    >
      <div
        class="p-4 md:p-6 border border-[#fff3] w-full sm:w-1/2 max-w-full bg-sideBarBg h-full rounded-xl"
      >
        <Typography
          color="white"
          variant="h3"
          class="w-full border-b border-dashed border-[#e5e5e585] md:pb-6 md:mb-6 pb-5 mb-5 text-base md:text-lg text-white Gilroy-medium"
        >
          Estimated Balance
        </Typography>

        <div
          class="flex flex-wrap xl:flex-nowrap gap-3 justify-between items-center"
        >
          <div>
            <Typography color="white" variant="h3"> $124,326 </Typography>
            <div class="flex items-center gap-1 mt-3">
              <GrowthIcon color="#8956ff" />
              <Typography color="#8956ff" variant="p"> $124,326 </Typography>
            </div>
          </div>
          <div class="w-[98px] h-[98px] lg:w-[71px] lg:h-[99px]">
            <canvas id="estimatedBalance" width="100%" height="100%"></canvas>
          </div>
        </div>
      </div>

      <div
        class="p-4 md:p-6 border border-[#fff3] w-full sm:w-1/2 max-w-full bg-sideBarBg h-full rounded-xl"
      >
        <Typography
          class="w-full border-b border-dashed border-[#e5e5e585] md:pb-6 md:mb-6 pb-5 mb-5 text-base md:text-lg text-white Gilroy-medium"
          color="white"
          variant="h3"
        >
          Spot balance
        </Typography>

        <div
          class="flex flex-wrap xl:flex-nowrap gap-3 justify-between items-center"
        >
          <div>
            <Typography color="white" variant="h3"> 0.261 BTC</Typography>

            <div class="flex items-center gap-1 mt-3">
              <GrowthIcon color="#bd7b00" />
              <Typography color="#bd7b00" variant="p"> $124,326</Typography>
            </div>
          </div>
          <div class="w-[98px] h-[98px] lg:w-[71px] lg:h-[99px]">
            <canvas id="spotBalance" width="100%" height="100%"></canvas>
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex flex-wrap sm:flex-nowrap gap-3 items-center justify-between gap-5 mt-5"
    >
      <div
        class="p-4 md:p-6 border border-[#fff3] w-full sm:w-1/2 max-w-full bg-sideBarBg h-full rounded-xl"
      >
        <Typography
          class="w-full border-b border-dashed border-[#e5e5e585] md:pb-6 md:mb-6 pb-5 mb-5 text-base md:text-lg text-white Gilroy-medium"
          color="white"
          variant="h3"
        >
          Fiat balance
        </Typography>

        <div
          class="flex flex-wrap xl:flex-nowrap gap-3 justify-between items-center"
        >
          <div>
            <Typography color="white" variant="h3"> 0.261 BTC </Typography>
            <div class="flex items-center gap-1 mt-3">
              <GrowthIcon color="#00a385" />
              <Typography color="#00a385" variant="p"> $124,326 </Typography>
            </div>
          </div>
          <div class="w-[98px] h-[98px] lg:w-[71px] lg:h-[99px]">
            <canvas id="fiatBalance" width="100%" height="100%"></canvas>
          </div>
        </div>
      </div>

      <div
        class="p-4 md:p-6 border border-[#fff3] w-full sm:w-1/2 max-w-full bg-sideBarBg h-full rounded-xl"
      >
        <Typography
          color="white"
          variant="h3"
          class="w-full border-b border-dashed border-[#e5e5e585] md:pb-6 md:mb-6 pb-5 mb-5 text-base md:text-lg text-white Gilroy-medium"
        >
          Today's PNL
        </Typography>

        <div
          class="flex flex-wrap xl:flex-nowrap gap-3 justify-between items-center"
        >
          <div>
            <Typography color="white" variant="h3"> +$12,007 </Typography>
            <div class="flex items-center gap-1 mt-3">
              <GrowthIcon color="#00a385" />
              <Typography color="#00a385" variant="p"> $124,326 </Typography>
            </div>
          </div>
          <div class="w-[98px] h-[98px] lg:w-[71px] lg:h-[99px]">
            <canvas id="todaysPNL" width="100%" height="100%"></canvas>
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
</script>
