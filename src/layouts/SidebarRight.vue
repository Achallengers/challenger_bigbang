<template>
  <div class="sidebar-right">
    <div class="task-today">
      <p class="title">Tarefas de Hoje</p>
      <div class="row">
        <div class="col-12">
          <CardComponent></CardComponent>
        </div>
        <div class="col-12">
          <CardComponent></CardComponent>
        </div>
      </div>
    </div>
    <div>
      <p class="title">Tarefas de Hoje</p>
      <div class="row">
        <div class="col-12">
          <CardComponent></CardComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
import CardComponent from "../components/CardComponent.vue";

export default {
  components: {
    CardComponent,
  },
};
</script>

<style>
.sidebar-right {
  padding: 24px;
  border: 1px solid #ccc;
  background-color: #e0e0e0;
}

.title {
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 16px;
}

.task-today{
  margin-bottom: 32px;
}
</style>
