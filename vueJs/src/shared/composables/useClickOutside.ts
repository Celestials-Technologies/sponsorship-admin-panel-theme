import { onMounted, onUnmounted, Ref } from "vue";

interface ClickOutsideOptions {
  exclude?: (event: MouseEvent) => boolean;
}

export function useClickOutside(
  elementRef: Ref<HTMLElement | null>,
  callback: () => void,
  options: ClickOutsideOptions = {}
) {
  const handleClickOutside = (event: MouseEvent) => {
    // Check if we should exclude this click
    if (options.exclude && options.exclude(event)) {
      return;
    }

    // Check if the click was outside the element
    if (elementRef.value && !elementRef.value.contains(event.target as Node)) {
      callback();
    }
  };

  onMounted(() => {
    document.addEventListener("click", handleClickOutside);
  });

  onUnmounted(() => {
    document.removeEventListener("click", handleClickOutside);
  });

  return {
    handleClickOutside,
  };
}
