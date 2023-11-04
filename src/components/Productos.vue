<template>
  <div class="card-container">
    <div class="top-row">
      <!-- eslint-disable-next-line max-len -->
      <Card v-for="(card, index) in topCards" :key="index" :image-url="card.imageUrl" :name="card.name" />
    </div>
    <div class="bottom-row">
      <!-- eslint-disable-next-line max-len -->
      <Card v-for="(card, index) in bottomCards" :key="index" :image-url="card.imageUrl" :name="card.name" />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Card from './Card.vue';

export default {
  components: {
    Card,
  },
  data() {
    return {
      topCards: [
        { imageUrl: 'https://gamecenterpro.cl/wp-content/uploads/2021/01/MKB3D97QRV-001-247x296.jpg', name: 'Procesador Intel' }, 
        { imageUrl: 'https://sipoonline.cl/wp-content/uploads/2023/03/Procesador-Ryzen-5-4600g_1.png', name: 'Procesador AMD' },
        { imageUrl: 'https://cdnx.jumpseller.com/gtigx1/image/23085631/resize/640/640?1648747052', name: 'Audifonos Gamer' },
        { imageUrl: 'https://cdnx.jumpseller.com/electromundo/image/17309947/resize/540/540?1658338575', name: 'Mouse Logitech' }
      ],  
      bottomCards: [
        { imageUrl: 'https://n1g.cl/Home/5225-large_default/krom-kernel-tkl-teclado-mecanico-70.jpg', name: 'Teclado Kernel' },
        { imageUrl: 'https://bip.cl/assets/fotos/29632/1..webp', name: 'Placa Gigabyte' },
        { imageUrl: 'https://area51.cl/1793-large_default/tarjeta-grafica-zotac-rtx-3060-twin-edge-12gb.jpg', name: 'Grafica Nvidia' },
        { imageUrl: 'https://centrale.cl/wp-content/uploads/Memoria-RAM-32GB-2x16GB-6000Mhz-CL30-G.Skill-Trident-Z5-Neo-RGB-AMD-EXPO-300x300.webp', name: 'Memoria G-Skill' }
      ]
    };
  }
}
</script>

<style>
.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.top-row,
.bottom-row {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 20px;
}

.top-row {
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 10px;
}
</style>
