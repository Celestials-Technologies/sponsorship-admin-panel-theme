<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { useVModel } from "@vueuse/core";
import { cn } from "@/shared/lib/utils";
import { cva } from "class-variance-authority";
import EyeIcon from "@/shared/ui/Icons/svgs/EyeIcon.vue";
import Button from "@/shared/ui/button/Button.vue";
import { ref } from "vue";
import HidePasswordIcon from "@/shared/ui/Icons/svgs/HidePasswordIcon.vue";
const inputVariants = cva("w-full outline-none", {
  variants: {
    variant: {
      search: "",
      form: "border border-solid border-[#e5e5e585] rounded-xl text-black text-sm md:text-base bg-transparent px-[13px] py-3 pt-3.5 h-11 Gilroy-normal mt-1 bg-white placeholder-[#D0D0D0]",
      default:
        "flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-foreground file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const props = defineProps<{
  defaultValue?: string | number;
  modelValue?: string | number;
  class?: HTMLAttributes["class"];
  variant?: "search" | "default" | "form";
  placeholder?: string;
  label?: string;
  error?: string;
  type?: "text" | "password";
  handleBlur?: () => void;
}>();

const emits = defineEmits<{
  (e: "update:modelValue", payload: string | number): void;
  (e: "blur"): void;
}>();

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
  defaultValue: props.defaultValue,
});

const handleBlur = () => {
  if (typeof props.handleBlur === "function") {
    props.handleBlur();
  }
  emits("blur");
};
const showPassword = ref(false);

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};
</script>

<template>
  <div class="relative">
    <label v-if="label" class="text-lg Gilroy-medium text-white w-full flex">
      {{ label }}
    </label>
    <input
      :type="
        type != 'password'
          ? 'text'
          : type === 'password' && showPassword
          ? 'text'
          : 'password'
      "
      v-model="modelValue"
      :placeholder="props.placeholder"
      :class="cn(inputVariants({ variant: props.variant }), props.class)"
      @blur="handleBlur"
    />
    <p
      v-if="error"
      id="lastNameError"
      class="text-[#FF2B28] absolute text-[10px] mt-1 ml-1"
    >
      {{ error }}
    </p>

    <Button
      v-if="type === 'password'"
      type="button"
      @click="togglePassword"
      class="absolute right-6 top-9 cursor-pointer p-0"
      variant="none"
    >
      <EyeIcon v-if="showPassword" />
      <HidePasswordIcon v-else />
    </Button>
  </div>
</template>
