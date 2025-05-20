<template>
  <div class="pt-12">
    <div class="flex flex-wrap gap-3 items-center justify-between mb-5">
      <p class="text-3xl lg:text-[40px] text-white Gilroy-semibold">
        Balance Details
      </p>
      <div
        class="flex items-center gap-3"
        id="buttonHeader"
        style="z-index: 9999"
      >
        <button
          type="button"
          onclick="liquidityBtn()"
          class="bg-btnSecondary px-5 py-2 md:px-8 md:py-4 text-base text-white rounded-lg flex items-center justify-center gap-2 Gilroy-semibold"
        >
          <svg
            width="24"
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
      class="flex flex-wrap xl:flex-nowrap gap-y-6 gap-x-5 relative"
      id="blockZindex"
      style="z-index: 9999"
    >
      <div
        class="md:p-6 p-4 border border-white rounded-[15px] bg-gradient w-full xl:w-1/2"
      >
        <div
          class="flex border-b border-dashed border-white pb-4 mb-4 items-center gap-3 justify-between"
        >
          <h2 class="text-white Gilroy-semibold pt-0.5 text-xl sm:text-2xl">
            Average Balance
          </h2>
          <div class="relative">
            <button
              type="button"
              onclick="detailsBtn(this)"
              class="chooseOption"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="cursor-pointer"
              >
                <path
                  d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <div
              class="absolute top-3 right-[27px] min-w-[140px] bg-bgPrimary rounded-lg text-base text-white Gilroy-normal p-3 grid"
              id="detailDropDown"
              style="
                opacity: 0;
                margin-top: -50px;
                z-index: 0;
                transition: all 0.5s ease;
              "
            >
              <a
                href="#"
                class="px-5 py-2 rounded-lg hover:bg-[#0f0f7ac7] transition-all"
              >
                Print
              </a>
              <a
                href="#"
                class="px-5 py-2 rounded-lg hover:bg-[#0f0f7ac7] transition-all"
              >
                Remove
              </a>
              <a
                href="#"
                class="px-5 py-2 rounded-lg hover:bg-[#0f0f7ac7] transition-all"
              >
                Download
              </a>
            </div>
          </div>
        </div>
        <div
          class="flex flex-wrap sm:flex-nowrap gap-3 items-center justify-between gap-5"
        >
          <div
            class="p-4 md:p-6 border border-translucentWhite w-full sm:w-1/2 max-w-full bg-sideBarBg h-full rounded-xl"
          >
            <h4
              class="w-full border-b border-dashed border-white md:pb-6 md:mb-6 pb-5 mb-5 text-base text-white Gilroy-medium"
            >
              Estimated Balance
            </h4>

            <div class="flex flex-wrap gap-3 justify-between items-center">
              <div>
                <h3 class="text-xl md:text-2xl text-white Gilroy-semibold">
                  12.26 BTC
                </h3>
                <div class="flex items-center gap-1 mt-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 18L18 6M18 6H10M18 6V14"
                      stroke="#8956ff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p class="text-base Gilroy-normal text-[#8956ff]">$124,326</p>
                </div>
              </div>

              <canvas id="estimatedBalance" width="100%" height="40%"></canvas>
            </div>
          </div>

          <div
            class="p-4 md:p-6 border border-translucentWhite w-full sm:w-1/2 max-w-full bg-sideBarBg h-full rounded-xl"
          >
            <h4
              class="w-full border-b border-dashed border-white md:pb-6 md:mb-6 pb-5 mb-5 text-base text-white Gilroy-medium"
            >
              Spot balance
            </h4>

            <div class="flex flex-wrap gap-3 justify-between items-center">
              <div>
                <h3 class="text-xl md:text-2xl text-white Gilroy-semibold">
                  0.261 BTC
                </h3>
                <div class="flex items-center gap-1 mt-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 18L18 6M18 6H10M18 6V14"
                      stroke="#bd7b00"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p class="text-base Gilroy-normal text-[#bd7b00]">$124,326</p>
                </div>
              </div>
              <canvas id="spotBalance" width="100%" height="40%"></canvas>
            </div>
          </div>
        </div>
        <div
          class="flex flex-wrap sm:flex-nowrap gap-3 items-center justify-between gap-5 mt-5"
        >
          <div
            class="p-4 md:p-6 border border-translucentWhite w-full sm:w-1/2 max-w-full bg-sideBarBg h-full rounded-xl"
          >
            <h4
              class="w-full border-b border-dashed border-white md:pb-6 md:mb-6 pb-5 mb-5 text-base text-white Gilroy-medium"
            >
              Fiat balance
            </h4>

            <div class="flex flex-wrap gap-3 justify-between items-center">
              <div>
                <h3 class="text-xl md:text-2xl text-white Gilroy-semibold">
                  0.261 BTC
                </h3>
                <div class="flex items-center gap-1 mt-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 18L18 6M18 6H10M18 6V14"
                      stroke="#bd7b00"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p class="text-base Gilroy-normal text-[#bd7b00]">$124,326</p>
                </div>
              </div>
              <canvas id="fiatBalance" width="100%" height="40%"></canvas>
            </div>
          </div>

          <div
            class="p-4 md:p-6 border border-translucentWhite w-full sm:w-1/2 max-w-full bg-sideBarBg h-full rounded-xl"
          >
            <h4
              class="w-full border-b border-dashed border-white md:pb-6 md:mb-6 pb-5 mb-5 text-base text-white Gilroy-medium"
            >
              Today's PNL
            </h4>

            <div class="flex flex-wrap gap-3 justify-between items-center">
              <div>
                <h3 class="text-xl md:text-2xl text-white Gilroy-semibold">
                  +$12,007
                </h3>
                <div class="flex items-center gap-1 mt-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 18L18 6M18 6H10M18 6V14"
                      stroke="#00a385"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p class="text-base Gilroy-normal text-[#00a385]">$124,326</p>
                </div>
              </div>
              <canvas id="todaysPNL" width="100%" height="40%"></canvas>
            </div>
          </div>
        </div>
      </div>
      <div
        class="md:p-6 p-4 border border-white rounded-[15px] bg-gradient w-full xl:w-1/2"
      >
        <div
          class="flex border-b border-dashed border-white pb-4 mb-4 items-center gap-3 justify-between"
        >
          <h2 class="text-white Gilroy-semibold pt-0.5 text-xl sm:text-2xl">
            Currency Overview
          </h2>
          <div class="relative">
            <button
              type="button"
              onclick="detailsBtn(this)"
              class="chooseOption"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="cursor-pointer"
              >
                <path
                  d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <div
              class="absolute top-3 right-[27px] min-w-[140px] bg-bgPrimary rounded-lg text-base text-white Gilroy-normal p-3 grid"
              id="detailDropDown"
              style="
                opacity: 0;
                margin-top: -50px;
                z-index: 0;
                transition: all 0.5s ease;
              "
            >
              <a
                href="#"
                class="px-5 py-2 rounded-lg hover:bg-[#0f0f7ac7] transition-all"
              >
                Print
              </a>
              <a
                href="#"
                class="px-5 py-2 rounded-lg hover:bg-[#0f0f7ac7] transition-all"
              >
                Remove
              </a>
              <a
                href="#"
                class="px-5 py-2 rounded-lg hover:bg-[#0f0f7ac7] transition-all"
              >
                Download
              </a>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap sm:flex-nowrap gap-y-6 gap-x-5 items-center">
          <div
            class="lg:p-6 p-4 border border-translucentWhite w-full sm:w-1/2 max-w-full bg-sideBarBg h-full rounded-xl"
          >
            <div class="flex gap-3 sm:gap-4 items-center">
              <img src="/src/assets/images/bit_xxl.png" alt="BitCoin" />
              <div class="flex flex-col gap-3">
                <h4 class="text-base Gilroy-medium text-white">BTC-USD</h4>
                <h3 class="text-xl md:text-2xl Gilroy-semibold text-white">
                  $23,000
                </h3>
              </div>
            </div>
            <div class="md:mt-7 mt-6">
              <div
                class="w-full h-[5px] rounded-[5px] bg-[#dfe0e4] rewardsPercentAnimation bounce-up"
              >
                <div class="subject h-full rounded-[5px] bg-btnSecondary"></div>
              </div>
            </div>
            <div class="flex flex-wrap gap-3 mt-4">
              <div class="flex flex-wrap gap-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 7L14.1314 14.8686C13.7354 15.2646 13.5373 15.4627 13.309 15.5368C13.1082 15.6021 12.8918 15.6021 12.691 15.5368C12.4627 15.4627 12.2646 15.2646 11.8686 14.8686L9.13137 12.1314C8.73535 11.7354 8.53735 11.5373 8.30902 11.4632C8.10817 11.3979 7.89183 11.3979 7.69098 11.4632C7.46265 11.5373 7.26465 11.7354 6.86863 12.1314L2 17M22 7H15M22 7V14"
                    stroke="#8956ff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <p class="text-base text-[#8956ff] Gilroy-normal">+2,4%</p>
              </div>
              <p class="text-base Gilroy-normal text-white">
                Since last mounth
              </p>
            </div>
          </div>
          <div
            class="lg:p-6 p-4 border border-translucentWhite w-full sm:w-1/2 max-w-full bg-sideBarBg h-full rounded-xl"
          >
            <div class="flex gap-3 sm:gap-4 items-center">
              <img src="/src/assets/images/car_xxl.png" alt="Cardano" />
              <div class="flex flex-col gap-3">
                <h4 class="text-base Gilroy-medium text-white">ADA-USD</h4>
                <h3 class="text-xl md:text-2xl Gilroy-semibold text-white">
                  $7,500
                </h3>
              </div>
            </div>
            <div class="md:mt-7 mt-6">
              <div
                class="w-full h-[5px] rounded-[5px] bg-[#dfe0e4] rewardsPercentAnimation bounce-up"
              >
                <div class="subject h-full rounded-[5px] bg-btnSecondary"></div>
              </div>
            </div>
            <div class="flex flex-wrap gap-3 mt-4">
              <div class="flex flex-wrap gap-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 7L14.1314 14.8686C13.7354 15.2646 13.5373 15.4627 13.309 15.5368C13.1082 15.6021 12.8918 15.6021 12.691 15.5368C12.4627 15.4627 12.2646 15.2646 11.8686 14.8686L9.13137 12.1314C8.73535 11.7354 8.53735 11.5373 8.30902 11.4632C8.10817 11.3979 7.89183 11.3979 7.69098 11.4632C7.46265 11.5373 7.26465 11.7354 6.86863 12.1314L2 17M22 7H15M22 7V14"
                    stroke="#ff6161"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <p class="text-base text-[#ff6161] Gilroy-normal">-1,2%</p>
              </div>
              <p class="text-base Gilroy-normal text-white">
                Since last mounth
              </p>
            </div>
          </div>
        </div>
        <div
          class="flex flex-wrap sm:flex-nowrap gap-y-6 gap-x-5 mt-6 sm:mt-5 items-center"
        >
          <div
            class="lg:p-6 p-4 border border-translucentWhite w-full sm:w-1/2 max-w-full bg-sideBarBg h-full rounded-xl"
          >
            <div class="flex gap-3 sm:gap-4 items-center">
              <img src="/src/assets/images/usd_xxl.png" alt="USD" />
              <div class="flex flex-col gap-3">
                <h4 class="text-base Gilroy-medium text-white">BTC-USD</h4>
                <h3 class="text-xl md:text-2xl Gilroy-semibold text-white">
                  $23,000
                </h3>
              </div>
            </div>
            <div class="md:mt-7 mt-6">
              <div
                class="w-full h-[5px] rounded-[5px] bg-[#dfe0e4] rewardsPercentAnimation bounce-up"
              >
                <div class="subject h-full rounded-[5px] bg-btnSecondary"></div>
              </div>
            </div>
            <div class="flex flex-wrap gap-3 mt-4">
              <div class="flex flex-wrap gap-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 7L14.1314 14.8686C13.7354 15.2646 13.5373 15.4627 13.309 15.5368C13.1082 15.6021 12.8918 15.6021 12.691 15.5368C12.4627 15.4627 12.2646 15.2646 11.8686 14.8686L9.13137 12.1314C8.73535 11.7354 8.53735 11.5373 8.30902 11.4632C8.10817 11.3979 7.89183 11.3979 7.69098 11.4632C7.46265 11.5373 7.26465 11.7354 6.86863 12.1314L2 17M22 7H15M22 7V14"
                    stroke="#ff6161"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <p class="text-base text-[#ff6161] Gilroy-normal">-0,3%</p>
              </div>
              <p class="text-base Gilroy-normal text-white">
                Since last mounth
              </p>
            </div>
          </div>
          <div
            class="lg:p-6 p-4 border border-translucentWhite w-full sm:w-1/2 max-w-full bg-sideBarBg h-full rounded-xl"
          >
            <div class="flex gap-3 sm:gap-4 items-center">
              <img src="/src/assets/images/ele_xxl.png" alt="ETN" />
              <div class="flex flex-col gap-3">
                <h4 class="text-base Gilroy-medium text-white">ETN-USD</h4>
                <h3 class="text-xl md:text-2xl Gilroy-semibold text-white">
                  $7,500
                </h3>
              </div>
            </div>
            <div class="md:mt-7 mt-6">
              <div
                class="w-full h-[5px] rounded-[5px] bg-[#dfe0e4] rewardsPercentAnimation bounce-up"
              >
                <div class="subject h-full rounded-[5px] bg-btnSecondary"></div>
              </div>
            </div>
            <div class="flex flex-wrap gap-3 mt-4">
              <div class="flex flex-wrap gap-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 7L14.1314 14.8686C13.7354 15.2646 13.5373 15.4627 13.309 15.5368C13.1082 15.6021 12.8918 15.6021 12.691 15.5368C12.4627 15.4627 12.2646 15.2646 11.8686 14.8686L9.13137 12.1314C8.73535 11.7354 8.53735 11.5373 8.30902 11.4632C8.10817 11.3979 7.89183 11.3979 7.69098 11.4632C7.46265 11.5373 7.26465 11.7354 6.86863 12.1314L2 17M22 7H15M22 7V14"
                    stroke="#00a385"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <p class="text-base text-[#00a385] Gilroy-normal">+2,4%</p>
              </div>
              <p class="text-base Gilroy-normal text-white">
                Since last mounth
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="md:p-6 p-4 border border-white rounded-[15px] mt-6 bg-gradient w-full"
    >
      <div
        class="flex flex-wrap border-b border-dashed border-white pb-4 mb-4 items-center gap-3 justify-between"
      >
        <div class="flex flex-wrap gap-3 xl:gap-x-8 md:gap-6">
          <h2 class="text-white Gilroy-semibold pt-0.5 text-xl sm:text-2xl">
            Currency Overview List
          </h2>
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
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="flex gap-6 gap-4 items-center">
          <div class="relative">
            <button
              type="button"
              onclick="selectCoin(this)"
              class="px-2 py-[7px] flex items-center gap-3 justify-between cursor-pointer selectDaysBox rounded-lg border border-solid border-white bg-transparent text-xs text-white rounded-lg Gilroy-normal"
            >
              <div class="flex items-center gap-2">
                <img
                  src="/src/assets/images/usd.png"
                  alt="USD"
                  class="w-6 h-6"
                  id="selectCoinImg"
                />
                <p
                  class="text-base text-white Gilroy-normal"
                  id="selectCoinText"
                >
                  USD
                </p>
              </div>
              <div class="w-6 h-6">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  id="selectCoinIcon"
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
              id="coinSelect"
              style="
                opacity: 0;
                margin-top: 50px;
                z-index: 0;
                transition: all 0.2s ease;
              "
            >
              <button
                type="button"
                class="text-base Gilroy-normal hover:bg-[#E9901A] p-1 text-white w-full rounded-lg flex items-center gap-3"
                onclick="changeCoinData('USD', '/src/images/usd.png')"
              >
                <div class="flex items-center gap-2">
                  <img
                    src="/src/assets/images/usd.png"
                    alt="USD"
                    class="w-6 h-6"
                  />
                  <p
                    class="text-base text-white Gilroy-normal"
                    id="selectCoinText"
                  >
                    USD
                  </p>
                </div>
              </button>
              <button
                type="button"
                class="text-base Gilroy-normal hover:bg-[#E9901A] p-1 text-white w-full rounded-lg flex items-center gap-3"
                onclick="changeCoinData('BNB', '/src/images/bnb.png')"
              >
                <div class="flex items-center gap-2">
                  <img
                    src="/src/assets/images/bnb.png"
                    alt="BNB"
                    class="w-6 h-6"
                  />
                  <p
                    class="text-base text-white Gilroy-normal"
                    id="selectCoinText"
                  >
                    BNB
                  </p>
                </div>
              </button>
              <button
                type="button"
                class="text-base Gilroy-normal hover:bg-[#E9901A] p-1 text-white w-full rounded-lg flex items-center gap-3"
                onclick="changeCoinData('BTC', '/src/images/bitcoin.png')"
              >
                <div class="flex items-center gap-2">
                  <img
                    src="/src/assets/images/bitcoin.png"
                    alt="bitcoin"
                    class="w-6 h-6"
                  />
                  <p
                    class="text-base text-white Gilroy-normal"
                    id="selectCoinText"
                  >
                    BTC
                  </p>
                </div>
              </button>
            </div>
          </div>
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
                24
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
                onclick="changeSelectTableText('24')"
              >
                <p class="text-sm text-white Gilroy-normal">24</p>
              </button>
              <button
                type="button"
                class="text-base Gilroy-normal hover:bg-[#E9901A] p-1 text-white w-full rounded-lg flex items-center gap-3"
                onclick="changeSelectTableText('7D')"
              >
                <p class="text-sm text-white Gilroy-normal">7D</p>
              </button>
              <button
                type="button"
                class="text-base Gilroy-normal hover:bg-[#E9901A] p-1 text-white w-full rounded-lg flex items-center gap-3"
                onclick="changeSelectTableText('1M')"
              >
                <p class="text-sm text-white Gilroy-normal">1M</p>
              </button>
              <button
                type="button"
                class="text-base Gilroy-normal hover:bg-[#E9901A] p-1 text-white w-full rounded-lg flex items-center gap-3"
                onclick="changeSelectTableText('1Y')"
              >
                <p class="text-sm text-white Gilroy-normal">1Y</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="overflow-auto tableScroll pb-2.5">
              <table class="w-full">
                <thead>
                  <tr class="bg-[#302964]">
                    <th
                      class="py-5 px-6 whitespace-nowrap text-white text-base Gilroy-semibold text-left"
                    >
                      Title
                    </th>
                    <th
                      class="py-5 px-6 whitespace-nowrap text-white text-base Gilroy-semibold text-left"
                    >
                      Price
                    </th>
                    <th
                      class="py-5 px-6 whitespace-nowrap text-white text-base Gilroy-semibold text-left"
                    >
                      1H
                    </th>
                    <th
                      class="py-5 px-6 whitespace-nowrap text-white text-base Gilroy-semibold text-left"
                    >
                      24H
                    </th>
                    <th
                      class="py-5 px-6 whitespace-nowrap text-white text-base Gilroy-semibold text-left"
                    >
                      7D
                    </th>
                    <th
                      class="py-5 px-6 whitespace-nowrap text-white text-base Gilroy-semibold text-left"
                    >
                      Volume
                    </th>
                    <th
                      class="py-5 px-6 whitespace-nowrap text-white text-base Gilroy-semibold text-left"
                    >
                      Last 7 days
                    </th>
                    <th
                      class="py-5 px-6 whitespace-nowrap text-white text-base Gilroy-semibold text-left"
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="px-6 py-2.5 whitespace-nowrap">
                      <div class="flex items-center gap-3">
                        <img
                          src="./src/images/bitcoin_mid.png"
                          alt="Bitcoin"
                          class="w-6 h-6"
                        />
                        <div class="flex flex-col gap-1">
                          <p class="pt-0.5 text-base Gilroy-medium text-white">
                            Bitcoin
                          </p>
                          <p class="text-xs Gilroy-normal text-white">BTC</p>
                        </div>
                      </div>
                    </td>
                    <td
                      class="text-white whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      $516,55
                    </td>
                    <td
                      class="text-[#00a385] whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      +7.4%
                    </td>
                    <td
                      class="text-[#bd7b00] whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      +27.3%
                    </td>
                    <td
                      class="text-[#ff6161] whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      -2.3%
                    </td>
                    <td
                      class="text-white whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      $4.97M
                    </td>
                    <td
                      class="text-white whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      <div
                        class="flex gap-3 text-base Gilroy-medium text-white items-center"
                      >
                        50%
                        <div class="w-full h-[5px] rounded-[5px] bg-[#dfe0e4]">
                          <div
                            class="w-1/2 h-full rounded-[5px] bg-btnSecondary"
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td class="py-2.5 px-6">
                      <button
                        type="button"
                        class="border-white rounded-xl border border-solid md:py-3 py-2 md:px-5 px-4 text-base text-white hover:border-[#E9901A] hover:bg-[e9901a] transition-all"
                      >
                        Trade
                      </button>
                    </td>
                  </tr>
                  <tr class="bg-[#302964]">
                    <td class="px-6 py-2.5 whitespace-nowrap">
                      <div class="flex items-center gap-3">
                        <img
                          src="./src/images/cardano_mid.png"
                          alt="Cardano"
                          class="w-6 h-6"
                        />
                        <div class="flex flex-col gap-1">
                          <p class="pt-0.5 text-base Gilroy-medium text-white">
                            Cardano
                          </p>
                          <p class="text-xs Gilroy-normal text-white">ADA</p>
                        </div>
                      </div>
                    </td>
                    <td
                      class="text-white whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      $516,55
                    </td>
                    <td
                      class="text-[#00a385] whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      +7.4%
                    </td>
                    <td
                      class="text-[#bd7b00] whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      +27.3%
                    </td>
                    <td
                      class="text-[#ff6161] whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      -2.3%
                    </td>
                    <td
                      class="text-white whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      $4.97M
                    </td>
                    <td
                      class="text-white whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      <div
                        class="flex gap-3 text-base Gilroy-medium text-white items-center"
                      >
                        25%
                        <div class="w-full h-[5px] rounded-[5px] bg-[#dfe0e4]">
                          <div
                            class="w-3/12 h-full rounded-[5px] bg-btnSecondary"
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td class="py-2.5 px-6">
                      <button
                        type="button"
                        class="border-white rounded-xl border border-solid md:py-3 py-2 md:px-5 px-4 text-base text-white hover:border-[#E9901A] hover:bg-[e9901a] transition-all"
                      >
                        Trade
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-2.5 whitespace-nowrap">
                      <div class="flex items-center gap-3">
                        <img
                          src="./src/images/bitcoin_mid.png"
                          alt="Bitcoin"
                          class="w-6 h-6"
                        />
                        <div class="flex flex-col gap-1">
                          <p class="pt-0.5 text-base Gilroy-medium text-white">
                            Bitcoin
                          </p>
                          <p class="text-xs Gilroy-normal text-white">BTC</p>
                        </div>
                      </div>
                    </td>
                    <td
                      class="text-white whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      $516,55
                    </td>
                    <td
                      class="text-[#00a385] whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      +7.4%
                    </td>
                    <td
                      class="text-[#bd7b00] whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      +27.3%
                    </td>
                    <td
                      class="text-[#ff6161] whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      -2.3%
                    </td>
                    <td
                      class="text-white whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      $4.97M
                    </td>
                    <td
                      class="text-white whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      <div
                        class="flex gap-3 text-base Gilroy-medium text-white items-center"
                      >
                        75%
                        <div class="w-full h-[5px] rounded-[5px] bg-[#dfe0e4]">
                          <div
                            class="w-9/12 h-full rounded-[5px] bg-btnSecondary"
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td class="py-2.5 px-6">
                      <button
                        type="button"
                        class="border-white rounded-xl border border-solid md:py-3 py-2 md:px-5 px-4 text-base text-white hover:border-[#E9901A] hover:bg-[e9901a] transition-all"
                      >
                        Trade
                      </button>
                    </td>
                  </tr>
                  <tr class="bg-[#302964]">
                    <td class="px-6 py-2.5 whitespace-nowrap">
                      <div class="flex items-center gap-3">
                        <img
                          src="./src/images/cardano_mid.png"
                          alt="Cardano"
                          class="w-6 h-6"
                        />
                        <div class="flex flex-col gap-1">
                          <p class="pt-0.5 text-base Gilroy-medium text-white">
                            Cardano
                          </p>
                          <p class="text-xs Gilroy-normal text-white">ADA</p>
                        </div>
                      </div>
                    </td>
                    <td
                      class="text-white whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      $516,55
                    </td>
                    <td
                      class="text-[#00a385] whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      +7.4%
                    </td>
                    <td
                      class="text-[#bd7b00] whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      +27.3%
                    </td>
                    <td
                      class="text-[#ff6161] whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      -2.3%
                    </td>
                    <td
                      class="text-white whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      $4.97M
                    </td>
                    <td
                      class="text-white whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      <div
                        class="flex gap-3 text-base Gilroy-medium text-white items-center"
                      >
                        25%
                        <div class="w-full h-[5px] rounded-[5px] bg-[#dfe0e4]">
                          <div
                            class="w-3/12 h-full rounded-[5px] bg-btnSecondary"
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td class="py-2.5 px-6">
                      <button
                        type="button"
                        class="border-white rounded-xl border border-solid md:py-3 py-2 md:px-5 px-4 text-base text-white hover:border-[#E9901A] hover:bg-[e9901a] transition-all"
                      >
                        Trade
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-2.5 whitespace-nowrap">
                      <div class="flex items-center gap-3">
                        <img
                          src="./src/images/bnb.png"
                          alt="BNB"
                          class="w-6 h-6"
                        />
                        <div class="flex flex-col gap-1">
                          <p class="pt-0.5 text-base Gilroy-medium text-white">
                            Binance
                          </p>
                          <p class="text-xs Gilroy-normal text-white">BNB</p>
                        </div>
                      </div>
                    </td>
                    <td
                      class="text-white whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      $516,55
                    </td>
                    <td
                      class="text-[#00a385] whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      +7.4%
                    </td>
                    <td
                      class="text-[#bd7b00] whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      +27.3%
                    </td>
                    <td
                      class="text-[#ff6161] whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      -2.3%
                    </td>
                    <td
                      class="text-white whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      $4.97M
                    </td>
                    <td
                      class="text-white whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      <div
                        class="flex gap-3 text-base Gilroy-medium text-white items-center"
                      >
                        88%
                        <div class="w-full h-[5px] rounded-[5px] bg-[#dfe0e4]">
                          <div
                            class="w-[88%] h-full rounded-[5px] bg-btnSecondary"
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td class="py-2.5 px-6">
                      <button
                        type="button"
                        class="border-white rounded-xl border border-solid md:py-3 py-2 md:px-5 px-4 text-base text-white hover:border-[#E9901A] hover:bg-[e9901a] transition-all"
                      >
                        Trade
                      </button>
                    </td>
                  </tr>
                  <tr class="bg-[#302964]">
                    <td class="px-6 py-2.5 whitespace-nowrap">
                      <div class="flex items-center gap-3">
                        <img
                          src="./src/images/bitcoin_mid.png"
                          alt="Bitcoin"
                          class="w-6 h-6"
                        />
                        <div class="flex flex-col gap-1">
                          <p class="pt-0.5 text-base Gilroy-medium text-white">
                            Bitcoin
                          </p>
                          <p class="text-xs Gilroy-normal text-white">BTC</p>
                        </div>
                      </div>
                    </td>
                    <td
                      class="text-white whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      $516,55
                    </td>
                    <td
                      class="text-[#00a385] whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      +7.4%
                    </td>
                    <td
                      class="text-[#bd7b00] whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      +27.3%
                    </td>
                    <td
                      class="text-[#ff6161] whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      -2.3%
                    </td>
                    <td
                      class="text-white whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      $4.97M
                    </td>
                    <td
                      class="text-white whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      <div
                        class="flex gap-3 text-base Gilroy-medium text-white items-center"
                      >
                        96%
                        <div class="w-full h-[5px] rounded-[5px] bg-[#dfe0e4]">
                          <div
                            class="w-[96%] h-full rounded-[5px] bg-btnSecondary"
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td class="py-2.5 px-6">
                      <button
                        type="button"
                        class="border-white rounded-xl border border-solid md:py-3 py-2 md:px-5 px-4 text-base text-white hover:border-[#E9901A] hover:bg-[e9901a] transition-all"
                      >
                        Trade
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-2.5 whitespace-nowrap">
                      <div class="flex items-center gap-3">
                        <img
                          src="./src/images/cardano_mid.png"
                          alt="Cardano"
                          class="w-6 h-6"
                        />
                        <div class="flex flex-col gap-1">
                          <p class="pt-0.5 text-base Gilroy-medium text-white">
                            Cardano
                          </p>
                          <p class="text-xs Gilroy-normal text-white">ADA</p>
                        </div>
                      </div>
                    </td>
                    <td
                      class="text-white whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      $516,55
                    </td>
                    <td
                      class="text-[#00a385] whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      +7.4%
                    </td>
                    <td
                      class="text-[#bd7b00] whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      +27.3%
                    </td>
                    <td
                      class="text-[#ff6161] whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      -2.3%
                    </td>
                    <td
                      class="text-white whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      $4.97M
                    </td>
                    <td
                      class="text-white whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      <div
                        class="flex gap-3 text-base Gilroy-medium text-white items-center"
                      >
                        33%
                        <div class="w-full h-[5px] rounded-[5px] bg-[#dfe0e4]">
                          <div
                            class="w-[33%] h-full rounded-[5px] bg-btnSecondary"
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td class="py-2.5 px-6">
                      <button
                        type="button"
                        class="border-white rounded-xl border border-solid md:py-3 py-2 md:px-5 px-4 text-base text-white hover:border-[#E9901A] hover:bg-[e9901a] transition-all"
                      >
                        Trade
                      </button>
                    </td>
                  </tr>
                  <tr class="bg-[#302964]">
                    <td class="px-6 py-2.5 whitespace-nowrap">
                      <div class="flex items-center gap-3">
                        <img
                          src="./src/images/bitcoin_mid.png"
                          alt="Bitcoin"
                          class="w-6 h-6"
                        />
                        <div class="flex flex-col gap-1">
                          <p class="pt-0.5 text-base Gilroy-medium text-white">
                            Bitcoin
                          </p>
                          <p class="text-xs Gilroy-normal text-white">BTC</p>
                        </div>
                      </div>
                    </td>
                    <td
                      class="text-white whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      $516,55
                    </td>
                    <td
                      class="text-[#00a385] whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      +7.4%
                    </td>
                    <td
                      class="text-[#bd7b00] whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      +27.3%
                    </td>
                    <td
                      class="text-[#ff6161] whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      -2.3%
                    </td>
                    <td
                      class="text-white whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      $4.97M
                    </td>
                    <td
                      class="text-white whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      <div
                        class="flex gap-3 text-base Gilroy-medium text-white items-center"
                      >
                        44%
                        <div class="w-full h-[5px] rounded-[5px] bg-[#dfe0e4]">
                          <div
                            class="w-[44%] h-full rounded-[5px] bg-btnSecondary"
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td class="py-2.5 px-6">
                      <button
                        type="button"
                        class="border-white rounded-xl border border-solid md:py-3 py-2 md:px-5 px-4 text-base text-white hover:border-[#E9901A] hover:bg-[e9901a] transition-all"
                      >
                        Trade
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-2.5 whitespace-nowrap">
                      <div class="flex items-center gap-3">
                        <img
                          src="./src/images/bnb.png"
                          alt="BNB"
                          class="w-6 h-6"
                        />
                        <div class="flex flex-col gap-1">
                          <p class="pt-0.5 text-base Gilroy-medium text-white">
                            Binance
                          </p>
                          <p class="text-xs Gilroy-normal text-white">BNB</p>
                        </div>
                      </div>
                    </td>
                    <td
                      class="text-white whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      $516,55
                    </td>
                    <td
                      class="text-[#00a385] whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      +7.4%
                    </td>
                    <td
                      class="text-[#bd7b00] whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      +27.3%
                    </td>
                    <td
                      class="text-[#ff6161] whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      -2.3%
                    </td>
                    <td
                      class="text-white whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      $4.97M
                    </td>
                    <td
                      class="text-white whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      <div
                        class="flex gap-3 text-base Gilroy-medium text-white items-center"
                      >
                        44%
                        <div class="w-full h-[5px] rounded-[5px] bg-[#dfe0e4]">
                          <div
                            class="w-[44%] h-full rounded-[5px] bg-btnSecondary"
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td class="py-2.5 px-6">
                      <button
                        type="button"
                        class="border-white rounded-xl border border-solid md:py-3 py-2 md:px-5 px-4 text-base text-white hover:border-[#E9901A] hover:bg-[e9901a] transition-all"
                      >
                        Trade
                      </button>
                    </td>
                  </tr>
                  <tr class="bg-[#302964]">
                    <td class="px-6 py-2.5 whitespace-nowrap">
                      <div class="flex items-center gap-3">
                        <img
                          src="./src/images/bitcoin_mid.png"
                          alt="Bitcoin"
                          class="w-6 h-6"
                        />
                        <div class="flex flex-col gap-1">
                          <p class="pt-0.5 text-base Gilroy-medium text-white">
                            Bitcoin
                          </p>
                          <p class="text-xs Gilroy-normal text-white">BTC</p>
                        </div>
                      </div>
                    </td>
                    <td
                      class="text-white whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      $516,55
                    </td>
                    <td
                      class="text-[#00a385] whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      +7.4%
                    </td>
                    <td
                      class="text-[#bd7b00] whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      +27.3%
                    </td>
                    <td
                      class="text-[#ff6161] whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      -2.3%
                    </td>
                    <td
                      class="text-white whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      $4.97M
                    </td>
                    <td
                      class="text-white whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      <div
                        class="flex gap-3 text-base Gilroy-medium text-white items-center"
                      >
                        85%
                        <div class="w-full h-[5px] rounded-[5px] bg-[#dfe0e4]">
                          <div
                            class="w-[85%] h-full rounded-[5px] bg-btnSecondary"
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td class="py-2.5 px-6">
                      <button
                        type="button"
                        class="border-white rounded-xl border border-solid md:py-3 py-2 md:px-5 px-4 text-base text-white hover:border-[#E9901A] hover:bg-[e9901a] transition-all"
                      >
                        Trade
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-2.5 whitespace-nowrap">
                      <div class="flex items-center gap-3">
                        <img
                          src="./src/images/cardano_mid.png"
                          alt="Cardano"
                          class="w-6 h-6"
                        />
                        <div class="flex flex-col gap-1">
                          <p class="pt-0.5 text-base Gilroy-medium text-white">
                            Cardano
                          </p>
                          <p class="text-xs Gilroy-normal text-white">ADA</p>
                        </div>
                      </div>
                    </td>
                    <td
                      class="text-white whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      $516,55
                    </td>
                    <td
                      class="text-[#00a385] whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      +7.4%
                    </td>
                    <td
                      class="text-[#bd7b00] whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      +27.3%
                    </td>
                    <td
                      class="text-[#ff6161] whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      -2.3%
                    </td>
                    <td
                      class="text-white whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      $4.97M
                    </td>
                    <td
                      class="text-white whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      <div
                        class="flex gap-3 text-base Gilroy-medium text-white items-center"
                      >
                        74%
                        <div class="w-full h-[5px] rounded-[5px] bg-[#dfe0e4]">
                          <div
                            class="w-[74%] h-full rounded-[5px] bg-btnSecondary"
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td class="py-2.5 px-6">
                      <button
                        type="button"
                        class="border-white rounded-xl border border-solid md:py-3 py-2 md:px-5 px-4 text-base text-white hover:border-[#E9901A] hover:bg-[e9901a] transition-all"
                      >
                        Trade
                      </button>
                    </td>
                  </tr>
                  <tr class="bg-[#302964]">
                    <td class="px-6 py-2.5 whitespace-nowrap">
                      <div class="flex items-center gap-3">
                        <img
                          src="./src/images/electro.png"
                          alt="Electro"
                          class="w-6 h-6"
                        />
                        <div class="flex flex-col gap-1">
                          <p class="pt-0.5 text-base Gilroy-medium text-white">
                            Electro
                          </p>
                          <p class="text-xs Gilroy-normal text-white">ETN</p>
                        </div>
                      </div>
                    </td>
                    <td
                      class="text-white whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      $516,55
                    </td>
                    <td
                      class="text-[#00a385] whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      +7.4%
                    </td>
                    <td
                      class="text-[#bd7b00] whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      +27.3%
                    </td>
                    <td
                      class="text-[#ff6161] whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      -2.3%
                    </td>
                    <td
                      class="text-white whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      $4.97M
                    </td>
                    <td
                      class="text-white whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      <div
                        class="flex gap-3 text-base Gilroy-medium text-white items-center"
                      >
                        74%
                        <div class="w-full h-[5px] rounded-[5px] bg-[#dfe0e4]">
                          <div
                            class="w-[74%] h-full rounded-[5px] bg-btnSecondary"
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td class="py-2.5 px-6">
                      <button
                        type="button"
                        class="border-white rounded-xl border border-solid md:py-3 py-2 md:px-5 px-4 text-base text-white hover:border-[#E9901A] hover:bg-[e9901a] transition-all"
                      >
                        Trade
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-2.5 whitespace-nowrap">
                      <div class="flex items-center gap-3">
                        <img
                          src="./src/images/chain_mid.png"
                          alt="Chain"
                          class="w-6 h-6"
                        />
                        <div class="flex flex-col gap-1">
                          <p class="pt-0.5 text-base Gilroy-medium text-white">
                            Linkchain
                          </p>
                          <p class="text-xs Gilroy-normal text-white">CHAIN</p>
                        </div>
                      </div>
                    </td>
                    <td
                      class="text-white whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      $516,55
                    </td>
                    <td
                      class="text-[#00a385] whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      +7.4%
                    </td>
                    <td
                      class="text-[#bd7b00] whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      +27.3%
                    </td>
                    <td
                      class="text-[#ff6161] whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      -2.3%
                    </td>
                    <td
                      class="text-white whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      $4.97M
                    </td>
                    <td
                      class="text-white whitespace-nowrap py-2.5 px-6 text-base Gilroy-medium"
                    >
                      <div
                        class="flex gap-3 text-base Gilroy-medium text-white items-center"
                      >
                        50%
                        <div class="w-full h-[5px] rounded-[5px] bg-[#dfe0e4]">
                          <div
                            class="w-6/12 h-full rounded-[5px] bg-btnSecondary"
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td class="py-2.5 px-6">
                      <button
                        type="button"
                        class="border-white rounded-xl border border-solid md:py-3 py-2 md:px-5 px-4 text-base text-white hover:border-[#E9901A] hover:bg-[e9901a] transition-all"
                      >
                        Trade
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="mt-5 flex flex-wrap justify-between gap-3 items-center">
              <p class="text-white text-sm md:text-base Gilroy-normal">
                Showing 1 to 12 of 100 entries
              </p>
              <ul class="flex items-center gap-2">
                <li
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
                    />
                  </svg>
                </li>
                <li
                  class="w-8 h-8 md:w-10 md:h-10 flex text-base text-white Gilroy-medium items-center justify-center rounded-lg border border-white hover:bg-transparent bg-btnSecondary transition-all pt-0.5"
                >
                  1
                </li>
                <li
                  class="w-8 h-8 md:w-10 md:h-10 flex text-base text-white Gilroy-medium items-center justify-center rounded-lg border border-white bg-transparent hover:bg-[#E9901A] transition-all pt-0.5"
                >
                  2
                </li>
                <li
                  class="w-8 h-8 md:w-10 md:h-10 flex text-base text-white Gilroy-medium items-center justify-center rounded-lg border border-white bg-transparent hover:bg-[#E9901A] transition-all pt-0.5"
                >
                  ...
                </li>
                <li
                  class="w-8 h-8 md:w-10 md:h-10 flex text-base text-white Gilroy-medium items-center justify-center rounded-lg border border-white bg-transparent hover:bg-[#E9901A] transition-all pt-0.5"
                >
                  5
                </li>
                <li
                  class="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg border border-white hover:bg-transparent bg-btnSecondary transition-all"
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
                    />
                  </svg>
                </li>
              </ul>
            </div> -->

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
</template>

<script lang="ts">
export default {
  name: "BalanceView", // Changed from "Balance" to "BalanceView"
};
</script>
