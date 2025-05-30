<template>
  <component
    :is="isExternal ? 'a' : 'RouterLink'"
    :href="isExternal ? to : undefined"
    :to="!isExternal ? to : undefined"
    v-bind="$attrs"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    class="text-blue-600 hover:underline"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { toRefs } from "vue";

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
});

const { to } = toRefs(props);
const isExternal = computed(() => /^https?:\/\//.test(to.value));
</script>
