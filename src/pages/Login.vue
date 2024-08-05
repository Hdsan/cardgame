<template>
  <v-container class="card-board">
    <v-row justify="center" class="mb-4">
      <v-col cols="auto" v-for="n in 3" :key="'top-' + n">
        <v-card class="card">
          <v-card-title>Card {{ n }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" class="mb-4">
      <v-col cols="auto" v-for="n in 3" :key="'bottom-' + n">
        <v-card class="card">
          <v-card-title>Card {{ n + 3 }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <!-- hand -->
    <div class="hand-container">
      <v-row class="hand justify-center">
        <v-col cols="auto" v-for="n in 5" :key="'hand-' + n" class="hand-card">
          <v-card class="card">
            <v-card-title>Card {{ n + 6 }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'CardBoard'
};
</script>

<style>
.card-board {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
.card {
  width: 150px;
  height: 200px;
}
.hand-container {
  overflow: hidden;
  width: 100%;
}
.hand {
  position: relative;
}
.hand-card {
  margin-left: -60px; /* Ajuste este valor para controlar a sobreposição */
}
.hand-card:first-child {
  margin-left: 0;
}
</style>
