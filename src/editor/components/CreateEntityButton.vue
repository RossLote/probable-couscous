<template>
    <div>
        <button @click.stop="addEntity">Add entity</button>
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
        this.$parent.$emit('create:entity');
    }

}


</script>






<style scoped>

</style>