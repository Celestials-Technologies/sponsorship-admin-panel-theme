<template>
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
    <div class="md:mt-10 mt-7 flex gap-3">
      <Button
        type="button"
        variant="none"
        @click="makeACard"
        class="group px-2 md:px-4 py-3 flex justify-center items-center md:gap-3 gap-2 border border-solid border-borderColor transition-all hover:bg-borderColor rounded-xl walletTopUp"
      >
        <Icon icon="heroicons:plus" width="20" height="20" />
        <Typography
          variant="p"
          class="!text-[#E9901A] group-hover:!text-white text-sm md:text-base Gilroy-medium whitespace-nowrap"
        >
          New Card
        </Typography>
      </Button>
      <Button
        type="button"
        variant="none"
        @click="manageBtn"
        class="px-4 md:px-5 md:py-4 py-3 flex justify-center items-center md:gap-3 gap-2 border border-solid border-borderColor transition-all hover:bg-borderColor rounded-xl walletTopUp"
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
        <p class="text-white text-sm md:text-base Gilroy-medium">Manage</p>
      </Button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Button } from "@/shared/ui/button";
import { Icon } from "@iconify/vue";
import { Typography } from "@/shared/ui/typography";

const makeACard = () => {
  console.log("makeACard");
};

const manageBtn = () => {
  console.log("manageBtn");
};
</script>
