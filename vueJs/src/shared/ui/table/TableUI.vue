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
              class="w-full text-center flex justify-center"
            >
              <Icon
                icon="heroicons:ellipsis-vertical"
                width="24"
                height="24"
                color="#ffffff"
              />
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
const calculateColor = (status: string) => {
  if (status === "Successful") {
    return "bg-[#00a385] text-white";
  } else if (status === "Pending") {
    return "bg-[#FFA51F] text-white";
  } else if (status === "Cancel") {
    return "bg-[#FF0000] text-white";
  }
};

defineProps<{
  headers: { key: string; label: string }[];
  rows: Record<string, any>[];
}>();
</script>
