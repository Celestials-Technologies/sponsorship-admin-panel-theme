<template>
  <div
    class="md:p-6 p-4 border border-[#e5e5e585] rounded-[15px] mt-6 bg-gradient w-full"
  >
    <div
      class="flex flex-wrap border-b border-dashed border-[#e5e5e585] pb-4 mb-4 items-center gap-3 justify-between"
    >
      <div
        class="flex flex-wrap gap-3 xl:gap-x-8 md:gap-6 items-center items-center justify-between w-full"
      >
        <Typography
          class="text-white Gilroy-semibold pt-0.5 text-xl md:text-2xl"
          variant="h2"
          >Upcoming payments</Typography
        >

        <div class="gap-3 flex items-center flex-wrap">
          <HeaderSearch />
          <div class="flex items-center gap-2">
            <Typography variant="p" class="text-sm Gilroy-normal text-white"
              >Sort By</Typography
            >
            <Dropdown v-model="selectedDays" :options="daysOptions" />
          </div>
        </div>
      </div>
    </div>
    <div class="overflow-auto tableScroll pb-2.5">
      <TableUI
        :headers="tableDataHeader.headers"
        :rows="props.tableData"
        :actions="tableActions"
      >
        <template #cell-title="{ row }">
          <div class="flex flex-col gap-1">
            <p class="pt-0.5 text-base md:text-lg Gilroy-medium text-white">
              {{ row.title }}
            </p>
            <p class="text-sm Gilroy-normal text-white">
              {{ row.TimeStatus }} - {{ row.time }}
            </p>
          </div>
        </template>
      </TableUI>
    </div>
    <div id="data-container" class="overflow-auto tableScroll pb-2.5"></div>
    <a
      onclick="seeAll()"
      id="seeAll"
      class="flex items-center mt-6 gap-2 cursor-pointer"
    >
      <p class="text-sm md:text-base text-[#FFA51F] Gilroy-medium">See All</p>
      <Icon
        icon="heroicons:arrow-small-right"
        width="24"
        height="24"
        color="#FFA51F"
      />
    </a>
    <a
      onclick="showLess()"
      id="seeLess"
      class="flex items-center mt-6 gap-2 cursor-pointer"
      style="display: none"
    >
      <p class="text-sm md:text-base text-[#FFA51F] Gilroy-medium">See Less</p>
      <Icon
        icon="heroicons:arrow-small-right"
        width="24"
        height="24"
        color="#FFA51F"
      />
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Dropdown } from "@/shared/ui/dropdown";
import HeaderSearch from "@/widgets/MainHeader/ui/HeaderSearch.vue";
import { Typography } from "@/shared/ui/typography";
import { Icon } from "@iconify/vue";
import { TableUI } from "@/shared/ui/table";
import { UpcommingTransactionType } from "../../modals/types";

const props = defineProps<{
  tableData: UpcommingTransactionType[];
}>();
const selectedDays = ref({
  label: "Last 15 days",
  value: "15",
});

const daysOptions = [
  {
    label: "Last 15 days",
    value: "15",
  },
  {
    label: "Last 10 days",
    value: "10",
  },
  {
    label: "Last 7 days",
    value: "7",
  },
  {
    label: "Last 5 days",
    value: "5",
  },
];
const tableActions = [
  {
    label: "Edit",
    icon: "heroicons:pencil-square",
    function: () => {
      console.log("edit");
    },
  },
  {
    label: "Update",
    icon: "heroicons:arrow-path-solid",
    function: () => {
      console.log("update");
    },
  },
  {
    label: "Delete",
    icon: "heroicons:trash",
    function: () => {
      console.log("delete");
    },
  },
];
const tableDataHeader = {
  headers: [
    { key: "title", label: "Title" },
    { key: "transactionId", label: "Transaction ID" },
    { key: "payments", label: "Payments" },
    { key: "status", label: "Status" },
    { key: "action", label: "Action" },
  ],
};
</script>
