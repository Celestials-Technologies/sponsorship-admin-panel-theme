<template>
  <div
    class="min-h-screen bg-bgPrimary fixed top-0 left-0 w-full h-full z-[99999]"
  >
    <div class="w-full h-screen">
      <div
        class="flex items-center h-full md:justify-normal justify-center overflow-hidden px-5"
      >
        <div
          class="p-6 w-full max-w-[480px] bg-gradient border border-[#e5e5e585] mx-auto rounded-[15.97px] h-[90%] max-h-[619px] yAxisScroll"
        >
          <Form />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Form from "./form.vue";
</script>
