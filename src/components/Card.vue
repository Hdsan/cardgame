<template>
    <v-card class="card"  :image="imageSrc">
        <v-img :src="imageSrc" class="image" />
        <v-card-title>{{ card.name }} </v-card-title>
    </v-card>
</template>

<script>
export default {
    name: 'Card',
    props: {
    card: {
      type: Object,
      required: false
    }
  },
  computed: {
    imageSrc() {
      return require(`@/assets/${this.card.image}`);
    }
  }
};

</script>
<style>
.hand {
    display: flex;
    justify-content: center;
    position: relative;
}

.hand-card {
    margin-left: -60px;
}
/* .pulled-card {

} */

.hand-card:first-child {
    margin-left: 0;
}
</style>
