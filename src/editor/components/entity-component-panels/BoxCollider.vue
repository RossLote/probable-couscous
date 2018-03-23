<template>
    <div class="">
        <h5>Box collider</h5>
        <table>
            <VectorInput :value="collider._size" @input="setSize">Size</VectorInput>
        </table>
    </div>
</template>


<script lang="ts">

import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'
import VectorInput from '../../utils/VectorInput.vue'
import { Entity } from '../../../engine/Entity';
import { BoxColliderComponent } from '../../../engine/components/collider/BoxColliderComponent';
import { Box } from '../../../engine/components/collider/SAT';
import { Vector2 } from '../../../engine/math/Vector2';


@Component({
    components: {VectorInput}
})
export default class BoxCollider extends Vue {

    collider: Box;
  
    @Prop()
    component: BoxColliderComponent;

    constructor() {
        super();
        this.collider = this.component.collider;
    }

    setSize(size: Vector2) {
        this.component.size = size;
        this.collider.size = size;
    }
}

</script>


<style lang="less" scoped>

</style>
