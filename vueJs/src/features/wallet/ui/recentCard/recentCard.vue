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
              class="py-4 px-6 whitespace-nowrap text-commonOrange text-base md:text-lg Gilroy-semibold text-left bg-[#ffffff1a] rounded-l-[17.84px]"
            >
              Title
            </th>

            <th
              class="py-4 px-6 whitespace-nowrap text-commonOrange text-base md:text-lg Gilroy-semibold text-left bg-[#ffffff1a] rounded-r-[17.84px]"
            >
              Transaction
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in props.recentTransaction" :key="item.title">
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
                    {{ item.title }}
                  </p>
                  <p class="text-sm Gilroy-normal text-white">
                    {{ item.status }} - {{ item.time }}
                  </p>
                </div>
              </div>
            </td>
            <td class="flex flex-col gap-1 py-2.5 px-6 whitespace-nowrap">
              <p class="text-base md:text-lg text-white Gilroy-medium">
                {{ item.transaction }}
              </p>
              <p class="text-sm text-white Gilroy-normal">
                {{ item.addition }}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <a href="#" class="flex items-center mt-6 gap-2">
      <p class="text-sm md:text-base text-commonOrange Gilroy-medium">
        See All
      </p>
      <Icon icon="heroicons:arrow-right" width="20" height="20" />
    </a>
  </div>
</template>
<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { RecentTransactionType } from "@/features/wallet/model/types";
const props = defineProps<{
  recentTransaction: RecentTransactionType[];
}>();
</script>
