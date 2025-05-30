<template>
  <h1 class="text-2xl lg:text-[32px] text-white leading-normal Gilroy-semibold">
    Let’s Get Started!
  </h1>
  <p class="text-sm md:text-base Gilroy-normal text-white mt-4">
    Please Enter your Email Address to Start your Online Application
  </p>
  <form class="mt-8 lg:mt-10">
    <div class="flex flex-col gap-6">
      <div class="md:flex items-center gap-5 justify-between">
        <div class="md:w-1/2 relative">
          <Input
            label="First Name"
            error="Please Enter Your First Name."
            placeholder="First Name"
            variant="form"
          />
        </div>
        <div class="mt-6 md:mt-0 md:w-1/2 relative">
          <Input
            label="Last Name"
            error="Please Enter Your Last Name."
            placeholder="Last Name"
            variant="form"
          />
        </div>
      </div>

      <div class="relative">
        <Input
          label="Email ID"
          error="Please Enter Your Email."
          placeholder="Enter your Email"
          variant="form"
        />
      </div>
      <div>
        <Input
          label="Password"
          error="Please Enter Your Password."
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
        type="button"
        onclick="signupBtn()"
        class="bg-btnSecondary hover:bg-transparent border border-solid border-[#E9901A] py-2 pt-2.5 px-[18px] md:px-8 md:py-4 md:pt-[18px] text-sm md:text-base text-white hover:text-[#FFA51F] rounded-lg flex items-center justify-center Gilroy-semibold"
      >
        Sign Up
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
import Input from "@/shared/ui/input/Input.vue";
import Button from "@/shared/ui/button/Button.vue";
import { BaseLink } from "@/shared/ui/baselink";
</script>
