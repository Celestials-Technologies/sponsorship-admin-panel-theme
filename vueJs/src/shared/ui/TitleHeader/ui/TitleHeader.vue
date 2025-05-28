<template>
  <div class="flex flex-wrap gap-3 items-center justify-between mb-5">
    <p class="text-3xl lg:text-[40px] text-white Gilroy-semibold">
      {{ title }}
    </p>
    <div class="flex items-center gap-3" id="buttonHeader">
      <slot name="actions"></slot>
    </div>
    <div v-if="isButton" class="flex items-center gap-3" id="buttonHeader">
      <button
        type="button"
        class="bg-btnSecondary px-5 py-2 md:px-8 md:py-4 text-base text-white rounded-lg flex items-center justify-center gap-2 Gilroy-semibold"
        @click="emit('click-button')"
      >
        <svg
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p class="pt-0.5">Liquidity</p>
      </button>
      <a href="./pro-plan.html">
        <button
          type="button"
          class="bg-btnSecondary py-2 pt-2.5 px-[18px] md:px-8 md:py-4 md:pt-[18px] text-base text-white rounded-lg flex items-center justify-center Gilroy-semibold"
        >
          Trade
        </button>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
/* eslint-disable */
import { defineProps, defineEmits } from "vue";

interface TitleHeaderProps {
  title: string;
  isButton?: boolean;
}

const props = defineProps<TitleHeaderProps>();

const emit = defineEmits<{
  (e: "click-button"): void;
}>();
</script>
