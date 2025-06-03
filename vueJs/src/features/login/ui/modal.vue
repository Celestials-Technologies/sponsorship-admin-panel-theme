<template>
  <ModalWrapper class="max-h-[510px]">
    <div>
      <Typography
        variant="h1"
        color="white"
        class="text-2xl lg:text-[32px] leading-normal Gilroy-semibold"
      >
        Welcome Back!
      </Typography>
      <Typography class="text-sm md:text-base Gilroy-normal mt-4" color="white">
        Sign in to your account and join us
      </Typography>
      <Form />
    </div>
  </ModalWrapper>
</template>
<script setup lang="ts">
import Form from "./form.vue";
import Typography from "@/shared/ui/typography/Typography.vue";
import { ModalWrapper } from "@/shared/ui/ModalWrapper";
</script>
