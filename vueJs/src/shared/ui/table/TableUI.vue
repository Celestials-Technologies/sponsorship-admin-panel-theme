<template>
  <table class="min-w-full">
    <thead class="bg-[#ffffff1a]">
      <tr class="">
        <th
          v-for="header in headers"
          :key="header.key"
          class="bg-[#ffffff1a] py-4 px-6 whitespace-nowrap text-[#FFA51F] text-base md:text-lg Gilroy-semibold text-left"
        >
          {{ header.label }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rowIndex) in rows" :key="rowIndex" class="">
        <td
          v-for="header in headers"
          :key="header.key"
          class="text-base md:text-lg Gilroy-medium text-white whitespace-nowrap py-2.5 px-6 text-sm md:text-base Gilroy-medium"
        >
          <slot
            :name="`cell-${header.key}`"
            :row="row"
            :value="row[header.key]"
            :index="rowIndex"
          >
            <div
              v-if="header.key === 'status'"
              class="w-full px-5 py-2 rounded-full border border-solid pt-2.5 text-sm md:text-base Gilroy-medium text-center"
              :class="calculateColor(row[header.key])"
            >
              {{ row[header.key] }}
            </div>
            <div
              v-else-if="header.key === 'action'"
              :ref="(el) => setActionDropdownRef(el as HTMLElement, rowIndex)"
              class="w-full text-center flex justify-center relative"
            >
              <Icon
                icon="heroicons:ellipsis-vertical"
                width="24"
                height="24"
                color="#ffffff"
                class="cursor-pointer"
                @click="handleActionDropdown(rowIndex)"
              />
              <div
                v-show="rowIndex === openDropdownIndex && isOpen"
                class="left-[-81px] top-[15px] absolute border border-white rounded-[8px] p-3 bg-gradient"
              >
                <ul>
                  <li
                    v-for="action in actions"
                    :key="action.label"
                    class="text-sm text-white py-2"
                    s
                  >
                    <Button
                      class="flex items-center gap-2"
                      @click="action.function"
                    >
                      <Icon :icon="action.icon" width="24" height="24" />
                      {{ action.label }}
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
            <div v-else>
              {{ row[header.key] }}
            </div>
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { TableActionsType } from "@/features/wallet/modals/types";
import { onMounted, onUnmounted } from "vue";

import {
  calculateColor,
  handleClickOutside,
  setActionDropdownRef,
  handleActionDropdown,
  isOpen,
  openDropdownIndex,
} from "./modals/functions";

const props = defineProps<{
  headers: { key: string; label: string }[];
  rows: Record<string, any>[];
  actions: TableActionsType[];
}>();

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>
