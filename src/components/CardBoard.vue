<template>
  <v-container class="card-board">
    <v-row justify="center" class="mb-4">
      <v-col cols="auto" v-for="n in 3" :key="'top-' + n">
        <CardSlot />
      </v-col>
    </v-row>
    <v-row justify="center" class="mb-4">
      <v-col cols="auto" v-for="n in 3" :key="'bottom-' + n">
        <CardSlot />
      </v-col>
    </v-row>
    <div class="hand-container">
      <v-row class="hand justify-center">
        <v-col cols="auto" v-for="card in handCards" :key="'hand-' + card.id" class="hand-card">
          <Card :card="card" />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import Card from './Card.vue';
import CardSlot from './CardSlot.vue';
import { getCards } from '../controllers/CardController'
export default {
  name: 'CardBoard',

  data() {
    return {
      handCards: []
    };
  },
  methods: {
    async draw() {
      this.handCards = getCards()
    }
  },
  async mounted() {
    console.log("draw");
    await this.draw();
  }
  
};
</script>

<style>
.card-board {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
</style>