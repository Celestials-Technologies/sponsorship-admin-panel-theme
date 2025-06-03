<script setup lang="ts">
import { computed } from "vue";
import { cn } from "@/shared/lib/utils"; // Assuming you have a utility function for class merging

// Define valid HTML tag types
type TypographyTag =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "p"
  | "b"
  | "span"
  | "small"
  | "strong"
  | "em"
  | "blockquote"
  | "code"
  | "label";

interface Props {
  variant?: TypographyTag;
  className?: string;
  color?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "p",
  className: "",
  color: "black",
});

// Default Tailwind classes per variant
const defaultClasses = {
  h1: "text-4xl font-bold leading-tight",
  h2: "text-3xl font-semibold leading-tight",
  h3: "text-2xl font-medium leading-snug",
  h4: "text-xl font-medium leading-snug",
  p: "text-base leading-relaxed",
  b: "font-bold",
  span: "",
  small: "text-sm text-gray-500",
  strong: "font-semibold",
  em: "italic",
  blockquote: "border-l-4 pl-4 text-gray-600 italic",
  code: "bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono",
  label: "text-sm font-medium text-gray-700",
} as const;

const tag = computed(() => props.variant);
const classes = computed(() => {
  return cn(defaultClasses[props.variant], props.className);
});
</script>

<template>
  <component :is="tag" :class="classes" :style="{ color: props.color }">
    <slot />
  </component>
</template>
