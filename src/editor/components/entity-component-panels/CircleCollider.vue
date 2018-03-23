<template>
    <div class="circle-collider-component-panel">
        <h5>Circle collider</h5>
        <table>
            <ValueInput :value="collider.radius" @input="setRadius">Radius</ValueInput>
        </table>
    </div>
</template>


<script lang="ts">

import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'
import VectorInput from '../../utils/VectorInput.vue'
import ValueInput from '../../utils/ValueInput.vue'
import { Entity } from '../../../engine/Entity';
import { CircleColliderComponent } from '../../../engine/components/collider/CircleColliderComponent';
import { Circle } from '../../../engine/components/collider/SAT';
import { Vector2 } from '../../../engine/math/Vector2';


@Component({
    components: {VectorInput, ValueInput}
})
export default class CircleCollider extends Vue {

    collider: Circle;
  
    @Prop()
    component: CircleColliderComponent;

    constructor() {
        super();
        this.collider = this.component.collider;
    }

    setRadius(radius: number){
        this.component.radius = radius;
        this.collider.radius = radius;
    }
}

</script>


<style lang="less" scoped>

.transform-component-panel{

}

</style>
