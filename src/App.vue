<template>

  <v-app>
    <v-navigation-drawer v-model="sidebar" app>
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app style="background-color: rgb(14, 55, 103);">
      <span class="hidden-sm-and-up">
        <v-toolbar-side-icon @click="sidebar = !sidebar">
        </v-toolbar-side-icon>
      </span>
      <v-toolbar-title class="title-color">
        <router-link to="/" tag="span" style="cursor: pointer">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <BarraBusqueda></BarraBusqueda>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn style="color: white;"
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>

  </v-app>

</template>

<script>

// import HelloWorld from "./components/HelloWorld";
// eslint-disable-next-line
import BarraBusqueda from './components/BarraBusqueda.vue';

export default {
  name: 'App',
  data() {
    return {
      appTitle: 'TODOSOLO',
      sidebar: false,
      menuItems: [
        { title: 'Productos', path: '/productos', icon: 'computer' },
        { title: 'Registrate', path: '/registrate', icon: 'face' },
        { title: 'Login', path: '/login', icon: 'lock_open' },
        { title: 'Crear Producto', path: '/crearproducto', icon: 'more' },
      ],
    };
  },

  components: {
    BarraBusqueda,
  },
};
</script>
<style>
  .title-color {
      background-image: linear-gradient(to right, white 50%, rgb(255,165,0) 50%);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }
</style>
