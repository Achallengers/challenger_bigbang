<template>
  <div class="sidebar-right">
    <h6>Tarefas de Hoje</h6>
    <div class="row">
      <div class="col-12">
        <Card></Card>
      </div>
    </div>
    <h6>Projeto Recente</h6>
  </div>
</template>

<script scoped>
import Card from "../components/card.vue";

export default {
  components: {
    Card,
  },
};
</script>

<style>
.sidebar-right {
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #e0e0e0;
}
</style>
