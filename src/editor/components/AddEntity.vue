<template>
    <div>
        <button @click="addEntity">Add entity</button>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    props: ['game'],
    data() {
        return {
        }
    },
    methods: {
        addEntity() {
            let e = this.game.currentScene.createEntity();
            e.addComponent('circlecollider', {radius: 10});
            e.addComponent('ridgedbody', {velocity: [100, 100]});
        },
    }
});
</script>

<style scoped>

</style>