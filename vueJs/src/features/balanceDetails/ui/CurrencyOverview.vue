<template>
  <div
    class="md:p-6 p-4 border border-[#e5e5e585] rounded-[15px] bg-gradient w-full xl:w-1/2"
  >
    <Header title="Currency Overview" />
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
</template>
<script setup lang="ts">
import Header from "./header/Header.vue";
</script>
