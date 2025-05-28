<script lang="ts">
export default {
  name: "HeaderProfile",
};
</script>

<script setup lang="ts">
import { ref } from "vue";
import { profileMenu } from "../model/config";
import { useClickOutside } from "@/shared/composables/useClickOutside";
// import defaultProfile from "@/shared/assets/images/default-profile.png";

const isOpen = ref(false);
const profileRef = ref<HTMLElement | null>(null);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

useClickOutside(profileRef, () => {
  isOpen.value = false;
});
</script>

<template>
  <div class="relative" ref="profileRef">
    <Button
      variant="none"
      @click="toggleMenu"
      class="p-1 cursor-pointer iconMainBox rounded-full"
      aria-label="Profile Menu"
    >
      <img
        src="@/shared/ui/Icons/png/user.png"
        alt="Profile"
        class="w-8 h-8 rounded-full object-cover"
      />
    </Button>
    <div
      v-show="isOpen"
      class="absolute right-0 bg-bgPrimary rounded-lg px-2 py-1 border border-solid border-white w-[200px] mt-2.5"
    >
      <ul class="divide-y divide-gray-700">
        <li
          v-for="item in profileMenu"
          :key="item.name"
          class="hover:bg-[#E9901A] cursor-pointer rounded-lg"
        >
          <router-link
            :to="item.link"
            class="text-white block w-full text-left h-10 w-[182px]"
          >
            <p class="p-2 h-full">{{ item.name }}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
