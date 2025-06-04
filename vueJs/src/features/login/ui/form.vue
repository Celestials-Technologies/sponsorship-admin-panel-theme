<template>
  <form @submit.prevent="handleSubmit" class="mt-8 lg:mt-10">
    <div class="flex flex-col gap-6">
      <Input
        v-model="formData.email"
        id="emailInput"
        variant="formInputField"
        placeholder="Enter your Email"
        label="Enter Your Email"
        :error="errors.email"
        @blur="() => validateFieldName('email')"
      />
      <Input
        v-model="formData.password"
        type="password"
        id="passwordInput"
        variant="formInputField"
        label="Enter Your Password"
        :error="errors.password"
        placeholder="Enter Your Password"
        @blur="() => validateFieldName('password')"
      />
      <BaseLink
        class="text-[#FFA51F] text-sm md:text-base Gilroy-semibold text-right"
        to="/forgotPassword"
        >Forgot Password</BaseLink
      >
    </div>
    <p class="text-sm md:text-base text-white Gilroy-normal mt-4">
      Dont have an account?
      <BaseLink
        class="text-[#FFA51F] Gilroy-semibold hover:underline cursor-pointer Gilroy-semibold"
        to="/signup"
        >Signup</BaseLink
      >
    </p>
    <div class="flex gap-5 lg:mt-8 mt-6">
      <Button
        type="button"
        class="bg-btnSecondary hover:bg-transparent border border-solid border-[#E9901A] py-2 pt-2.5 px-[18px] md:px-8 md:py-4 md:pt-[18px] text-sm md:text-base text-white hover:text-[#FFA51F] rounded-lg flex items-center justify-center Gilroy-semibold"
        @click="handleSubmit"
      >
        Login
      </Button>
      <Button
        onclick="history.back()"
        type="button"
        class="bg-transparent hover:bg-[#E9901A] border border-solid border-[#E9901A] py-2 pt-2.5 px-[18px] md:px-8 md:py-4 md:pt-[18px] text-sm md:text-base text-[#FFA51F] hover:text-white rounded-lg flex items-center justify-center Gilroy-semibold"
      >
        Back Home
      </Button>
    </div>
  </form>
</template>

<script setup>
import { formData, errors } from "../modal/types";
import Input from "@/shared/ui/input/Input.vue";
import Button from "@/shared/ui/button/Button.vue";
import { BaseLink } from "@/shared/ui/baselink";
import { handleSubmit, validateFieldName } from "../modal/api";
</script>
