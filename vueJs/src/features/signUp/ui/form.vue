<template>
  <form @submit.prevent="handleSubmit" class="mt-8 lg:mt-10">
    <div
      v-if="hasSubmissionError"
      class="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded"
    >
      An error occurred during registration. Please try again.
    </div>

    <div class="flex flex-col gap-6">
      <div class="md:flex items-center gap-5 justify-between">
        <div class="md:w-1/2 relative">
          <Input
            v-model="formData.firstName"
            label="First Name"
            :error="errors.firstName"
            placeholder="Enter your First Name"
            variant="form"
            handleBlur="validateFirstName"
          />
        </div>
        <div class="mt-6 md:mt-0 md:w-1/2 relative">
          <Input
            v-model="formData.lastName"
            label="Last Name"
            :error="errors.lastName"
            placeholder="Enter your Last Name"
            variant="form"
          />
        </div>
      </div>

      <div class="relative">
        <Input
          v-model="formData.email"
          label="Email ID"
          :error="errors.email"
          placeholder="Enter your Email"
          variant="form"
        />
      </div>
      <div>
        <Input
          v-model="formData.password"
          label="Password"
          :error="errors.password"
          placeholder="Enter your Password"
          variant="form"
          type="password"
        />
      </div>
    </div>
    <p class="text-sm md:text-base text-white Gilroy-normal mt-4">
      Have an account?
      <BaseLink to="/login" class="text-[#FFA51F] Gilroy-semibold"
        >Sign In</BaseLink
      >
    </p>
    <div class="flex gap-5 lg:mt-8 mt-6">
      <Button
        type="submit"
        :disabled="isSubmitting"
        class="bg-btnSecondary hover:bg-transparent border border-solid border-[#E9901A] py-2 pt-2.5 px-[18px] md:px-8 md:py-4 md:pt-[18px] text-sm md:text-base text-white hover:text-[#FFA51F] rounded-lg flex items-center justify-center Gilroy-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Sign Up
      </Button>
      <Button
        @click="$router.back()"
        type="button"
        :disabled="isSubmitting"
        class="bg-transparent hover:bg-[#E9901A] border border-solid border-[#E9901A] py-2 pt-2.5 px-[18px] md:px-8 md:py-4 md:pt-[18px] text-sm md:text-base text-[#FFA51F] hover:text-white rounded-lg flex items-center justify-center Gilroy-semibold disabled:opacity-50 disabled:cursor-not-allowed"
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
import { handleSubmit, hasSubmissionError, isSubmitting } from "../modal/api";
import { useDebounceFn } from "@vueuse/core";

const validateFirstName = useDebounceFn(() => {
  console.log("hello validateFirstName");
  if (!formData.firstName) {
    errors.firstName = "First name is required";
  }
}, 500);
</script>
