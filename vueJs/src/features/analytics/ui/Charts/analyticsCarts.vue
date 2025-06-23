<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
    <template v-for="chart in chartData" :key="chart.title">
      <ConversionCarts :title="chart.title" />
    </template>
  </div>
</template>
<script setup lang="ts">
import ConversionCarts from "./ConversionCarts/ConversionCarts.vue";

const chartData = [
  {
    title: "BTC to EUR Chart",
  },
  {
    title: "ADA to USD Chart",
  },
  {
    title: "BTC to EUR Chart",
  },
  {
    title: "Asset Allocation",
  },
];
</script>
