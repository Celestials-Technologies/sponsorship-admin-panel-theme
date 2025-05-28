<script lang="ts">
export default {
  name: "HeaderNotifications",
};
</script>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useClickOutside } from "@/shared/composables/useClickOutside";
import BellIcon from "@/shared/ui/Icons/svgs/BellIcon.vue";
import NotificationsList from "./NotificationsList.vue";
import { notifications } from "../model/config";

const showNotifications = ref(false);
const notificationsRef = ref<HTMLElement | null>(null);

const unreadCount = computed(() =>
  notifications.reduce(
    (acc, notification) => acc + (notification.count || 0),
    0
  )
);

const toggleNotifications = () => {
  showNotifications.value = !showNotifications.value;
};

useClickOutside(notificationsRef, () => {
  showNotifications.value = false;
});
</script>

<template>
  <div class="relative hidden md:block" ref="notificationsRef">
    <Button
      variant="none"
      @click="toggleNotifications"
      class="p-1 cursor-pointer iconMainBox rounded-lg"
      aria-label="Notifications"
      :aria-expanded="showNotifications"
    >
      <BellIcon />
      <span v-if="unreadCount" class="notification-badge">{{
        unreadCount
      }}</span>
    </Button>

    <div
      v-show="showNotifications"
      class="absolute right-0 bg-bgPrimary rounded-lg px-2 py-1 border border-solid border-white w-[300px] mt-2.5"
      role="dialog"
      aria-label="Notifications panel"
    >
      <NotificationsList :notifications="notifications" />
    </div>
  </div>
</template>

<style scoped>
.notification-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  background-color: red;
  color: white;
  font-size: 11px;
  border-radius: 50%;
  width: 16px;
  height: 16px;
}
</style>
