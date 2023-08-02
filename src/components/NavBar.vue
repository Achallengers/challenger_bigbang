<template>
  <div class="navbar">
    <ul class="navbar-list">
      <li class="item-btn">Item 1</li>
      <li class="item-btn">Item 2</li>
      <li class="item-btn">Item 3</li>
      <li class="item-btn">Item 4</li>
    </ul>
  </div>
</template>

<style scoped>
.navbar {
  background-color: #ccc;
  border-radius: 8px;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 8px;
}

.navbar-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}
.navbar-list li {
  margin-right: 8px;
}

.item-btn {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.item-btn:hover {
  background-color: #0056b3;
}
</style>
