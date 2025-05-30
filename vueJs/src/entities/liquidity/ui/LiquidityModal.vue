<template>
  <div
    class="w-full h-screen absolute top-0 left-0 bg-[#00000080] text-white z-[99999] flex justify-center items-center py-6"
    id="liquidityModal"
    style="transition: all 0.5s ease"
  >
    <div
      id="liquidityData"
      class="w-[90%] max-w-[500px] mx-auto p-6 border border-solid border-white bg-bgPrimary rounded-lg h-auto max-h-[95%] overflow-auto scrollHidden"
    >
      <div
        class="border-b border-dashed border-white lg:pb-6 pb-5 mb-5 flex items-center justify-between"
      >
        <h2
          class="text-xl lg:text-2xl leading-normal text-white Gilroy-extrabold"
        >
          Deposit Liquidity
        </h2>
        <button
          type="button"
          @click="$emit('close')"
          class="w-6 h-6 transition-all"
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div
        class="relative border-b border-dashed border-white lg:pb-6 pb-5 flex flex-col gap-5"
      >
        <div
          class="border border-solid border-white p-4 lg:p-6 xl:p-8 rounded-lg"
        >
          <div
            class="flex mb-6 pb-6 justify-between items-center border-b border-solid border-white"
          >
            <p class="text-sm text-white text-white Gilroy-normal">From</p>
            <p class="text-sm text-white text-white Gilroy-normal">
              Balance: 10,000 ADA
            </p>
          </div>
          <div class="flex items-center justify-between">
            <input
              type="number"
              id="liquidityADAInput"
              class="text-sm text-white bg-transparent text-white Gilroy-normal w-[70%] outline-none"
              placeholder="0.00"
            />
            <Dropdown v-model="fromCurrency" :options="currencyOptions" />
          </div>
        </div>
        <div
          class="border border-solid border-white p-4 lg:p-6 xl:p-8 rounded-lg"
        >
          <div
            class="flex mb-6 pb-6 justify-between items-center border-b border-solid border-white"
          >
            <p class="text-sm text-white text-white Gilroy-normal">To</p>
            <p class="text-sm text-white text-white Gilroy-normal">
              Balance: 10,000 BTC
            </p>
          </div>
          <div class="flex items-center justify-between">
            <input
              type="number"
              id="liquidityBTCInput"
              class="text-sm text-white bg-transparent text-white Gilroy-normal w-[70%] outline-none"
              placeholder="0.00"
            />
            <Dropdown v-model="toCurrency" :options="currencyOptions" />
          </div>
        </div>
        <button
          type="button"
          id="liquidityConverterBtn"
          onclick="liquidityConverter()"
          class="p-1 flex gap-0 items-center bg-[#E9901A] w-fit rounded-lg absolute top-[43%] left-[41%] mx-auto transition-all"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4V20M12 20L18 14M12 20L6 14"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 20V4M12 4L6 10M12 4L18 10"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <h2 class="text-lg text-white Gilroy-normal my-5">Slippage Tolerance</h2>
      <div
        class="border border-solid border-white p-1 pr-6 flex gap-5 rounded-lg"
      >
        <div
          class="bg-[#E9901A] w-7 h-7 flex items-center justify-center text-base text-white rounded-lg"
        >
          %
        </div>
        <input
          id="liquidityInputValue"
          type="number"
          class="bg-transparent text-sm text-white Gilroy-normal outline-none w-[80%]"
          placeholder="0.00"
          min="0"
          max="100"
        />
      </div>
      <p
        id="liquidityErrorField"
        class="text-sm mt-0.5 text-[#ff2323]"
        style="display: none"
      >
        Enter the amount (1 to 100)
      </p>
      <div
        class="flex flex-wrap items-center justify-between flex-wrap gap-3 mt-5"
      >
        <button
          type="button"
          onclick="halfPercentBtn()"
          id="halfPercentButton"
          class="py-3 px-6 border border-solid border-[#E9901A] rounded-lg hover:bg-[#E9901A] text-[#E9901A] hover:text-white transition-all w-[30%]"
        >
          0.5%
        </button>
        <button
          type="button"
          onclick="onePercentBtn()"
          id="onePercentButton"
          class="py-3 px-6 border border-solid border-[#E9901A] rounded-lg hover:bg-transparent hover:text-[#E9901A] text-[#E9901A] transition-all w-[30%]"
        >
          1%
        </button>
        <button
          type="button"
          onclick="threePercentBtn()"
          id="threePercentButton"
          class="py-3 px-6 border border-solid border-[#E9901A] rounded-lg hover:bg-[#E9901A] text-[#E9901A] hover:text-white transition-all w-[30%]"
        >
          3%
        </button>
      </div>
      <button
        type="button"
        onclick="provideLiquidityBtn()"
        class="px-6 py-3 w-full mt-5 text-base text-white Gilroy-medium text-center rounded-lg hover:bg-transparent bg-[#E9901A] border border-solid border-[#E9901A]"
      >
        Provide liquidity
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
/* eslint-disable */
import { ref, defineEmits } from "vue";
import Dropdown from "@/shared/ui/dropdown/Dropdown.vue";

const fromCurrency = ref({
  label: "ADA",
  value: "ada",
  icon: "images/cardano_mid.png",
});

const toCurrency = ref({
  label: "BTC",
  value: "btc",
  icon: "images/bitcoin_mid.png",
});

const currencyOptions = [
  {
    label: "ADA",
    value: "ada",
    icon: "images/cardano_mid.png",
  },
  {
    label: "BTC",
    value: "btc",
    icon: "images/bitcoin_mid.png",
  },
  {
    label: "ETH",
    value: "eth",
    icon: "images/ethereum.png",
  },
];

defineEmits<{
  (e: "close"): void;
}>();
</script>
