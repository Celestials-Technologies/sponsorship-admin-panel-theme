<template>
  <div class="transition-all duration-300 relative z-[99999] fixed top-0">
    <div
      class="w-full py-[9px] md:pr-[18px] md:px-[33px] rounded-[15px] flex justify-between items-center gap-2.5 bg-sideBarBg border border-translucentWhite px-3 backdrop-blur-sm relative"
    >
      <div class="flex items-center gap-5 justify-between w-full">
        <div class="flex gap-3 items-center">
          <button
            type="button"
            class="hover:opacity-80 transition-opacity"
            @click="toggleSidebar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 51 35"
              fill="none"
            >
              <path
                d="M2.46774 0C1.10486 0 0 1.23712 0 2.76316C0 4.28919 1.10486 5.52632 2.46774 5.52632V0ZM48.5323 5.52632C49.8951 5.52632 51 4.28919 51 2.76316C51 1.23712 49.8951 0 48.5323 0V5.52632ZM2.46774 14.7368C1.10486 14.7368 0 15.974 0 17.5C0 19.026 1.10486 20.2632 2.46774 20.2632V14.7368ZM41.9516 20.2632C43.3145 20.2632 44.4194 19.026 44.4194 17.5C44.4194 15.974 43.3145 14.7368 41.9516 14.7368V20.2632ZM2.46774 29.4737C1.10486 29.4737 0 30.7108 0 32.2368C0 33.7628 1.10486 35 2.46774 35V29.4737ZM25.5 35C26.8629 35 27.9677 33.7628 27.9677 32.2368C27.9677 30.7108 26.8629 29.4737 25.5 29.4737V35ZM2.46774 5.52632H48.5323V0H2.46774V5.52632ZM2.46774 20.2632H41.9516V14.7368H2.46774V20.2632ZM2.46774 35H25.5V29.4737H2.46774V35Z"
                fill="white"
              />
            </svg>
          </button>
          <div
            class="bg-sideBarBg border border-translucentWhite py-1.5 pl-5 pr-2 gap-4 rounded-full flex items-center hidden md:flex"
          >
            <input
              type="text"
              placeholder="Search"
              class="text-base bg-transparent leading-6 text-white outline-none Gilroy-medium max-w-[195px]"
            />
            <div
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
        </div>
        <div class="gap-3 flex items-center">
          <button
            type="button"
            @click="connectWallet"
            class="py-1 pt-1.5 px-2 bg-btnSecondary text-base text-white border border-solid border-white hover:border-[#E9901A] rounded-lg cursor-pointer hover:bg-white transition-all duration-[0.5s] hover:text-[#E9901A] Gilroy-normal"
          >
            Connect
          </button>
          <!-- Mobile search -->
          <div
            class="bg-sideBarBg md:border border-translucentWhite md:py-1.5 p-0 md:pl-5 md:pr-2 gap-4 rounded-full flex items-center md:hidden"
          >
            <input
              type="text"
              placeholder="Search"
              class="text-base bg-transparent leading-6 text-white outline-none Gilroy-medium hidden md:block"
            />
            <div
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

          <!-- Theme toggle -->
          <button
            type="button"
            class="p-1 cursor-pointer iconMainBox rounded-lg hidden md:block"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 15.8442C20.6866 16.4382 19.2286 16.7688 17.6935 16.7688C11.9153 16.7688 7.23116 12.0847 7.23116 6.30654C7.23116 4.77135 7.5618 3.3134 8.15577 2C4.52576 3.64163 2 7.2947 2 11.5377C2 17.3159 6.68414 22 12.4623 22C16.7053 22 20.3584 19.4742 22 15.8442Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          <!-- Notification -->

          <div class="relative hidden md:block" ref="notificationsRef">
            <button
              type="button"
              @click="toggleNotifications"
              class="p-1 cursor-pointer iconMainBox rounded-lg"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.35419 21C10.0593 21.6224 10.9856 22 12 22C13.0145 22 13.9407 21.6224 14.6458 21M18 8C18 6.4087 17.3679 4.88258 16.2427 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.8826 2.63214 7.75738 3.75736C6.63216 4.88258 6.00002 6.4087 6.00002 8C6.00002 11.0902 5.22049 13.206 4.34968 14.6054C3.61515 15.7859 3.24788 16.3761 3.26134 16.5408C3.27626 16.7231 3.31488 16.7926 3.46179 16.9016C3.59448 17 4.19261 17 5.38887 17H18.6112C19.8074 17 20.4056 17 20.5382 16.9016C20.6852 16.7926 20.7238 16.7231 20.7387 16.5408C20.7522 16.3761 20.3849 15.7859 19.6504 14.6054C18.7795 13.206 18 11.0902 18 8Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <!-- Notification dropdown -->
            <div
              v-show="showNotifications"
              class="absolute right-0 bg-bgPrimary rounded-lg px-2 py-1 border border-solid border-white w-[300px]"
              style="margin-top: 10px"
              ref="notificationsRef"
            >
              <div
                v-for="notification in notifications"
                :key="notification.id"
                class="text-base Gilroy-normal hover:bg-[#E9901A] p-1 text-white w-full rounded-lg flex items-center gap-3 justify-between"
              >
                <div class="flex items-center gap-3">
                  <a href="/#">
                    <img
                      :src="notification.avatar"
                      :alt="notification.name"
                      class="w-10 h-10 object-cover rounded-full"
                    />
                  </a>
                  <div class="flex flex-col gap-1 items-start">
                    {{ notification.name }}
                    <p class="text-xs text-white Gilroy-normal">
                      {{ notification.message }}
                    </p>
                  </div>
                </div>
                <div class="flex flex-col gap-1 items-center">
                  <div
                    v-if="notification.count"
                    class="p-1 w-5 h-5 flex items-center justify-center text-sm pb-[3px] bg-[#E9901A] rounded-full"
                  >
                    {{ notification.count }}
                  </div>
                  <p class="text-sm text-white Gilroy-normal">
                    {{ notification.time }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Country selector -->
          <div class="relative hidden md:block" ref="countrySelectRef">
            <button
              type="button"
              @click="toggleCountrySelect"
              class="p-1 cursor-pointer iconMainBox rounded-full"
            >
              <img
                :src="selectedCountry.flag"
                :alt="selectedCountry.name"
                class="rounded-full w-5 h-5"
              />
            </button>
            <!-- Country dropdown -->

            <div
              v-show="showCountrySelect"
              class="absolute right-0 bg-bgPrimary rounded-lg px-2 py-1 border border-solid border-white w-[130px]"
              style="margin-top: 10px"
              ref="countrySelectRef"
            >
              <button
                v-for="country in countries"
                :key="country.name"
                type="button"
                class="text-base Gilroy-normal hover:bg-[#E9901A] p-1 text-white w-full rounded-lg flex items-center gap-3"
                @click="selectCountry(country)"
              >
                <img
                  :src="country.flag"
                  :alt="country.name"
                  class="rounded-full w-5 h-5"
                />
                <p class="text-sm text-white Gilroy-normal">
                  {{ country.name }}
                </p>
              </button>
            </div>
          </div>

          <!-- Profile -->

          <div class="hidden md:block" ref="profileRef">
            <button
              type="button"
              @click="toggleProfile"
              class="p-0 cursor-pointer iconMainBox rounded-full w-[30px] h-[30px] relative top-[2px]"
            >
              <img
                src="/images/profile-img.png"
                alt="Profile"
                class="w-full h-full"
              />
            </button>
            <!-- Profile dropdown -->
            <div
              v-show="showProfile"
              class="absolute right-0 bg-bgPrimary rounded-lg px-2 py-1 border border-solid border-white w-[219px]"
              style="margin-top: 10px"
              ref="profileRef"
            >
              <a
                v-for="item in profileMenu"
                :key="item.name"
                :href="item.link"
                class="text-base Gilroy-normal hover:bg-[#E9901A] p-1 text-white w-full rounded-lg flex items-center gap-3"
              >
                <component :is="item.icon" />
                {{ item.name }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "AppHeader",
};
</script>

<script setup lang="ts">
import {
  ref,
  defineComponent,
  defineProps,
  defineEmits,
  onMounted,
  onUnmounted,
} from "vue";
import australiaFlag from "@/assets/flags/australia.png";
import italyFlag from "@/assets/flags/italy.png";
import franceFlag from "@/assets/flags/france.png";
import brazilFlag from "@/assets/flags/brazil.png";
import canadaFlag from "@/assets/flags/canada.png";
import chinaFlag from "@/assets/flags/china.png";
import { useClickOutside } from "@/composables/useClickOutside";

interface Props {
  isSidebarVisible: boolean;
}
const props = defineProps<Props>();
const emit = defineEmits<{
  (e: "toggle-sidebar"): void;
}>();

interface Country {
  name: string;
  flag: string;
}

interface Notification {
  id: number;
  name: string;
  message: string;
  avatar: string;
  count?: number;
  time: string;
}

interface MenuItem {
  name: string;
  link: string;
  icon: ReturnType<typeof defineComponent>;
}

const showNotifications = ref(false);
const showCountrySelect = ref(false);
const showProfile = ref(false);

const notifications = ref<Notification[]>([
  {
    id: 1,
    name: "Theresa Webb",
    message: "just ideas for next time",
    avatar: "images/user_profile10.png",
    count: 5,
    time: "4m",
  },
  {
    id: 2,
    name: "Bessie Cooper",
    message: "omg, this is amazing",
    avatar: "images/user_profile9.png",
    count: 1,
    time: "5m",
  },
  {
    id: 3,
    name: "Jerome Bell",
    message: "woohoooo",
    avatar: "images/user_profile3.png",
    count: 3,
    time: "10m",
  },
]);

const countries = ref<Country[]>([
  { name: "Australia", flag: australiaFlag },
  { name: "Italy", flag: italyFlag },
  { name: "France", flag: franceFlag },
  { name: "Brazil", flag: brazilFlag },
  { name: "Canada", flag: canadaFlag },
  { name: "China", flag: chinaFlag },
]);

const selectedCountry = ref<Country>(countries.value[0]);

const profileMenu = ref<MenuItem[]>([
  {
    name: "Account",
    link: "account",
    icon: defineComponent({
      template: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
    }),
  },
  {
    name: "Setting",
    link: "setting",
    icon: defineComponent({
      template: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18.7273 14.7273C18.6063 15.0015 18.5702 15.3056 18.6236 15.6005C18.6771 15.8954 18.8177 16.1676 19.0273 16.3818L19.0818 16.4364C19.2509 16.6052 19.385 16.8057 19.4765 17.0265C19.568 17.2472 19.6151 17.4838 19.6151 17.7227C19.6151 17.9617 19.568 18.1983 19.4765 18.419C19.385 18.6397 19.2509 18.8402 19.0818 19.0091C18.913 19.1781 18.7124 19.3122 18.4917 19.4037C18.271 19.4952 18.0344 19.5423 17.7955 19.5423C17.5565 19.5423 17.3199 19.4952 17.0992 19.4037C16.8785 19.3122 16.678 19.1781 16.5091 19.0091L16.4545 18.9545C16.2403 18.745 15.9682 18.6044 15.6733 18.5509C15.3784 18.4974 15.0742 18.5335 14.8 18.6545C14.5311 18.7698 14.3018 18.9611 14.1403 19.205C13.9788 19.4489 13.8921 19.7347 13.8909 20.0273V20.1818C13.8909 20.664 13.6994 21.1265 13.3584 21.4675C13.0174 21.8084 12.5549 22 12.0727 22C11.5905 22 11.1281 21.8084 10.7871 21.4675C10.4461 21.1265 10.2545 20.664 10.2545 20.1818V20.1C10.2475 19.7991 10.1501 19.5073 9.97501 19.2625C9.79991 19.0176 9.55521 18.8312 9.27273 18.7273C8.99853 18.6063 8.69437 18.5702 8.39947 18.6236C8.10456 18.6771 7.83244 18.8177 7.61818 19.0273L7.56364 19.0818C7.39478 19.2509 7.19425 19.385 6.97353 19.4765C6.7528 19.568 6.51621 19.6151 6.27727 19.6151C6.03834 19.6151 5.80174 19.568 5.58102 19.4765C5.36029 19.385 5.15977 19.2509 4.99091 19.0818C4.82186 18.913 4.68775 18.7124 4.59626 18.4917C4.50476 18.271 4.45766 18.0344 4.45766 17.7955C4.45766 17.5565 4.50476 17.3199 4.59626 17.0992C4.68775 16.8785 4.82186 16.678 4.99091 16.5091L5.04545 16.4545C5.25503 16.2403 5.39562 15.9682 5.4491 15.6733C5.50257 15.3784 5.46647 15.0742 5.34545 14.8C5.23022 14.5311 5.03887 14.3018 4.79497 14.1403C4.55107 13.9788 4.26526 13.8921 3.97273 13.8909H3.81818C3.33597 13.8909 2.87351 13.6994 2.53253 13.3584C2.19156 13.0174 2 12.5549 2 12.0727C2 11.5905 2.19156 11.1281 2.53253 10.7871C2.87351 10.4461 3.33597 10.2545 3.81818 10.2545H3.9C4.2009 10.2475 4.49273 10.1501 4.73754 9.97501C4.98236 9.79991 5.16883 9.55521 5.27273 9.27273C5.39374 8.99853 5.42984 8.69437 5.37637 8.39947C5.3229 8.10456 5.18231 7.83244 4.97273 7.61818L4.91818 7.56364C4.74913 7.39478 4.61503 7.19425 4.52353 6.97353C4.43203 6.7528 4.38493 6.51621 4.38493 6.27727C4.38493 6.03834 4.43203 5.80174 4.52353 5.58102C4.61503 5.36029 4.74913 5.15977 4.91818 4.99091C5.08704 4.82186 5.28757 4.68775 5.50829 4.59626C5.72901 4.50476 5.96561 4.45766 6.20455 4.45766C6.44348 4.45766 6.68008 4.50476 6.9008 4.59626C7.12152 4.68775 7.32205 4.82186 7.49091 4.99091L7.54545 5.04545C7.75971 5.25503 8.03183 5.39562 8.32674 5.4491C8.62164 5.50257 8.9258 5.46647 9.2 5.34545H9.27273C9.54161 5.23022 9.77093 5.03887 9.93245 4.79497C10.094 4.55107 10.1807 4.26526 10.1818 3.97273V3.81818C10.1818 3.33597 10.3734 2.87351 10.7144 2.53253C11.0553 2.19156 11.5178 2 12 2C12.4822 2 12.9447 2.19156 13.2856 2.53253C13.6266 2.87351 13.8182 3.33597 13.8182 3.81818V3.9C13.8193 4.19253 13.906 4.47834 14.0676 4.72224C14.2291 4.96614 14.4584 5.15749 14.7273 5.27273C15.0015 5.39374 15.3056 5.42984 15.6005 5.37637C15.8954 5.3229 16.1676 5.18231 16.3818 4.97273L16.4364 4.91818C16.6052 4.74913 16.8057 4.61503 17.0265 4.52353C17.2472 4.43203 17.4838 4.38493 17.7227 4.38493C17.9617 4.38493 18.1983 4.43203 18.419 4.52353C18.6397 4.61503 18.8402 4.74913 19.0091 4.91818C19.1781 5.08704 19.3122 5.28757 19.4037 5.50829C19.4952 5.72901 19.5423 5.96561 19.5423 6.20455C19.5423 6.44348 19.4952 6.68008 19.4037 6.9008C19.3122 7.12152 19.1781 7.32205 19.0091 7.49091L18.9545 7.54545C18.745 7.75971 18.6044 8.03183 18.5509 8.32674C18.4974 8.62164 18.5335 8.9258 18.6545 9.2V9.27273C18.7698 9.54161 18.9611 9.77093 19.205 9.93245C19.4489 10.094 19.7347 10.1807 20.0273 10.1818H20.1818C20.664 10.1818 21.1265 10.3734 21.4675 10.7144C21.8084 11.0553 22 11.5178 22 12C22 12.4822 21.8084 12.9447 21.4675 13.2856C21.1265 13.6266 20.664 13.8182 20.1818 13.8182H20.1C19.8075 13.8193 19.5217 13.906 19.2778 14.0676C19.0339 14.2291 18.8425 14.4584 18.7273 14.7273Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
    }),
  },
  {
    name: "Password",
    link: "password",
    icon: defineComponent({
      template: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 10V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V10M12 14.5V16.5M8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C17.7202 10 16.8802 10 15.2 10H8.8C7.11984 10 6.27976 10 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
    }),
  },
  {
    name: "Media",
    link: "media",
    icon: defineComponent({
      template: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 3L8 8M16 3L15 8M22 8H2M6.8 21H17.2C18.8802 21 19.7202 21 20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.673 19.362C22 18.7202 22 17.8802 22 16.2V7.8C22 6.11984 22 5.27976 21.673 4.63803C21.3854 4.07354 20.9265 3.6146 20.362 3.32698C19.7202 3 18.8802 3 17.2 3H6.8C5.11984 3 4.27976 3 3.63803 3.32698C3.07354 3.6146 2.6146 4.07354 2.32698 4.63803C2 5.27976 2 6.11984 2 7.8V16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
    }),
  },
  {
    name: "Share",
    link: "share",
    icon: defineComponent({
      template: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 12V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V12M16 7L12 3M12 3L8 7M12 3V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
    }),
  },
  {
    name: "Logout",
    link: "logout",
    icon: defineComponent({
      template: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 17L21 12M21 12L16 7M21 12H9M9 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
    }),
  },
]);

const toggleSidebar = () => {
  emit("toggle-sidebar");
};

const toggleNotifications = () => {
  showNotifications.value = !showNotifications.value;
  showCountrySelect.value = false;
  showProfile.value = false;
};

const toggleCountrySelect = () => {
  showCountrySelect.value = !showCountrySelect.value;
  showNotifications.value = false;
  showProfile.value = false;
};

const toggleProfile = () => {
  showProfile.value = !showProfile.value;
  showNotifications.value = false;
  showCountrySelect.value = false;
};

const selectCountry = (country: Country) => {
  selectedCountry.value = country;
  showCountrySelect.value = false;
};

const connectWallet = () => {
  // Implement wallet connection
};

// Add refs for dropdown containers
const notificationsRef = ref<HTMLElement | null>(null);
const countrySelectRef = ref<HTMLElement | null>(null);
const profileRef = ref<HTMLElement | null>(null);

// Replace the handleClickOutside implementation with these:
useClickOutside(notificationsRef, () => {
  if (showNotifications.value) {
    showNotifications.value = false;
  }
});

useClickOutside(countrySelectRef, () => {
  if (showCountrySelect.value) {
    showCountrySelect.value = false;
  }
});

useClickOutside(profileRef, () => {
  if (showProfile.value) {
    showProfile.value = false;
  }
});
</script>

<style scoped>
/* .iconMainBox {
  @apply border border-solid border-white hover:border-[#E9901A] transition-all duration-[0.5s];
}

.iconMainBox svg {
  @apply text-white hover:text-[#E9901A] transition-all duration-[0.5s];
} */
</style>
