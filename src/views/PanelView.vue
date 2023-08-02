<template>
  <div class="panel">
    <header class="row">
      <div class="col-9">
        <h5 class="page-title">Panel</h5>
        <p class="page-description">As ultimas atualizações de hoje</p>
      </div>
      <div class="col-3">
        <div class="action"></div>
      </div>
    </header>
    <div class="row">
      <div class="col-6">
        <Card></Card>
      </div>
      <div class="col-6">
        <Card></Card>
      </div>
    </div>
    <div class="row">
      <div class="col-12">Menu aqui</div>
    </div>
    <div class="row">
      <div class="col-12">
        <Card></Card>
      </div>
    </div>
  </div>
</template>

<script scoped>
import Card from "../components/Card.vue";

export default {
  components: {
    Card,
  },
};
</script>

<style scoped>
.panel {
  padding: 32px;
}

.panel header {
  margin-bottom: 32px;
}

.panel header .page-title {
  font-weight: bold;
  margin-bottom: 8px;
}

.panel header .page-description {
  font-weight: 600;
}
</style>
