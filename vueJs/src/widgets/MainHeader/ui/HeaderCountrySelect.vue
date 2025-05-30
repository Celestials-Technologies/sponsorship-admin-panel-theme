<script lang="ts">
export default {
  name: "HeaderCountrySelect",
};
</script>

<script setup lang="ts">
import { ref } from "vue";
import { type Country } from "../model/types";
import { countries } from "../model/config";
import { useClickOutside } from "@/shared/composables/useClickOutside";

const isOpen = ref(false);
const selectedCountry = ref(countries[0]);
const countrySelectRef = ref<HTMLElement | null>(null);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectCountry = (country: Country) => {
  selectedCountry.value = country;
  isOpen.value = false;
};

useClickOutside(countrySelectRef, () => {
  isOpen.value = false;
});
</script>

<template>
  <div class="relative" ref="countrySelectRef">
    <Button
      variant="none"
      @click="toggleDropdown"
      class="p-1 cursor-pointer iconMainBox rounded-full"
      aria-label="Select Country"
    >
      <img
        :src="selectedCountry.flag"
        :alt="selectedCountry.name"
        class="w-6 h-6 rounded-full"
      />
    </Button>

    <div
      v-show="isOpen"
      class="absolute right-0 bg-bgPrimary rounded-lg px-2 py-1 border border-solid border-white w-[200px] mt-2.5"
    >
      <ul class="divide-y divide-gray-700">
        <li
          v-for="country in countries"
          :key="country.name"
          class="flex items-center gap-2 p-2 hover:bg-[#E9901A] cursor-pointer rounded-lg"
          @click="selectCountry(country)"
        >
          <img
            :src="country.flag"
            :alt="country.name"
            class="w-6 h-6 rounded-full"
          />
          <span class="text-white">{{ country.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
