<template>
  <div class="relative">
    <button
      type="button"
      @click="isOpen = !isOpen"
      class="flex items-center gap-3 justify-between cursor-pointer rounded-lg border border-solid border-white bg-transparent p-2 text-white"
    >
      <div class="flex items-center gap-3">
        <img
          v-if="selected.icon"
          :src="selected.icon"
          :alt="selected.label"
          class="w-7 h-7"
        />
        <p
          class="text-sm text-white Gilroy-normal"
          :class="{ 'pt-0.5': selected.icon }"
        >
          {{ selected.label }}
        </p>
      </div>
      <div class="w-4 h-4">
        <DropdownArrowDown />
      </div>
    </button>

    <div
      v-if="isOpen"
      class="absolute right-0 mt-2 bg-bgPrimary rounded-lg px-2 py-1 border border-solid border-white min-w-[130px] z-50"
    >
      <button
        v-for="option in options"
        :key="option.value"
        type="button"
        @click="selectOption(option)"
        class="text-base Gilroy-normal hover:bg-[#E9901A] p-2 text-white w-full rounded-lg flex items-center gap-3"
      >
        <img
          v-if="option.icon"
          :src="option.icon"
          :alt="option.label"
          class="w-7 h-7"
        />
        <p
          class="text-sm text-white Gilroy-normal"
          :class="{ 'pt-0.5': option.icon }"
        >
          {{ option.label }}
        </p>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, computed } from "vue";
import DropdownArrowDown from "./svgs/dropdownArrowDown.vue";

interface DropdownOption {
  label: string;
  value: string;
  icon?: string;
}

const props = defineProps<{
  options: DropdownOption[];
  modelValue: DropdownOption;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: DropdownOption): void;
}>();

const isOpen = ref(false);
const selected = computed(() => props.modelValue);

const selectOption = (option: DropdownOption) => {
  emit("update:modelValue", option);
  isOpen.value = false;
};
</script>
