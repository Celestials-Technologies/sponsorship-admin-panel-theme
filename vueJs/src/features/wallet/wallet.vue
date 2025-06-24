<template>
  <div>
    <TitleHeader title="Wallet" :isButton="true" />
    <TotalPriceSection />
    <Progress />

    <div class="flex xl:flex-nowrap flex-wrap gap-5 mt-6">
      <div class="w-full xl:w-[66.66%]">
        <div
          class="p-4 md:pt-6 md:pr-[31px] md:pb-[22px] md:pl-[26px] border border-[#e5e5e585] rounded-[15px] bg-gradient xAxisScroll"
        >
          <div
            class="border-b border-dashed pb-6 mb-2 border-[#e5e5e585] flex flex-wrap gap-3 items-center justify-between"
          >
            <p class="text-xl md:text-[26px] text-white Gilroy-semibold">
              Performance
            </p>
            <div class="flex items-center gap-2">
              <p class="text-sm Gilroy-normal text-white">Sort By</p>

              <div class="relative">
                <button
                  type="button"
                  onclick="selectDays(this)"
                  class="px-2 py-1 flex items-center gap-3 justify-between cursor-pointer selectDaysBox rounded-lg border border-solid border-[#e5e5e585] bg-transparent p-1 text-xs text-white pt-1.5 rounded-lg Gilroy-normal"
                >
                  <p
                    class="text-sm text-white Gilroy-normal"
                    id="performancetext"
                  >
                    Last 15 days
                  </p>
                  <div class="w-4 h-4">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      id="daysIcon"
                      style="rotate: 0deg; transition: all 0.5s ease"
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </button>
                <div
                  class="absolute right-0 bg-bgPrimary rounded-lg px-2 py-1 border border-solid border-[#e5e5e585] w-[130px]"
                  id="daysSelect"
                  style="
                    scale: 0;
                    margin-top: -50px;
                    z-index: 0;
                    transition: all 0.2s ease;
                  "
                >
                  <button
                    type="button"
                    class="text-sm md:text-base Gilroy-normal hover:bg-[#E9901A] p-1 text-white w-full rounded-lg flex items-center gap-3"
                    onclick="performancechangeMainText('Last 15 days' , event)"
                  >
                    <p class="text-sm text-white Gilroy-normal">Last 15 days</p>
                  </button>
                  <button
                    type="button"
                    class="text-sm md:text-base Gilroy-normal hover:bg-[#E9901A] p-1 text-white w-full rounded-lg flex items-center gap-3"
                    onclick="performancechangeMainText('Last 10 days' , event)"
                  >
                    <p class="text-sm text-white Gilroy-normal">Last 10 days</p>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="md:w-full w-[659px] md:h-full h-[263px]">
            <canvas id="myChart" width="100%" height="40%"></canvas>
          </div>
        </div>

        <UpcommingTable />
      </div>
      <div class="w-full xl:w-[33.33%]">
        <div
          class="p-4 md:pt-6 md:pr-[31px] md:pb-[22px] md:pl-[26px] border border-[#e5e5e585] rounded-[15px] bg-gradient"
        >
          <div
            class="flex border-b border-dashed border-[#e5e5e585] pb-4 mb-4 items-center gap-3 w-full"
          >
            <p class="text-white Gilroy-semibold pt-0.5 text-xl md:text-2xl">
              Credit Card
            </p>
          </div>
          <div>
            <!-- <img
                src="@/assets/images/creditcard.png"
                alt="card"
                class="w-full h-auto"
              /> -->
          </div>
          <div class="md:mt-10 mt-7 flex gap-3">
            <button
              type="button"
              onclick="makeACard()"
              class="px-2 md:px-4 py-3 flex justify-center items-center md:gap-3 gap-2 border border-solid border-[#E9901A] transition-all hover:bg-[#E9901A] rounded-xl walletTopUp"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p
                class="text-white text-sm md:text-base Gilroy-medium whitespace-nowrap"
              >
                New Card
              </p>
            </button>
            <button
              type="button"
              onclick="manageBtn()"
              class="px-4 md:px-5 md:py-4 py-3 flex justify-center items-center md:gap-3 gap-2 border border-solid border-[#E9901A] transition-all hover:bg-[#E9901A] rounded-xl walletTopUp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
              >
                <path
                  d="M8.49147 11.3307C8.94981 11.3307 9.32481 11.7057 9.32481 12.1641C9.32481 12.6224 8.94981 12.9974 8.49147 12.9974C8.03314 12.9974 7.65814 12.6224 7.65814 12.1641C7.65814 11.7057 8.03314 11.3307 8.49147 11.3307ZM8.49147 9.66406C7.10814 9.66406 5.99147 10.7807 5.99147 12.1641C5.99147 13.5474 7.10814 14.6641 8.49147 14.6641C9.87481 14.6641 10.9915 13.5474 10.9915 12.1641C10.9915 10.7807 9.87481 9.66406 8.49147 9.66406ZM15.5748 7.9974L16.4831 5.98906L18.4915 5.08073L16.4831 4.1724L15.5748 2.16406L14.6665 4.1724L12.6581 5.08073L14.6665 5.98906L15.5748 7.9974ZM17.8915 11.0974L17.2415 9.66406L16.5915 11.0974L15.1581 11.7474L16.5915 12.3974L17.2415 13.8307L17.8915 12.3974L19.3248 11.7474L17.8915 11.0974ZM13.6998 12.1641C13.6998 12.0641 13.6998 11.9557 13.6915 11.8557L15.3081 10.6307L13.2248 7.0224L11.3581 7.80573C11.1915 7.6974 11.0081 7.58906 10.8248 7.4974L10.5748 5.4974H6.40814L6.15814 7.50573C5.9748 7.5974 5.7998 7.70573 5.6248 7.81406L3.75814 7.0224L1.6748 10.6307L3.29147 11.8557C3.28314 11.9557 3.28314 12.0641 3.28314 12.1641C3.28314 12.2641 3.28314 12.3724 3.29147 12.4724L1.6748 13.6974L3.75814 17.3057L5.6248 16.5224C5.79147 16.6307 5.9748 16.7391 6.15814 16.8307L6.40814 18.8307H10.5748L10.8248 16.8224C11.0081 16.7307 11.1831 16.6307 11.3581 16.5141L13.2248 17.2974L15.3081 13.6891L13.6915 12.4641C13.6998 12.3724 13.6998 12.2641 13.6998 12.1641ZM12.5165 15.1974L11.0748 14.5891C10.6081 15.0891 9.99147 15.4557 9.29981 15.6141L9.0998 17.1641H7.88314L7.69147 15.6141C6.9998 15.4557 6.38314 15.0891 5.91647 14.5891L4.4748 15.1974L3.86647 14.1391L5.10814 13.1974C5.00814 12.8724 4.95814 12.5307 4.95814 12.1724C4.95814 11.8141 5.00814 11.4724 5.10814 11.1474L3.86647 10.2057L4.4748 9.1474L5.91647 9.75573C6.38314 9.25573 6.9998 8.88906 7.69147 8.73073L7.88314 7.16406H9.10814L9.29981 8.71406C9.99147 8.8724 10.6081 9.23906 11.0748 9.73906L12.5165 9.13073L13.1248 10.1891L11.8831 11.1307C11.9831 11.4557 12.0331 11.7974 12.0331 12.1557C12.0331 12.5141 11.9831 12.8557 11.8831 13.1807L13.1248 14.1224L12.5165 15.1974Z"
                  fill="#e9901a"
                ></path>
              </svg>
              <p class="text-white text-sm md:text-base Gilroy-medium">
                Manage
              </p>
            </button>
          </div>
        </div>
        <!-- Recent Transaction  -->
        <div
          class="p-4 md:pt-6 md:pr-[31px] md:pb-[22px] md:pl-[26px] border border-[#e5e5e585] rounded-[15px] bg-gradient mt-6 lg:mt-[34px]"
        >
          <div
            class="flex border-b border-dashed border-[#e5e5e585] pb-4 mb-4 items-center gap-3 w-full"
          >
            <p class="text-white Gilroy-semibold pt-0.5 text-xl md:text-2xl">
              Recent Transaction
            </p>
          </div>
          <div class="overflow-auto tableScroll pb-2.5">
            <table class="w-full">
              <thead>
                <tr class="">
                  <th
                    class="py-4 px-6 whitespace-nowrap text-[#FFA51F] text-base md:text-lg Gilroy-semibold text-left bg-[#ffffff1a] rounded-l-[17.84px]"
                  >
                    Title
                  </th>

                  <th
                    class="py-4 px-6 whitespace-nowrap text-[#FFA51F] text-base md:text-lg Gilroy-semibold text-left bg-[#ffffff1a] rounded-r-[17.84px]"
                  >
                    Transaction
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
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
                          Bitcoin
                        </p>
                        <p class="text-sm Gilroy-normal text-white">
                          Pending - 3 min ago
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="flex flex-col gap-1 py-2.5 px-6 whitespace-nowrap">
                    <p class="text-base md:text-lg text-white Gilroy-medium">
                      +0.2948 BTC
                    </p>
                    <p class="text-sm text-white Gilroy-normal">+$10,930.90</p>
                  </td>
                </tr>
                <tr class="">
                  <td
                    class="px-6 py-2.5 whitespace-nowrap bg-[#ffffff1a] rounded-l-[17.84px]"
                  >
                    <div class="flex items-center gap-3">
                      <!-- <img
                          src="./src/images/cardano_mid.png"
                          alt="cardano"
                          class="w-6 h-6"
                        /> -->
                      <div class="flex flex-col gap-1">
                        <p
                          class="pt-0.5 text-base md:text-lg Gilroy-medium text-white"
                        >
                          Cardano
                        </p>
                        <p class="text-sm Gilroy-normal text-white">
                          Canceled - 3 min ago
                        </p>
                      </div>
                    </div>
                  </td>
                  <td
                    class="flex flex-col gap-1 py-2.5 px-6 whitespace-nowrap bg-[#ffffff1a] rounded-r-[17.84px]"
                  >
                    <p class="text-base md:text-lg text-white Gilroy-medium">
                      +0.8475 ADA
                    </p>
                    <p class="text-sm text-white Gilroy-normal">+$10,930.90</p>
                  </td>
                </tr>
                <tr>
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
                          Bitcoin
                        </p>
                        <p class="text-sm Gilroy-normal text-white">
                          Pending - 3 min ago
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="flex flex-col gap-1 py-2.5 px-6 whitespace-nowrap">
                    <p class="text-base md:text-lg text-white Gilroy-medium">
                      +0.2948 BTC
                    </p>
                    <p class="text-sm text-white Gilroy-normal">+$10,930.90</p>
                  </td>
                </tr>
                <tr class="">
                  <td
                    class="px-6 py-2.5 whitespace-nowrap bg-[#ffffff1a] rounded-l-[17.84px]"
                  >
                    <div class="flex items-center gap-3">
                      <!-- <img
                          src="./src/images/cardano_mid.png"
                          alt="cardano"
                          class="w-6 h-6"
                        /> -->
                      <div class="flex flex-col gap-1">
                        <p
                          class="pt-0.5 text-base md:text-lg Gilroy-medium text-white"
                        >
                          Cardano
                        </p>
                        <p class="text-sm Gilroy-normal text-white">
                          Canceled - 3 min ago
                        </p>
                      </div>
                    </div>
                  </td>
                  <td
                    class="flex flex-col gap-1 py-2.5 px-6 whitespace-nowrap bg-[#ffffff1a] rounded-r-[17.84px]"
                  >
                    <p class="text-base md:text-lg text-white Gilroy-medium">
                      +0.8475 ADA
                    </p>
                    <p class="text-sm text-white Gilroy-normal">+$10,930.90</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <a href="#" class="flex items-center mt-6 gap-2">
            <p class="text-sm md:text-base text-[#FFA51F] Gilroy-medium">
              See All
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#e9901a"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { TitleHeader } from "@/shared/ui/TitleHeader";
import { TotalPriceSection } from "./ui/TotalPrice";
import Progress from "./ui/proggress/progress.vue";
import UpcommingTable from "./ui/UpcommingTable/table.vue";
</script>
