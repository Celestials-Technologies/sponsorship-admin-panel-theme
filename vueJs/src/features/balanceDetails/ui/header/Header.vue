<template>
  <div
    class="flex border-b border-dashed border-[#e5e5e585] pb-4 mb-4 items-center gap-3 justify-between"
  >
    <Typography color="white" variant="h3">{{ props.title }}</Typography>
    <div class="relative">
      <Button
        type="button"
        variant="none"
        style="min-width: auto"
        onclick="detailsBtn(this)"
        class="chooseOption"
      >
        <VerticalEllipsis />
      </Button>
      <div
        class="absolute top-3 right-[27px] min-w-[140px] bg-bgPrimary rounded-lg text-sm md:text-base text-white Gilroy-normal p-3 grid"
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
</template>
<script setup lang="ts">
import VerticalEllipsis from "@/shared/ui/Icons/svgs/VerticalEllipsis.vue";
import Typography from "@/shared/ui/typography/Typography.vue";
import Button from "@/shared/ui/button/Button.vue";
const props = defineProps<{
  title: string;
}>();
</script>
