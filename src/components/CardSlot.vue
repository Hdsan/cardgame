<template>
    <v-card class="card">
        <v-card-title>Slot</v-card-title>
    </v-card>
</template>
<script>

export default {
    name: 'CardSlot',
    props: {
        card: {
            type: Object,
            required: false
        }
    },
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
