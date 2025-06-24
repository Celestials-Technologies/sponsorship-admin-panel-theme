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
      <table class="w-full">
        <thead>
          <tr class="bg-[#ffffff1a]">
            <th
              class="py-4 px-6 whitespace-nowrap text-[#FFA51F] text-base md:text-lg Gilroy-semibold text-left"
            >
              Title
            </th>
            <th
              class="py-4 px-6 whitespace-nowrap text-[#FFA51F] text-base md:text-lg Gilroy-semibold text-left"
            >
              Transaction ID
            </th>
            <th
              class="py-4 px-6 whitespace-nowrap text-[#FFA51F] text-base md:text-lg Gilroy-semibold text-left"
            >
              Payments
            </th>
            <th
              class="py-4 px-6 whitespace-nowrap text-[#FFA51F] text-base md:text-lg Gilroy-semibold text-left"
            >
              Status
            </th>
            <th
              class="py-4 px-6 whitespace-nowrap text-[#FFA51F] text-base md:text-lg Gilroy-semibold text-left"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in tableData" :key="item.title">
            <td class="px-6 py-2.5 whitespace-nowrap">
              <div class="flex items-center gap-3">
                <!-- <img
                        src="./src/images/bitcoin_mid.png"
                        alt="Bitcoin"
                        class="w-6 h-6"
                      /> -->
                <div class="flex flex-col gap-1">
                  <p
                    class="pt-0.5 text-base md:text-lg Gilroy-medium text-white"
                  >
                    {{ item.title }}
                  </p>
                  <p class="text-sm Gilroy-normal text-white">
                    {{ item.TimeStatus }} - {{ item.time }}
                  </p>
                </div>
              </div>
            </td>
            <td
              class="text-white whitespace-nowrap py-2.5 px-6 text-sm md:text-base Gilroy-medium"
            >
              {{ item.transactionId }}
            </td>
            <td
              class="text-[#00a385] whitespace-nowrap py-2.5 px-6 text-sm md:text-base Gilroy-medium"
            >
              {{ item.payments }}
            </td>
            <td class="py-2.5 px-6 whitespace-nowrap">
              <div
                class="w-full px-5 py-2 rounded-full border border-solid pt-2.5 text-sm md:text-base Gilroy-medium text-center"
                :class="calculateColor(item.status)"
              >
                {{ item.status }}
              </div>
            </td>
            <td>
              <div class="w-full text-center flex justify-center">
                <Icon
                  icon="heroicons:ellipsis-vertical"
                  width="24"
                  height="24"
                  color="#ffffff"
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
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

const calculateColor = (status: string) => {
  if (status === "Successful") {
    return "bg-[#00a385] text-white";
  } else if (status === "Pending") {
    return "bg-[#FFA51F] text-white";
  } else if (status === "Cancel") {
    return "bg-[#FF0000] text-white";
  }
};

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
const tableData = [
  {
    title: "Bitcoin",
    TimeStatus: "Pending",
    time: "3 min ago",
    transactionId: "21789057",
    payments: "$516,55",
    status: "Successful",
  },
  {
    title: "Cardano",
    TimeStatus: "Canceled",
    time: "1 min ago",
    transactionId: "52936567",
    payments: "$212,55",
    status: "Pending",
  },
  {
    title: "Electro",
    TimeStatus: "Cancel",
    time: "2 min ago",
    transactionId: "43397744",
    payments: "$33,55",
    status: "Cancel",
  },
  {
    title: "Cardano",
    TimeStatus: "Pending",
    time: "3 min ago",
    transactionId: "58276066",
    payments: "$116,55",
    status: "Pending",
  },
];
</script>
