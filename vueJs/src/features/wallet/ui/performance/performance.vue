<template>
  <div class="w-full xl:w-[66.66%]">
    <div
      class="p-4 md:pt-6 md:pr-[31px] md:pb-[22px] md:pl-[26px] border border-[#e5e5e585] rounded-[15px] bg-gradient xAxisScroll"
    >
      <div
        class="border-b border-dashed pb-6 mb-2 border-[#e5e5e585] flex flex-wrap gap-3 items-center justify-between"
      >
        <p class="text-xl md:text-[26px] text-white Gilroy-semibold">
          Performance
        </p>
        <div class="flex items-center gap-2">
          <p class="text-sm Gilroy-normal text-white">Sort By</p>

          <div class="relative">
            <button
              type="button"
              onclick="selectDays(this)"
              class="px-2 py-1 flex items-center gap-3 justify-between cursor-pointer selectDaysBox rounded-lg border border-solid border-[#e5e5e585] bg-transparent p-1 text-xs text-white pt-1.5 rounded-lg Gilroy-normal"
            >
              <p class="text-sm text-white Gilroy-normal" id="performancetext">
                Last 15 days
              </p>
              <div class="w-4 h-4">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  id="daysIcon"
                  style="rotate: 0deg; transition: all 0.5s ease"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </button>
            <div
              class="absolute right-0 bg-bgPrimary rounded-lg px-2 py-1 border border-solid border-[#e5e5e585] w-[130px]"
              id="daysSelect"
              style="
                scale: 0;
                margin-top: -50px;
                z-index: 0;
                transition: all 0.2s ease;
              "
            >
              <button
                type="button"
                class="text-sm md:text-base Gilroy-normal hover:bg-[#E9901A] p-1 text-white w-full rounded-lg flex items-center gap-3"
                onclick="performancechangeMainText('Last 15 days' , event)"
              >
                <p class="text-sm text-white Gilroy-normal">Last 15 days</p>
              </button>
              <button
                type="button"
                class="text-sm md:text-base Gilroy-normal hover:bg-[#E9901A] p-1 text-white w-full rounded-lg flex items-center gap-3"
                onclick="performancechangeMainText('Last 10 days' , event)"
              >
                <p class="text-sm text-white Gilroy-normal">Last 10 days</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="md:w-full w-[659px] md:h-full h-[263px]">
        <canvas id="myChart" width="100%" height="40%"></canvas>
      </div>
    </div>

    <UpcommingTable />
  </div>
</template>
<script setup lang="ts">
import UpcommingTable from "../UpcommingTable/table.vue";
</script>
