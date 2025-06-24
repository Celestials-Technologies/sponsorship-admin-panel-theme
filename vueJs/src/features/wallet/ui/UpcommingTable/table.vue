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
        <h2 class="text-white Gilroy-semibold pt-0.5 text-xl md:text-2xl">
          Upcoming payments
        </h2>

        <div class="gap-3 flex items-center flex-wrap">
          <div
            class="bg-sideBarBg border border-[#e5e5e585] py-1.5 pl-5 pr-2 gap-4 rounded-full flex items-center"
          >
            <input
              type="text"
              id="myInput"
              onkeyup="searchFunction()"
              placeholder="Search"
              class="text-sm md:text-base bg-transparent leading-6 text-white outline-none Gilroy-medium w-[calc(100%-20%)]"
            />
            <div
              onclick="searchFunction()"
              class="p-1 flex items-center justify-center bg-white cursor-pointer w-fit rounded-full searchIconBox"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#E9901A"
                class="w-6 h-6 fill-none searchIcon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                ></path>
              </svg>
            </div>
          </div>
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
                  id="detailSelectTableText"
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
                  onclick="changeSelectTableText('Last 15 days' , event)"
                >
                  <p class="text-sm text-white Gilroy-normal">Last 15 days</p>
                </button>
                <button
                  type="button"
                  class="text-sm md:text-base Gilroy-normal hover:bg-[#E9901A] p-1 text-white w-full rounded-lg flex items-center gap-3"
                  onclick="changeSelectTableText('Last 10 days' , event)"
                >
                  <p class="text-sm text-white Gilroy-normal">Last 10 days</p>
                </button>
              </div>
            </div>
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
            <td
              class="text-white whitespace-nowrap py-2.5 px-6 text-sm md:text-base Gilroy-medium"
            >
              21789057
            </td>
            <td
              class="text-[#00a385] whitespace-nowrap py-2.5 px-6 text-sm md:text-base Gilroy-medium"
            >
              $516,55
            </td>
            <td class="py-2.5 px-6 whitespace-nowrap">
              <div
                class="w-full px-5 py-2 rounded-full border border-solid pt-2.5 border-[#e5e5e585] text-[#00a185] text-sm md:text-base bg-[#b9d7d2] Gilroy-medium text-center"
              >
                Successful
              </div>
            </td>
            <td>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="cursor-pointer mx-auto"
              >
                <path
                  d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </td>
          </tr>
          <tr class="bg-[#ffffff1a]">
            <td class="px-6 py-2.5 whitespace-nowrap">
              <div class="flex items-center gap-3">
                <!-- <img
                        src="./src/images/cardano_mid.png"
                        alt="Bitcoin"
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
              class="text-white whitespace-nowrap py-2.5 px-6 text-sm md:text-base Gilroy-medium"
            >
              52936567
            </td>
            <td
              class="text-[#00a385] whitespace-nowrap py-2.5 px-6 text-sm md:text-base Gilroy-medium"
            >
              $516,55
            </td>
            <td class="py-2.5 px-6 whitespace-nowrap">
              <div
                class="w-full px-5 py-2 rounded-full border border-solid pt-2.5 border-[#e5e5e585] text-[#ffc861] text-sm md:text-base bg-[#fdedcff2] Gilroy-medium text-center"
              >
                Pending
              </div>
            </td>
            <td>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="cursor-pointer mx-auto"
              >
                <path
                  d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </td>
          </tr>
          <tr>
            <td class="px-6 py-2.5 whitespace-nowrap">
              <div class="flex items-center gap-3">
                <!-- <img
                        src="./src/images/electro_mid.png"
                        alt="electro"
                        class="w-6 h-6"
                      /> -->
                <div class="flex flex-col gap-1">
                  <p
                    class="pt-0.5 text-base md:text-lg Gilroy-medium text-white"
                  >
                    Electro
                  </p>
                  <p class="text-sm Gilroy-normal text-white">
                    Pending - 3 min ago
                  </p>
                </div>
              </div>
            </td>
            <td
              class="text-white whitespace-nowrap py-2.5 px-6 text-sm md:text-base Gilroy-medium"
            >
              43397744
            </td>
            <td
              class="text-[#00a385] whitespace-nowrap py-2.5 px-6 text-sm md:text-base Gilroy-medium"
            >
              $516,55
            </td>
            <td class="py-2.5 px-6 whitespace-nowrap">
              <div
                class="w-full px-5 py-2 rounded-full border border-solid pt-2.5 border-[#e5e5e585] text-[#ff6161] text-sm md:text-base bg-[#ffbebe] Gilroy-medium text-center"
              >
                Cancel
              </div>
            </td>
            <td>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="cursor-pointer mx-auto"
              >
                <path
                  d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </td>
          </tr>
          <tr class="bg-[#ffffff1a]">
            <td class="px-6 py-2.5 whitespace-nowrap">
              <div class="flex items-center gap-3">
                <!-- <img
                        src="./src/images/cardano_mid.png"
                        alt="Bitcoin"
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
              class="text-white whitespace-nowrap py-2.5 px-6 text-sm md:text-base Gilroy-medium"
            >
              58276066
            </td>
            <td
              class="text-[#00a385] whitespace-nowrap py-2.5 px-6 text-sm md:text-base Gilroy-medium"
            >
              $516,55
            </td>
            <td class="py-2.5 px-6 whitespace-nowrap">
              <div
                class="w-full px-5 py-2 rounded-full border border-solid pt-2.5 border-[#e5e5e585] text-[#ffc861] text-sm md:text-base bg-[#fdedcff2] Gilroy-medium text-center"
              >
                Pending
              </div>
            </td>
            <td>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="cursor-pointer mx-auto"
              >
                <path
                  d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </td>
          </tr>
          <tr>
            <td class="px-6 py-2.5 whitespace-nowrap">
              <div class="flex items-center gap-3">
                <!-- <img
                        src="./src/images/electro_mid.png"
                        alt="electro"
                        class="w-6 h-6"
                      /> -->
                <div class="flex flex-col gap-1">
                  <p
                    class="pt-0.5 text-base md:text-lg Gilroy-medium text-white"
                  >
                    Electro
                  </p>
                  <p class="text-sm Gilroy-normal text-white">
                    Pending - 3 min ago
                  </p>
                </div>
              </div>
            </td>
            <td
              class="text-white whitespace-nowrap py-2.5 px-6 text-sm md:text-base Gilroy-medium"
            >
              43397745
            </td>
            <td
              class="text-[#00a385] whitespace-nowrap py-2.5 px-6 text-sm md:text-base Gilroy-medium"
            >
              $516,55
            </td>
            <td class="py-2.5 px-6 whitespace-nowrap">
              <div
                class="w-full px-5 py-2 rounded-full border border-solid pt-2.5 border-[#e5e5e585] text-[#ff6161] text-sm md:text-base bg-[#ffbebe] Gilroy-medium text-center"
              >
                Cancel
              </div>
            </td>
            <td>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="cursor-pointer mx-auto"
              >
                <path
                  d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </td>
          </tr>
          <tr class="bg-[#ffffff1a]">
            <td class="px-6 py-2.5 whitespace-nowrap">
              <div class="flex items-center gap-3">
                <!-- <img
                        src="./src/images/cardano_mid.png"
                        alt="Bitcoin"
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
              class="text-white whitespace-nowrap py-2.5 px-6 text-sm md:text-base Gilroy-medium"
            >
              58276066
            </td>
            <td
              class="text-[#00a385] whitespace-nowrap py-2.5 px-6 text-sm md:text-base Gilroy-medium"
            >
              $516,55
            </td>
            <td class="py-2.5 px-6 whitespace-nowrap">
              <div
                class="w-full px-5 py-2 rounded-full border border-solid pt-2.5 border-[#e5e5e585] text-[#ffc861] text-sm md:text-base bg-[#fdedcff2] Gilroy-medium text-center"
              >
                Pending
              </div>
            </td>
            <td>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="cursor-pointer mx-auto"
              >
                <path
                  d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
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
    <a
      onclick="showLess()"
      id="seeLess"
      class="flex items-center mt-6 gap-2 cursor-pointer"
      style="display: none"
    >
      <p class="text-sm md:text-base text-[#FFA51F] Gilroy-medium">See Less</p>
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
          d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
        ></path>
      </svg>
    </a>
  </div>
</template>

<script setup lang="ts"></script>
