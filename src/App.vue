<script setup>
import "./assets/grid.css";
import "./assets/flex.css";
import "./assets/responsive_text.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

import SidebarRight from "./layout/SidebarRight.vue";
import Sidebar from "./layout/Sidebar.vue";
import MainView from "./layout/MainView.vue";
</script>

<template>
  <div class="dashboard">
    <Sidebar />
    <MainView />
    <SidebarRight />
  </div>
</template>

<style scoped>
.dashboard {
  display: grid;
  grid-template-columns: 16% 60% 24%;
  height: 100%;
  grid-auto-rows: minmax(100%, 100%);
  min-height: 100vh;
  max-height: 100vh;
  font-family: Nunito, sans-serif;
}

.sidebar,
.main-content {
  padding: 10px;
  border: 1px solid #ccc;
}
</style>
