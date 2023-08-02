<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="sidebar-left flex flex-column justify-between">
    <div>
      <div class="tittle">Big Dashboards</div>
      <ul class="button-list">
        <li>
          <RouterLink to="/">Painel</RouterLink>
        </li>
        <li>
          <RouterLink to="/projects">Projetos</RouterLink>
        </li>
        <li>
          <span>Leads</span>
        </li>
        <li>
          <span>Campanhas</span>
        </li>
        <li>
          <span>Notificações</span>
        </li>
      </ul>
    </div>

    <div class="profile flex flex-column align-center">
      <div class="photo"></div>
      <p>Meu nome é</p>
      <p>meu-email@gmail.com</p>
    </div>
  </div>
</template>

<style>
.profile p:first-of-type {
  font-weight: bold;
}
.profile .photo {
  background-color: gray;
  width: 52px;
  height: 52px;
  border-radius: 100%;
  margin-bottom: 16px;
}
.sidebar-left {
  padding: 24px;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}
.tittle {
  padding: 16px;
  font-weight: bold;
  cursor: pointer;
}

.button-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

li {
  margin-bottom: 8px;
  width: 100%;
  color: gray;
  padding: 10px;
}

li {
  display: block;
  border: none;
  border-radius: 999px; /* Defina um valor grande para ter cantos arredondados totais */
  cursor: pointer;
}

li:hover {
  background-color: #3498db;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: aliceblue;
}
</style>
