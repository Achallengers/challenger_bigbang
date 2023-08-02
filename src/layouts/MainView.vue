<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="main-content">
    <RouterView />
  </div>
</template>

<style>
.main-content {
  padding: 10px;
  border: 1px solid #3333;
}
</style>
