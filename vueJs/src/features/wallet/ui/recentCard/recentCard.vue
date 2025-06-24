<template>
  <div
    class="p-4 md:pt-6 md:pr-[31px] md:pb-[22px] md:pl-[26px] border border-[#e5e5e585] rounded-[15px] bg-gradient mt-6 lg:mt-[34px]"
  >
    <div
      class="flex border-b border-dashed border-[#e5e5e585] pb-4 mb-4 items-center gap-3 w-full"
    >
      <p class="text-white Gilroy-semibold pt-0.5 text-xl md:text-2xl">
        Recent Transaction
      </p>
    </div>
    <div class="overflow-auto tableScroll pb-2.5">
      <table class="w-full">
        <thead>
          <tr class="">
            <th
              class="py-4 px-6 whitespace-nowrap text-[#FFA51F] text-base md:text-lg Gilroy-semibold text-left bg-[#ffffff1a] rounded-l-[17.84px]"
            >
              Title
            </th>

            <th
              class="py-4 px-6 whitespace-nowrap text-[#FFA51F] text-base md:text-lg Gilroy-semibold text-left bg-[#ffffff1a] rounded-r-[17.84px]"
            >
              Transaction
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-6 py-2.5 whitespace-nowrap">
              <div class="flex items-center gap-3">
                <!-- <img
                          src="./src/images/bitcoin_mid.png"
                          alt="Bitcoin"
                          class="w-6 h-6"
                        /> -->
                <div class="flex flex-col gap-1">
                  <p
                    class="pt-0.5 text-base md:text-lg Gilroy-medium text-white"
                  >
                    Bitcoin
                  </p>
                  <p class="text-sm Gilroy-normal text-white">
                    Pending - 3 min ago
                  </p>
                </div>
              </div>
            </td>
            <td class="flex flex-col gap-1 py-2.5 px-6 whitespace-nowrap">
              <p class="text-base md:text-lg text-white Gilroy-medium">
                +0.2948 BTC
              </p>
              <p class="text-sm text-white Gilroy-normal">+$10,930.90</p>
            </td>
          </tr>
          <tr class="">
            <td
              class="px-6 py-2.5 whitespace-nowrap bg-[#ffffff1a] rounded-l-[17.84px]"
            >
              <div class="flex items-center gap-3">
                <!-- <img
                          src="./src/images/cardano_mid.png"
                          alt="cardano"
                          class="w-6 h-6"
                        /> -->
                <div class="flex flex-col gap-1">
                  <p
                    class="pt-0.5 text-base md:text-lg Gilroy-medium text-white"
                  >
                    Cardano
                  </p>
                  <p class="text-sm Gilroy-normal text-white">
                    Canceled - 3 min ago
                  </p>
                </div>
              </div>
            </td>
            <td
              class="flex flex-col gap-1 py-2.5 px-6 whitespace-nowrap bg-[#ffffff1a] rounded-r-[17.84px]"
            >
              <p class="text-base md:text-lg text-white Gilroy-medium">
                +0.8475 ADA
              </p>
              <p class="text-sm text-white Gilroy-normal">+$10,930.90</p>
            </td>
          </tr>
          <tr>
            <td class="px-6 py-2.5 whitespace-nowrap">
              <div class="flex items-center gap-3">
                <!-- <img
                          src="./src/images/bitcoin_mid.png"
                          alt="Bitcoin"
                          class="w-6 h-6"
                        /> -->
                <div class="flex flex-col gap-1">
                  <p
                    class="pt-0.5 text-base md:text-lg Gilroy-medium text-white"
                  >
                    Bitcoin
                  </p>
                  <p class="text-sm Gilroy-normal text-white">
                    Pending - 3 min ago
                  </p>
                </div>
              </div>
            </td>
            <td class="flex flex-col gap-1 py-2.5 px-6 whitespace-nowrap">
              <p class="text-base md:text-lg text-white Gilroy-medium">
                +0.2948 BTC
              </p>
              <p class="text-sm text-white Gilroy-normal">+$10,930.90</p>
            </td>
          </tr>
          <tr class="">
            <td
              class="px-6 py-2.5 whitespace-nowrap bg-[#ffffff1a] rounded-l-[17.84px]"
            >
              <div class="flex items-center gap-3">
                <!-- <img
                          src="./src/images/cardano_mid.png"
                          alt="cardano"
                          class="w-6 h-6"
                        /> -->
                <div class="flex flex-col gap-1">
                  <p
                    class="pt-0.5 text-base md:text-lg Gilroy-medium text-white"
                  >
                    Cardano
                  </p>
                  <p class="text-sm Gilroy-normal text-white">
                    Canceled - 3 min ago
                  </p>
                </div>
              </div>
            </td>
            <td
              class="flex flex-col gap-1 py-2.5 px-6 whitespace-nowrap bg-[#ffffff1a] rounded-r-[17.84px]"
            >
              <p class="text-base md:text-lg text-white Gilroy-medium">
                +0.8475 ADA
              </p>
              <p class="text-sm text-white Gilroy-normal">+$10,930.90</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <a href="#" class="flex items-center mt-6 gap-2">
      <p class="text-sm md:text-base text-[#FFA51F] Gilroy-medium">See All</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#e9901a"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
        ></path>
      </svg>
    </a>
  </div>
</template>
<script setup lang="ts"></script>
