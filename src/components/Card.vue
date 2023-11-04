<template>
    <div class="card">
      <img :src="imageUrl" alt="Imagen" class="card-image">
      <div class="card-details">
        <p>{{ name }}</p>
      </div>
    </div>
  </template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  // eslint-disable-next-line
}
</script>

<style>
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  width: 200px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
}

.card-image {
  margin-top: 10px;
  width: 120px;
  height: 120px;
}

.card-details {
  padding: 10px;
}
</style>
