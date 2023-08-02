<template>
  <div class="card">
    <div class="header">
      <p>Titulo do card</p>
    </div>
    <div class="body">
        <p>O que eu fiz nessa tarefa?</p>
    </div>
  </div>
</template>

<script scoped>
export default {};
</script>

<style scoped>
.card {
  border-radius: 12px;
  height: 200px;
  width: 100%;
  background-color: gray;
  padding: 12px;
}
.card .header {
    font-weight: bold;
    padding: 8px;
    border-bottom: 1px solid;
}
.card .body {
    margin-top: 8px;
}
</style>
