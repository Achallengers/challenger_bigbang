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
        <CardComponent></CardComponent>
      </div>
      <div class="col-6">
        <CardComponent></CardComponent>
      </div>
    </div>
    <div class="row">
      <div class="col-12"><Navbar></Navbar></div>
    </div>
    <div class="row">
      <div class="col-12">
        <CardComponent></CardComponent>
      </div>
    </div>
  </div>
</template>

<script scoped>
import CardComponent from "../components/CardComponent.vue";
import Navbar from '../components/NavBar.vue'

export default {
  components: {
    CardComponent,
    Navbar
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
