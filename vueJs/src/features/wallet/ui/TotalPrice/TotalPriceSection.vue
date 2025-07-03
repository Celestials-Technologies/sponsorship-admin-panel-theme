<template>
  <TooltipProvider>
    <div
      class="flex items-center gap-3 lg:gap-6"
      id="blockZindex"
      style="z-index: 9999"
    >
      <p class="text-sm md:text-base Gilroy-normal text-white">Total Balance</p>

      <Tooltip>
        <TooltipTrigger as-child>
          <Button variant="none" class="p-0">
            <Icon
              icon="heroicons:information-circle"
              width="24"
              height="24"
              color="#FFA51F"
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <div class="totalToolTip">$23.000,48</div>
        </TooltipContent>
      </Tooltip>
    </div>
    <div class="mt-3 flex items-center md:gap-10 gap-8 gap-y-3 flex-wrap">
      <h3 class="text-3xl lg:text-3xl text-white Gilroy-semibold">
        $23.000,48
      </h3>
      <Button
        type="button"
        @click="topUpBtn"
        class="xl:px-8 md:px-5 px-4 xl:py-4 md:py-3 py-2 group border border-solid border-borderColor hover:bg-borderColor transition-all bg-transparent rounded-xl walletTopUp flex md:gap-3 gap-2 items-center"
      >
        <Icon
          color="#fff"
          class="border-2 border-solid border-borderColor group-hover:border-[#fff] transition-all rounded-full"
          icon="heroicons:plus-20-solid"
          width="20"
          height="20"
        />
        <p class="text-sm md:text-base Gilroy-medium text-white">Top Up</p>
      </Button>
      <Button
        href="./allCards.html"
        target="_blank"
        class="txl:px-8 md:px-5 px-4 xl:py-4 md:py-3 py-2 border border-solid border-borderColor hover:bg-borderColor transition-all bg-transparent rounded-xl text-commonOrange hover:text-white"
        >All Cards
      </Button>
    </div>
  </TooltipProvider>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/ui/tooltip";
import { Button } from "@/shared/ui/button";

const topUpBtn = () => {
  console.log("topUpBtn");
};
</script>
