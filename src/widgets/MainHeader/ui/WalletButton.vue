<script lang="ts">
import { Button } from "@/shared/ui/button";

export default {
  name: "WalletButton",
};
</script>

<script setup lang="ts">
defineEmits<{
  (e: "click"): void;
}>();
</script>

<template>
  <Button
    variant="none"
    class="py-1 pt-1.5 px-2 bg-btnSecondary text-base text-white border border-solid border-white hover:border-[#E9901A] rounded-lg cursor-pointer hover:bg-white transition-all duration-[0.5s] hover:text-[#E9901A] Gilroy-normal"
    @click="$emit('click')"
  >
    Connect
  </Button>
</template>
