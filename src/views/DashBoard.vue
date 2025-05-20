<template>
  <div class="pt-12">
    <div class="flex flex-wrap gap-3 items-center justify-between mb-5">
      <p class="text-3xl lg:text-[40px] text-white Gilroy-semibold">
        Dashboard
      </p>
      <div class="flex items-center gap-3" id="buttonHeader">
        <!-- onclick="liquidityBtn()" -->
        <button
          type="button"
          class="bg-btnSecondary px-5 py-2 md:px-8 md:py-4 text-base text-white rounded-lg flex items-center justify-center gap-2 Gilroy-semibold"
        >
          <svg
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p class="pt-0.5">Liquidity</p>
        </button>
        <a href="./pro-plan.html">
          <button
            type="button"
            class="bg-btnSecondary py-2 pt-2.5 px-[18px] md:px-8 md:py-4 md:pt-[18px] text-base text-white rounded-lg flex items-center justify-center Gilroy-semibold"
          >
            Trade
          </button>
        </a>
      </div>
    </div>

    <div
      class="flex flex-wrap 2xl:flex-nowrap items-center gap-y-5 relative"
      id="blockZindex"
      style="z-index: 9999"
    >
      <div
        class="sm:w-3/6 xl:w-[31.333%] 2xl:w-full w-full max-w-full sm:px-2.5 h-full max-h-full"
      >
        <div
          class="py-6 px-3.5 rounded-xl border border-translucentWhite w-full bg-sideBarBg h-full flex items-center justify-center"
        >
          <div class="w-full">
            <div
              class="flex border-b border-dashed border-white pb-4 mb-4 items-center gap-3"
            >
              <img
                src="@/assets/images/bitcoin_mid.png"
                alt="bitcoin"
                class="w-8 h-8"
              />
              <p class="text-white Gilroy-semibold pt-0.5 text-xl sm:text-2xl">
                BTC
              </p>
            </div>
            <div class="flex gap-4 justify-between">
              <div>
                <p class="text-xl whitespace-nowrap text-white Gilroy-semibold">
                  671.28 USDT
                </p>
                <div class="flex items-center gap-2 mt-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 7L14.1314 14.8686C13.7354 15.2646 13.5373 15.4627 13.309 15.5368C13.1082 15.6021 12.8918 15.6021 12.691 15.5368C12.4627 15.4627 12.2646 15.2646 11.8686 14.8686L9.13137 12.1314C8.73535 11.7354 8.53735 11.5373 8.30902 11.4632C8.10817 11.3979 7.89183 11.3979 7.69098 11.4632C7.46265 11.5373 7.26465 11.7354 6.86863 12.1314L2 17M22 7H15M22 7V14"
                      stroke="#00A385"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p
                    class="text-sm sm:text-base Gilroy-normal text-[#00A385] pt-0.5"
                  >
                    92.4%
                  </p>
                </div>
              </div>
              <div class="h-[35%]">
                <canvas id="Bitcoin" width="100%" height="100%"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="sm:w-3/6 xl:w-[31.333%] 2xl:w-full w-full max-w-full sm:px-2.5 h-full max-h-full"
      >
        <div
          class="py-6 px-3.5 rounded-xl border border-translucentWhite w-full bg-sideBarBg h-full flex items-center justify-center"
        >
          <div class="w-full">
            <div
              class="flex border-b border-dashed border-white pb-4 mb-4 items-center gap-3"
            >
              <img
                src="@/assets/images/cardano_mid.png"
                alt="cardano"
                class="w-8 h-8"
              />
              <p class="text-white Gilroy-semibold pt-0.5 text-xl sm:text-2xl">
                ADA
              </p>
            </div>
            <div class="flex gap-4 justify-between">
              <div>
                <p class="text-xl whitespace-nowrap text-white Gilroy-semibold">
                  456.12 ADA
                </p>
                <div class="flex items-center gap-2 mt-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 7L14.1314 14.8686C13.7354 15.2646 13.5373 15.4627 13.309 15.5368C13.1082 15.6021 12.8918 15.6021 12.691 15.5368C12.4627 15.4627 12.2646 15.2646 11.8686 14.8686L9.13137 12.1314C8.73535 11.7354 8.53735 11.5373 8.30902 11.4632C8.10817 11.3979 7.89183 11.3979 7.69098 11.4632C7.46265 11.5373 7.26465 11.7354 6.86863 12.1314L2 17M22 7H15M22 7V14"
                      stroke="#8957ff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p
                    class="text-sm sm:text-base Gilroy-normal text-[#8957ff] pt-0.5"
                  >
                    50.9%
                  </p>
                </div>
              </div>
              <div class="h-[35%]">
                <canvas id="marketCap" width="100%" height="100%"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="sm:w-3/6 xl:w-[31.333%] 2xl:w-full w-full max-w-full sm:px-2.5 h-full max-h-full"
      >
        <div
          class="py-6 px-3.5 rounded-xl border border-translucentWhite w-full bg-sideBarBg h-full flex items-center justify-center"
        >
          <div class="w-full">
            <div
              class="flex border-b border-dashed border-white pb-4 mb-4 items-center gap-3"
            >
              <img
                src="@/assets/images/electro_mid.png"
                alt="cardano"
                class="w-8 h-8"
              />
              <p class="text-white Gilroy-semibold pt-0.5 text-xl sm:text-2xl">
                EOS
              </p>
            </div>
            <div class="flex gap-4 justify-between">
              <div>
                <p class="text-xl whitespace-nowrap text-white Gilroy-semibold">
                  324.17 EOS
                </p>
                <div class="flex items-center gap-2 mt-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 7L14.1314 14.8686C13.7354 15.2646 13.5373 15.4627 13.309 15.5368C13.1082 15.6021 12.8918 15.6021 12.691 15.5368C12.4627 15.4627 12.2646 15.2646 11.8686 14.8686L9.13137 12.1314C8.73535 11.7354 8.53735 11.5373 8.30902 11.4632C8.10817 11.3979 7.89183 11.3979 7.69098 11.4632C7.46265 11.5373 7.26465 11.7354 6.86863 12.1314L2 17M22 7H15M22 7V14"
                      stroke="#FF6161"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p
                    class="text-sm sm:text-base Gilroy-normal text-[#FF6161] pt-0.5"
                  >
                    19.3%
                  </p>
                </div>
              </div>
              <div class="h-[35%]">
                <canvas id="volume" width="100%" height="100%"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="sm:w-3/6 xl:w-[31.333%] 2xl:w-full w-full max-w-full sm:px-2.5 h-full"
      >
        <div
          class="p-2 border border-translucentWhite rounded-xl w-full bg-sideBarBg flex h-full items-center py-6"
        >
          <!-- onclick="addMore()" -->

          <button
            type="button"
            class="p-[18px] w-full border border-dashed border-white rounded-lg cursor-pointer"
          >
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="mx-auto"
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
              class="mb-4 text-sm sm:text-base Gilroy-normal text-white text-center"
            >
              Add any finance coin and enjoy empowering your portfolio
            </p>
            <p class="text-sm sm:text-base Gilroy-black text-white text-center">
              Add More
            </p>
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="flex flex-wrap xl:flex-nowrap">
    <div class="w-full xl:w-[70%] xl:px-2.5">
      <div
        class="p-6 md:pt-6 md:pr-[31px] md:pb-[22px] md:pl-[26px] border border-white rounded-[15px] bg-gradient mt-6"
      >
        <div
          class="border-b border-dashed pb-6 mb-2 border-white flex flex-wrap gap-3 items-center justify-between"
        >
          <p class="text-xl md:text-[26px] text-white Gilroy-semibold">
            Earnings
          </p>
          <!-- <div class="flex items-center gap-2">
                  <p class="text-sm Gilroy-normal text-white">Sort By</p>

                  <div class="relative">
                    <button
                      type="button"
                      onclick="selectDays(this)"
                      class="px-2 py-1 flex items-center gap-3 justify-between cursor-pointer selectDaysBox rounded-full border border-solid border-white bg-transparent p-1 text-xs text-white pt-1.5 rounded-lg Gilroy-normal"
                    >
                      <p class="text-sm text-white Gilroy-normal" id="mainText">
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
                      class="absolute right-0 bg-bgPrimary rounded-lg px-2 py-1 border border-solid border-white w-[130px]"
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
                        class="text-base Gilroy-normal hover:bg-[#E9901A] p-1 text-white w-full rounded-lg flex items-center gap-3"
                        onclick="changeMainText('Last 15 days')"
                      >
                        <p class="text-sm text-white Gilroy-normal">
                          Last 15 days
                        </p>
                      </button>
                      <button
                        type="button"
                        class="text-base Gilroy-normal hover:bg-[#E9901A] p-1 text-white w-full rounded-lg flex items-center gap-3"
                        onclick="changeMainText('Last 10 days')"
                      >
                        <p class="text-sm text-white Gilroy-normal">
                          Last 10 days
                        </p>
                      </button>
                    </div>
                  </div>
                </div> -->

          <div class="flex items-center gap-2">
            <p class="text-sm Gilroy-normal text-white">Sort By</p>

            <div class="relative">
              <button
                type="button"
                onclick="selectDays(this)"
                class="px-2 py-1 flex items-center gap-3 justify-between cursor-pointer selectDaysBox rounded-lg border border-solid border-white bg-transparent p-1 text-xs text-white pt-1.5 rounded-lg Gilroy-normal"
              >
                <p class="text-sm text-white Gilroy-normal" id="earningtext">
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
                class="absolute right-0 bg-bgPrimary rounded-lg px-2 py-1 border border-solid border-white w-[130px]"
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
                  class="text-base Gilroy-normal hover:bg-[#E9901A] p-1 text-white w-full rounded-lg flex items-center gap-3"
                  onclick="earningchangeMainText('Last 15 days' , event)"
                >
                  <p class="text-sm text-white Gilroy-normal">Last 15 days</p>
                </button>
                <button
                  type="button"
                  class="text-base Gilroy-normal hover:bg-[#E9901A] p-1 text-white w-full rounded-lg flex items-center gap-3"
                  onclick="earningchangeMainText('Last 10 days' , event)"
                >
                  <p class="text-sm text-white Gilroy-normal">Last 10 days</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <canvas id="myChart" width="100%" height="40%"></canvas>
      </div>
      <div
        class="p-6 md:pt-6 md:pr-[31px] md:pb-[22px] md:pl-[26px] border border-white rounded-[15px] bg-gradient mt-6"
      >
        <div
          class="border-b border-dashed pb-6 mb-2 border-white flex items-center justify-between mb-6 pb-6 flex-wrap gap-x-1"
        >
          <p class="text-xl md:text-[26px] text-white Gilroy-semibold">
            Transaction History
          </p>
          <div class="flex gap-3 flex-wrap">
            <div
              class="bg-sideBarBg border border-translucentWhite py-1.5 pl-5 pr-2 gap-4 rounded-full flex items-center"
            >
              <input
                type="text"
                id="myInput"
                onkeyup="searchFunction()"
                placeholder="Search"
                class="text-base bg-transparent leading-6 text-white outline-none Gilroy-medium w-[calc(100%-20%)]"
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
                  />
                </svg>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <p class="text-sm Gilroy-normal text-white">Sort By</p>
              <!-- <select
                      class="border border-solid border-white bg-transparent p-1 text-xs text-white pt-1.5 rounded-lg Gilroy-normal"
                    >
                      <option value="option1">Last 15 days</option>
                      <option value="option2">Last 10 days</option>
                    </select> -->
              <div class="relative">
                <button
                  type="button"
                  onclick="selectDays(this)"
                  class="px-2 py-1 flex items-center gap-3 justify-between cursor-pointer selectDaysBox rounded-lg border border-solid border-white bg-transparent p-1 text-xs text-white pt-1.5 rounded-lg Gilroy-normal"
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
                  class="absolute right-0 bg-bgPrimary rounded-lg px-2 py-1 border border-solid border-white w-[130px]"
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
                    class="text-base Gilroy-normal hover:bg-[#E9901A] p-1 text-white w-full rounded-lg flex items-center gap-3"
                    onclick="changeSelectTableText('Last 15 days' , event)"
                  >
                    <p class="text-sm text-white Gilroy-normal">Last 15 days</p>
                  </button>
                  <button
                    type="button"
                    class="text-base Gilroy-normal hover:bg-[#E9901A] p-1 text-white w-full rounded-lg flex items-center gap-3"
                    onclick="changeSelectTableText('Last 10 days' , event)"
                  >
                    <p class="text-sm text-white Gilroy-normal">Last 10 days</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="data-container" class="overflow-auto tableScroll pb-2.5"></div>

        <div class="mt-5 flex flex-wrap justify-between gap-3 items-center">
          <p
            class="text-white text-sm md:text-base Gilroy-normal"
            id="pageToTotalPage"
          ></p>

          <div class="pagination gap-3" id="pagination" style="display: none">
            <div
              id="prev"
              class="md:w-10 md:h-10 w-8 h-8 flex items-center justify-center rounded-lg border border-white bg-transparent hover:bg-[#E9901A] transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                ></path>
              </svg>
            </div>

            <p id="page-numbers" class="flex items-center gap-3"></p>
            <div
              id="next"
              class="md:w-10 md:h-10 w-8 h-8 flex items-center justify-center rounded-lg border border-white bg-transparent hover:bg-[#E9901A] transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full xl:w-[30%] px-0 xl:px-2.5 flex flex-col gap-6 mt-6">
      <div class="border border-white bg-sideBarBg p-6 rounded-xl">
        <div class="flex items-center justify-between">
          <p class="text-base text-white Gilroy-medium">Balance</p>
          <div class="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#8957ff"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
              />
            </svg>
            <p class="text-base text-[#8957ff] Gilroy-normal pt-0.5">15.4%</p>
          </div>
        </div>
        <h3
          class="mt-4 mb-10 text-2xl md:text-[32px] text-white Gilroy-semibold"
        >
          $324.74 USD
        </h3>
        <div class="flex justify-between items-center gap-6">
          <div class="flex flex-col gap-4">
            <div class="flex gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#8957ff"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                />
              </svg>
              <p class="pt-0.5 text-white text-base Gilroy-normal">Income</p>
            </div>
            <p class="text-base Gilroy-medium text-white">$23.863,21 USD</p>
          </div>
          <div class="flex flex-col gap-4">
            <div class="flex gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ff6161"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                />
              </svg>
              <p class="pt-0.5 text-white text-base Gilroy-normal">Expenses</p>
            </div>
            <p class="text-base Gilroy-medium text-white">$5.678,45 USD</p>
          </div>
        </div>
      </div>
      <div class="border border-white bg-sideBarBg p-6 rounded-xl">
        <div
          class="border-b border-dashed border-white pb-6 mb-6 flex gap-1 justify-between items-center"
        >
          <h4 class="text-xl md:text-2xl text-white Gilroy-semibold">
            Staking rewards
          </h4>
          <button type="button" onclick="rewardsRefresh()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              class="w-6 h-6 cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </button>
        </div>
        <div class="flex flex-col gap-6">
          <div class="border-b border-dashed border-white pb-6 flex gap-5">
            <img
              src="@/assets/images/bitcoin_mid.png"
              alt="bitcoin"
              class="w-8 h-8"
            />
            <div class="flex flex-col w-full gap-2">
              <div class="flex items-center gap-1 justify-between">
                <h5 class="text-[18px] md:text-xl text-white Gilroy-medium">
                  Staked BTC
                </h5>
                <h5 class="text-[18px] md:text-xl text-white Gilroy-medium">
                  95 BTC
                </h5>
              </div>
              <div
                class="flex gap-3 items-center rewardsPercentAnimation bounce-up"
              >
                <p id="rewardsValue" class="text-base text-white">73%</p>
                <div class="w-full h-[5px] rounded-[5px] bg-[#dfe0e4]">
                  <div
                    id="rewardsPercent"
                    class="h-full rounded-[5px] bg-btnSecondary subject"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div class="border-b border-dashed border-white pb-6 flex gap-5">
            <img
              src="@/assets/images/cardano_mid.png"
              alt="cardano"
              class="w-8 h-8"
            />
            <div class="flex flex-col w-full gap-2">
              <div class="flex items-center gap-1 justify-between">
                <h5 class="text-[18px] md:text-xl text-white Gilroy-medium">
                  Stake ADA
                </h5>
                <h5 class="text-[18px] md:text-xl text-white Gilroy-medium">
                  56 ADA
                </h5>
              </div>
              <div
                class="flex gap-3 items-center rewardsPercentAnimation bounce-up"
              >
                <p id="rewardsValue" class="text-base text-white">73%</p>
                <div class="w-full h-[5px] rounded-[5px] bg-[#dfe0e4]">
                  <div
                    id="rewardsPercent"
                    class="h-full rounded-[5px] bg-btnSecondary subject"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div class="border-b border-dashed border-white pb-6 flex gap-5">
            <img src="@/assets/images/bnb.png" alt="BNB" class="w-8 h-8" />
            <div class="flex flex-col w-full gap-2">
              <div class="flex items-center gap-1 justify-between">
                <h5 class="text-[18px] md:text-xl text-white Gilroy-medium">
                  Staked BNB
                </h5>
                <h5 class="text-[18px] md:text-xl text-white Gilroy-medium">
                  44 BNB
                </h5>
              </div>
              <div
                class="flex gap-3 items-center rewardsPercentAnimation bounce-up"
              >
                <p id="rewardsValue" class="text-base text-white">73%</p>
                <div class="w-full h-[5px] rounded-[5px] bg-[#dfe0e4]">
                  <div
                    id="rewardsPercent"
                    class="h-full rounded-[5px] bg-btnSecondary subject"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div class="border-b border-dashed border-white pb-6 flex gap-5">
            <img
              src="@/assets/images/dogecoin_lg.png"
              alt="dogecoin"
              class="w-8 h-8"
            />
            <div class="flex flex-col w-full gap-2">
              <div class="flex items-center gap-1 justify-between">
                <h5 class="text-[18px] md:text-xl text-white Gilroy-medium">
                  Staked DOG
                </h5>
                <h5 class="text-[18px] md:text-xl text-white Gilroy-medium">
                  32 DOG
                </h5>
              </div>
              <div
                class="flex gap-3 items-center rewardsPercentAnimation bounce-up"
              >
                <p id="rewardsValue" class="text-base text-white">73%</p>
                <div class="w-full h-[5px] rounded-[5px] bg-[#dfe0e4]">
                  <div
                    id="rewardsPercent"
                    class="h-full rounded-[5px] bg-btnSecondary subject"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="border border-white bg-sideBarBg p-6 rounded-xl">
        <div
          class="border-b border-dashed border-white pb-6 mb-6 flex gap-1 justify-between items-center"
        >
          <h4 class="text-xl md:text-2xl text-white Gilroy-semibold">
            Subscriptions
          </h4>
          <div class="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#8957ff"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
              />
            </svg>
            <p class="text-base text-[#8957ff] Gilroy-normal pt-0.5">15.4%</p>
          </div>
        </div>

        <div
          class="border border-translucentWhite w-full max-w-full bg-sideBarBg p-4 rounded-xl mb-4"
        >
          <div class="flex gap-5">
            <img
              src="@/assets/images/youtube.png"
              alt="youtube"
              class="w-6 h-6"
            />
            <p class="text-[18px] md:text-xl text-white Gilroy-medium">
              Youtube
            </p>
          </div>
          <p class="pt-4 text-xl md:text-2xl Gilroy-semibold text-white">
            $10.99
          </p>
        </div>
        <div id="subscriptionData" class="flex flex-col gap-4"></div>
        <a href="./subscriptionPage.html" class="flex items-center mt-6 gap-2">
          <p class="text-base !text-[#E9901A] Gilroy-medium">
            Manage subscriptions
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
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import HelloWorld from '@/components/HelloWorld.vue'
</script>
