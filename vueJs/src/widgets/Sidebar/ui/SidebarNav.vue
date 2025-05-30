<script setup lang="ts">
import { defineProps } from "vue";
import { type NavigationItem } from "../model/types";

interface Props {
  navigationItems: NavigationItem[];
  isActiveRoute: (path: string) => boolean;
  isActiveParent: (item: NavigationItem) => boolean;
}

defineProps<Props>();
</script>

<template>
  <ul class="mt-[90px] sidbar-list pl-px">
    <template v-for="item in navigationItems" :key="item.path">
      <div :class="{ accountContainer: item.children }">
        <div :class="{ accountMain: item.children }">
          <router-link :to="item.path" v-if="!item.children">
            <li
              class="py-2 px-2 rounded-xl flex gap-[7px] h-[50px] relative items-center mt-2.5 cursor-pointer transition-all"
              :class="{
                'bg-[#E9901A]': isActiveRoute(item.path),
                'hover:bg-[#E9901A]': !isActiveRoute(item.path),
              }"
            >
              <div
                class="w-[34px] h-[34px] rounded-lg flex justify-center items-center"
              >
                <component :is="item.icon" />
              </div>
              <p class="text-base leading-5 text-white pt-0.5 Gilroy-semibold">
                {{ item.label }}
              </p>
            </li>
          </router-link>

          <!-- Parent menu item with children -->
          <li
            v-else
            class="py-2 px-2 rounded-xl flex gap-[7px] h-[50px] relative items-center mt-2.5 cursor-pointer transition-all"
            :class="{
              'bg-[#E9901A]': isActiveParent(item),
              'hover:bg-[#E9901A]': !isActiveParent(item),
            }"
          >
            <div
              class="w-[34px] h-[34px] rounded-lg flex justify-center items-center"
            >
              <component :is="item.icon" />
            </div>
            <p class="text-base leading-5 text-white pt-0.5 Gilroy-semibold">
              {{ item.label }}
            </p>
          </li>
        </div>

        <!-- Child menu items -->
        <div v-if="item.children" class="pl-8 accountList">
          <div class="border-l border-solid border-[#E9901A]">
            <ul>
              <router-link
                v-for="child in item.children"
                :key="child.path"
                :to="child.path"
              >
                <li
                  class="py-2 px-2 rounded-xl flex gap-[7px] h-[50px] relative items-center mt-1 cursor-pointer !bg-transparent transition-all"
                >
                  <p
                    class="py-2 px-2 rounded-xl text-white flex gap-[7px] h-[50px] relative items-center mt-2.5 cursor-pointer transition-all"
                    :class="{
                      'bg-[#E9901A]': isActiveRoute(child.path),
                      'hover:bg-[#E9901A]': !isActiveRoute(child.path),
                    }"
                  >
                    {{ child.label }}
                  </p>
                </li>
              </router-link>
            </ul>
          </div>
        </div>
      </div>
    </template>
  </ul>
</template>
