<template>
    <CardBoard />
</template>

<script>
import CardBoard from '../components/CardBoard.vue'
export default {
    name: 'Game',
    data() {
        return {
            handCards: 5
        };
    },
    methods: {

    },
    mounted() {

    },
    unmounted() {

    }
};
</script>

<style>
body {
    position: fixed;
    width: 100%;
    height: 100%;
}
</style>