<script lang="ts">
export default {
  name: "NotificationsList",
};
</script>

<script setup lang="ts">
import { type Notification } from "../model/types";
import { ref } from "vue";

defineProps<{
  notifications: Notification[];
}>();

const selectedNotificationId = ref<number | null>(null);

const handleNotificationClick = (notificationId: number) => {
  selectedNotificationId.value = notificationId;
};
</script>

<template>
  <ul class="divide-y divide-gray-700">
    <li
      v-for="notification in notifications"
      :key="notification.id"
      @click="handleNotificationClick(notification.id)"
      :class="[
        'text-base Gilroy-normal p-2 text-white w-full rounded-lg flex items-center gap-3 justify-between cursor-pointer',
        selectedNotificationId === notification.id
          ? 'bg-[#E9901A]'
          : 'hover:bg-[#E9901A]',
      ]"
    >
      <div class="flex items-center gap-2">
        <img
          :src="notification.avatar"
          :alt="`${notification.name}'s avatar`"
          class="w-8 h-8 rounded-full"
        />
        <div>
          <p class="font-medium text-start">{{ notification.name }}</p>
          <p class="text-sm text-gray-300 text-start">
            {{ notification.message }}
          </p>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <span v-if="notification.count" class="notification-count">
          {{ notification.count }}
        </span>
        <span class="text-sm text-gray-400">{{ notification.time }}</span>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.notification-count {
  @apply bg-primary text-white text-xs rounded-full px-1.5 py-0.5 min-w-[20px] text-center;
}
</style>
