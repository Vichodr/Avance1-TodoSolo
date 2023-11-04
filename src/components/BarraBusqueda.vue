
<template>
  <div class="search-bar">
    <input type="text" placeholder="Buscar productos..." />
    <button>Buscar</button>
  </div>
</template>

<style>
.search-bar {
  margin-top: 20px;
  display: center;
  align-items: center;
  max-width: 300px;
  margin-bottom: 20px;
}

input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 5px;
}

button {
  padding: 8px 12px;
  background-color: rgb(14, 55, 103);
  color: white;
  border: 1px solid white;
  border-radius: 4px;
  cursor: pointer;
}
</style>
