<template>
  <div class="crear-producto" style="margin-top: 20px;">
    <div class="input-section">
      <label for="nombre">Nombre del Producto:</label>
      <input
        type="text"
        id="nombre"
        placeholder="Ingrese el nombre del producto"
      />

      <label for="marca">Marca:</label>
      <input
        type="text"
        id="marca"
        placeholder="Ingrese la marca del producto"
      />

      <label for="descripcion">Descripción:</label>
      <textarea
        id="descripcion"
        placeholder="Ingrese la descripción del producto"
      ></textarea>

      <label for="url-imagen">URL de la Imagen:</label>
      <input
        type="text"
        id="url-imagen"
        placeholder="Ingrese la URL de la imagen"
      />
    </div>

    <button class="crear-btn">Crear Producto</button>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* eslint-disable */
.crear-producto {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.input-section {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.input-section label {
  margin-bottom: 5px;
}
.input-section input,
.input-section textarea {
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.crear-btn {
  padding: 10px 20px;
  background-color: rgb(14, 55, 103);
  color: white;
  font: solid;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
</style>
