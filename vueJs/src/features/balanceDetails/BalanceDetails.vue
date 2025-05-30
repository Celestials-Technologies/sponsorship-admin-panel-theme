<script setup lang="ts">
import { ref } from "vue";

import { TitleHeader } from "@/shared/ui/TitleHeader";
import { LiquidityModal } from "@/entities/liquidity";

const showLiquidityModal = ref(false);

const openLiquidityModal = () => {
  showLiquidityModal.value = true;
};
</script>

<template>
  <div>
    <TitleHeader
      title="Balance Details"
      :isButton="true"
      @click-button="openLiquidityModal"
    />

    <div
      class="flex flex-wrap xl:flex-nowrap gap-y-6 gap-x-5 relative"
      id="blockZindex"
      style="z-index: 9999"
    >
      <div
        class="md:p-6 p-4 border border-[#e5e5e585] rounded-[15px] bg-gradient w-full xl:w-1/2"
      >
        <div
          class="flex border-b border-dashed border-[#e5e5e585] pb-4 mb-4 items-center gap-3 justify-between"
        >
          <h2 class="text-white Gilroy-semibold pt-0.5 text-xl md:text-2xl">
            Average Balance
          </h2>
          <div class="relative">
            <button
              type="button"
              style="min-width: auto"
              onclick="detailsBtn(this)"
              class="chooseOption"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="cursor-pointer"
              >
                <path
                  d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <div
              class="absolute top-3 right-[27px] min-w-[140px] bg-bgPrimary rounded-lg text-sm md:text-base text-white Gilroy-normal p-3 grid"
              id="detailDropDown"
              style="
                opacity: 0;
                margin-top: -50px;
                z-index: 0;
                transition: all 0.5s ease;
              "
            >
              <a
                href="#"
                class="px-5 py-2 rounded-lg hover:bg-[#0f0f7ac7] transition-all"
              >
                Print
              </a>
              <a
                href="#"
                class="px-5 py-2 rounded-lg hover:bg-[#0f0f7ac7] transition-all"
              >
                Remove
              </a>
              <a
                href="#"
                class="px-5 py-2 rounded-lg hover:bg-[#0f0f7ac7] transition-all"
              >
                Download
              </a>
            </div>
          </div>
        </div>
        <div
          class="flex flex-wrap sm:flex-nowrap gap-3 items-center justify-between gap-5"
        >
          <div
            class="p-4 md:p-6 border border-[#fff3] w-full sm:w-1/2 max-w-full bg-sideBarBg h-full rounded-xl"
          >
            <h4
              class="w-full border-b border-dashed border-[#e5e5e585] md:pb-6 md:mb-6 pb-5 mb-5 text-base md:text-lg text-white Gilroy-medium"
            >
              Estimated Balance
            </h4>

            <div
              class="flex flex-wrap xl:flex-nowrap gap-3 justify-between items-center"
            >
              <div>
                <h3 class="text-xl md:text-2xl text-white Gilroy-semibold">
                  12.26 BTC
                </h3>
                <div class="flex items-center gap-1 mt-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 18L18 6M18 6H10M18 6V14"
                      stroke="#8956ff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p class="text-sm md:text-base Gilroy-normal text-[#8956ff]">
                    $124,326
                  </p>
                </div>
              </div>
              <div class="w-[98px] h-[98px] lg:w-[71px] lg:h-[99px]">
                <canvas
                  id="estimatedBalance"
                  width="100%"
                  height="100%"
                ></canvas>
              </div>
            </div>
          </div>

          <div
            class="p-4 md:p-6 border border-[#fff3] w-full sm:w-1/2 max-w-full bg-sideBarBg h-full rounded-xl"
          >
            <h4
              class="w-full border-b border-dashed border-[#e5e5e585] md:pb-6 md:mb-6 pb-5 mb-5 text-base md:text-lg text-white Gilroy-medium"
            >
              Spot balance
            </h4>

            <div
              class="flex flex-wrap xl:flex-nowrap gap-3 justify-between items-center"
            >
              <div>
                <h3 class="text-xl md:text-2xl text-white Gilroy-semibold">
                  0.261 BTC
                </h3>
                <div class="flex items-center gap-1 mt-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 18L18 6M18 6H10M18 6V14"
                      stroke="#bd7b00"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p class="text-sm md:text-base Gilroy-normal text-[#bd7b00]">
                    $124,326
                  </p>
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
            <h4
              class="w-full border-b border-dashed border-[#e5e5e585] md:pb-6 md:mb-6 pb-5 mb-5 text-base md:text-lg text-white Gilroy-medium"
            >
              Fiat balance
            </h4>

            <div
              class="flex flex-wrap xl:flex-nowrap gap-3 justify-between items-center"
            >
              <div>
                <h3 class="text-xl md:text-2xl text-white Gilroy-semibold">
                  0.261 BTC
                </h3>
                <div class="flex items-center gap-1 mt-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 18L18 6M18 6H10M18 6V14"
                      stroke="#bd7b00"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p class="text-sm md:text-base Gilroy-normal text-[#bd7b00]">
                    $124,326
                  </p>
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
            <h4
              class="w-full border-b border-dashed border-[#e5e5e585] md:pb-6 md:mb-6 pb-5 mb-5 text-base md:text-lg text-white Gilroy-medium"
            >
              Today's PNL
            </h4>

            <div
              class="flex flex-wrap xl:flex-nowrap gap-3 justify-between items-center"
            >
              <div>
                <h3 class="text-xl md:text-2xl text-white Gilroy-semibold">
                  +$12,007
                </h3>
                <div class="flex items-center gap-1 mt-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 18L18 6M18 6H10M18 6V14"
                      stroke="#00a385"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p class="text-sm md:text-base Gilroy-normal text-[#00a385]">
                    $124,326
                  </p>
                </div>
              </div>
              <div class="w-[98px] h-[98px] lg:w-[71px] lg:h-[99px]">
                <canvas id="todaysPNL" width="100%" height="100%"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="md:p-6 p-4 border border-[#e5e5e585] rounded-[15px] bg-gradient w-full xl:w-1/2"
      >
        <div
          class="flex border-b border-dashed border-[#e5e5e585] pb-4 mb-4 items-center gap-3 justify-between"
        >
          <h2 class="text-white Gilroy-semibold pt-0.5 text-xl md:text-2xl">
            Currency Overview
          </h2>
          <div class="relative">
            <button
              type="button"
              style="min-width: auto"
              onclick="detailsBtn(this)"
              class="chooseOption"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="cursor-pointer"
              >
                <path
                  d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <div
              class="absolute top-3 right-[27px] min-w-[140px] bg-bgPrimary rounded-lg text-sm md:text-base text-white Gilroy-normal p-3 grid"
              id="detailDropDown"
              style="
                opacity: 0;
                margin-top: -50px;
                z-index: 0;
                transition: all 0.5s ease;
              "
            >
              <a
                href="#"
                class="px-5 py-2 rounded-lg hover:bg-[#0f0f7ac7] transition-all"
              >
                Print
              </a>
              <a
                href="#"
                class="px-5 py-2 rounded-lg hover:bg-[#0f0f7ac7] transition-all"
              >
                Remove
              </a>
              <a
                href="#"
                class="px-5 py-2 rounded-lg hover:bg-[#0f0f7ac7] transition-all"
              >
                Download
              </a>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap sm:flex-nowrap gap-y-6 gap-x-5 items-center">
          <div
            class="lg:p-6 p-4 border border-[#fff3] w-full sm:w-1/2 max-w-full bg-sideBarBg h-full rounded-xl"
          >
            <div class="flex gap-3 sm:gap-4 items-center">
              <!-- <img src="./src/images/bit_xxl.png" alt="BitCoin" /> -->
              <div class="flex flex-col gap-3">
                <h4 class="text-sm md:text-base Gilroy-medium text-white">
                  BTC-USD
                </h4>
                <h3 class="text-xl md:text-2xl Gilroy-semibold text-white">
                  $23,000
                </h3>
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
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 7L14.1314 14.8686C13.7354 15.2646 13.5373 15.4627 13.309 15.5368C13.1082 15.6021 12.8918 15.6021 12.691 15.5368C12.4627 15.4627 12.2646 15.2646 11.8686 14.8686L9.13137 12.1314C8.73535 11.7354 8.53735 11.5373 8.30902 11.4632C8.10817 11.3979 7.89183 11.3979 7.69098 11.4632C7.46265 11.5373 7.26465 11.7354 6.86863 12.1314L2 17M22 7H15M22 7V14"
                    stroke="#8956ff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <p class="text-sm md:text-base text-[#8956ff] Gilroy-normal">
                  +2,4%
                </p>
              </div>
              <p class="text-sm md:text-base Gilroy-normal text-white">
                Since last mounth
              </p>
            </div>
          </div>
          <div
            class="lg:p-6 p-4 border border-[#fff3] w-full sm:w-1/2 max-w-full bg-sideBarBg h-full rounded-xl"
          >
            <div class="flex gap-3 sm:gap-4 items-center">
              <!-- <img src="./src/images/car_xxl.png" alt="Cardano" /> -->
              <div class="flex flex-col gap-3">
                <h4 class="text-sm md:text-base Gilroy-medium text-white">
                  ADA-USD
                </h4>
                <h3 class="text-xl md:text-2xl Gilroy-semibold text-white">
                  $7,500
                </h3>
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
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 7L14.1314 14.8686C13.7354 15.2646 13.5373 15.4627 13.309 15.5368C13.1082 15.6021 12.8918 15.6021 12.691 15.5368C12.4627 15.4627 12.2646 15.2646 11.8686 14.8686L9.13137 12.1314C8.73535 11.7354 8.53735 11.5373 8.30902 11.4632C8.10817 11.3979 7.89183 11.3979 7.69098 11.4632C7.46265 11.5373 7.26465 11.7354 6.86863 12.1314L2 17M22 7H15M22 7V14"
                    stroke="#ff6161"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <p class="text-sm md:text-base text-[#ff6161] Gilroy-normal">
                  -1,2%
                </p>
              </div>
              <p class="text-sm md:text-base Gilroy-normal text-white">
                Since last mounth
              </p>
            </div>
          </div>
        </div>
        <div
          class="flex flex-wrap sm:flex-nowrap gap-y-6 gap-x-5 mt-6 sm:mt-5 items-center"
        >
          <div
            class="lg:p-6 p-4 border border-[#fff3] w-full sm:w-1/2 max-w-full bg-sideBarBg h-full rounded-xl"
          >
            <div class="flex gap-3 sm:gap-4 items-center">
              <!-- <img src="./src/images/usd_xxl.png" alt="USD" /> -->
              <div class="flex flex-col gap-3">
                <h4 class="text-sm md:text-base Gilroy-medium text-white">
                  BTC-USD
                </h4>
                <h3 class="text-xl md:text-2xl Gilroy-semibold text-white">
                  $23,000
                </h3>
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
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 7L14.1314 14.8686C13.7354 15.2646 13.5373 15.4627 13.309 15.5368C13.1082 15.6021 12.8918 15.6021 12.691 15.5368C12.4627 15.4627 12.2646 15.2646 11.8686 14.8686L9.13137 12.1314C8.73535 11.7354 8.53735 11.5373 8.30902 11.4632C8.10817 11.3979 7.89183 11.3979 7.69098 11.4632C7.46265 11.5373 7.26465 11.7354 6.86863 12.1314L2 17M22 7H15M22 7V14"
                    stroke="#ff6161"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <p class="text-sm md:text-base text-[#ff6161] Gilroy-normal">
                  -0,3%
                </p>
              </div>
              <p class="text-sm md:text-base Gilroy-normal text-white">
                Since last mounth
              </p>
            </div>
          </div>
          <div
            class="lg:p-6 p-4 border border-[#fff3] w-full sm:w-1/2 max-w-full bg-sideBarBg h-full rounded-xl"
          >
            <div class="flex gap-3 sm:gap-4 items-center">
              <!-- <img src="./src/images/ele_xxl.png" alt="ETN" /> -->
              <div class="flex flex-col gap-3">
                <h4 class="text-sm md:text-base Gilroy-medium text-white">
                  ETN-USD
                </h4>
                <h3 class="text-xl md:text-2xl Gilroy-semibold text-white">
                  $7,500
                </h3>
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
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 7L14.1314 14.8686C13.7354 15.2646 13.5373 15.4627 13.309 15.5368C13.1082 15.6021 12.8918 15.6021 12.691 15.5368C12.4627 15.4627 12.2646 15.2646 11.8686 14.8686L9.13137 12.1314C8.73535 11.7354 8.53735 11.5373 8.30902 11.4632C8.10817 11.3979 7.89183 11.3979 7.69098 11.4632C7.46265 11.5373 7.26465 11.7354 6.86863 12.1314L2 17M22 7H15M22 7V14"
                    stroke="#00a385"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <p class="text-sm md:text-base text-[#00a385] Gilroy-normal">
                  +2,4%
                </p>
              </div>
              <p class="text-sm md:text-base Gilroy-normal text-white">
                Since last mounth
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <LiquidityModal
      v-if="showLiquidityModal"
      @close="showLiquidityModal = false"
    />
  </div>
</template>
