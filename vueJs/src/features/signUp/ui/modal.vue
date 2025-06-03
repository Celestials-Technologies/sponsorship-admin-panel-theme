<template>
  <ModalWrapper class="">
    <Typography
      variant="h1"
      color="white"
      class="text-2xl lg:text-[32px] text-white leading-normal Gilroy-semibold"
    >
      Let’s Get Started!
    </Typography>
    <Typography
      color="white"
      class="text-sm md:text-base Gilroy-normal text-white mt-4"
    >
      Please Enter your Email Address to Start your Online Application
    </Typography>
    <Form />
  </ModalWrapper>
</template>
<script setup lang="ts">
import Form from "./form.vue";
import Typography from "@/shared/ui/typography/Typography.vue";
import { ModalWrapper } from "@/shared/ui/ModalWrapper";
</script>
