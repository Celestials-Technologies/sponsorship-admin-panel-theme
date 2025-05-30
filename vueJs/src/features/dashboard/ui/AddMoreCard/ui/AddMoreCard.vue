<script setup lang="ts">
import AddButton from "@/shared/ui/Icons/svgs/dashboardSvgs/AddButton.vue";
</script>

<template>
  <div
    class="sm:w-3/6 xl:w-[31.333%] 2xl:w-full w-full max-w-full sm:px-2.5 max-h-full h-[217px]"
  >
    <div
      class="p-3 border border-translucentWhite rounded-xl w-full bg-sideBarBg flex h-full items-center"
    >
      <button
        type="button"
        class="p-[18px] w-full border border-dashed border-white rounded-lg cursor-pointer h-full"
      >
        <AddButton />
        <p
          class="mb-4 text-sm sm:text-base Gilroy-normal text-white text-center"
        >
          Add any finance coin and enjoy empowering your portfolio
        </p>
        <p class="text-sm sm:text-base Gilroy-black text-white text-center">
          Add More
        </p>
      </button>
    </div>
  </div>
</template>
