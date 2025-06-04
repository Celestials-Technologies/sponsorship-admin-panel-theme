<template>
  <div
    class="min-h-screen bg-bgPrimary fixed top-0 left-0 w-full h-full z-[99999]"
  >
    <div class="w-full h-screen">
      <div
        class="flex items-center h-full md:justify-normal justify-center overflow-hidden px-5"
      >
        <div
          :class="props.class"
          class="p-6 w-full max-w-[480px] bg-gradient border border-[#e5e5e585] mx-auto rounded-[15.97px] yAxisScroll"
        >
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
    default: "",
  },
});
</script>
