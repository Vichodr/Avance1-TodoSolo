<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Bienvenido a TodoSolo</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <blockquote class="blockquote text-xs-center">
          Tu pagina de cotizacion de productos <br>
          informaticos favorita
        </blockquote>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 class="text-xs-center" mt-5>
        <v-btn color="primary" to="/signup">Registrate</v-btn>
        <v-btn to="/signin">Login</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  // name: "Landing"
};
</script>
