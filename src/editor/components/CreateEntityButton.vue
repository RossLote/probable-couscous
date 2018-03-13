<template>
    <div>
        <button @click="addEntity">Add entity</button>
    </div>
</template>






<script lang="ts">

import Engine from '../../engine/Engine';
import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'


@Component({})
export default class CreateEntityButton extends Vue {

    @Prop()
    engine: Engine;
    
    addEntity() {
        let e = this.engine.currentScene.createEntity();
        e.addComponent('circlecollider', {radius: 10});
        e.addComponent('ridgedbody', {velocity: [100, 100]});
        let f = e.createChild();
        f.addComponent('circlecollider', {radius: 10});
        f.addComponent('ridgedbody', {velocity: [5, 5]});
        e.createChild();
        e.createChild();
        e.createChild();
        e.createChild();
        f.createChild();
        f.createChild();
        f.createChild();
    }

}


</script>






<style scoped>

</style>