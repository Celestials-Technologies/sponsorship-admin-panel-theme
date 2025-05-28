<template>
  <div class="border border-white bg-gradient p-6 rounded-xl">
    <div
      class="border-b border-dashed border-white pb-6 mb-6 flex gap-1 justify-between items-center"
    >
      <h4 class="text-xl md:text-2xl text-white Gilroy-semibold">
        Subscriptions
      </h4>
      <div class="flex items-center gap-1">
        <ArrowUpTrend color="#8957ff" />
        <p class="text-base text-[#8957ff] Gilroy-normal pt-0.5">15.4%</p>
      </div>
    </div>
    <div
      v-if="subscriptions.length > 0"
      class="border border-translucentWhite w-full max-w-full bg-sideBarBg p-4 rounded-xl mb-4"
    >
      <div class="flex gap-5">
        <img
          :src="subscriptions[0].icon"
          :alt="subscriptions[0].name"
          class="w-6 h-6"
        />
        <p class="text-[18px] md:text-xl text-white Gilroy-medium">
          {{ subscriptions[0].name }}
        </p>
      </div>
      <p class="pt-4 text-xl md:text-2xl Gilroy-semibold text-white">
        {{ subscriptions[0].price }}
      </p>
    </div>

    <div id="subscriptionData" class="flex flex-col gap-4">
      <template
        v-for="(subscription, index) in subscriptions.slice(1)"
        :key="index"
      >
        <div class="border border-translucentWhite p-4 rounded-xl">
          <div class="flex gap-5">
            <img
              :src="subscription.icon"
              :alt="subscription.name"
              class="w-6 h-6"
            />
            <p class="text-[18px] md:text-xl text-white Gilroy-medium">
              {{ subscription.name }}
            </p>
          </div>
          <p class="pt-4 text-xl md:text-2xl Gilroy-semibold text-white">
            {{ subscription.price }}
          </p>
        </div>
      </template>
    </div>

    <a href="./subscriptionPage.html" class="flex items-center mt-6 gap-2">
      <p class="text-base !text-[#E9901A] Gilroy-medium">
        Manage subscriptions
      </p>
      <ArrowRightNav color="#E9901A" />
    </a>
  </div>
</template>

<script setup lang="ts">
import ArrowRightNav from "@/shared/ui/Icons/svgs/dashboardSvgs/ArrowRightNav.vue";
import ArrowUpTrend from "@/shared/ui/Icons/svgs/dashboardSvgs/ArrowUpTrend.vue";
import type { SubscriptionData } from "@/features/dashboard/model/types";

defineProps<{
  subscriptions: SubscriptionData[];
}>();
</script>
