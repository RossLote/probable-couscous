<template>
    <div class="">
        <h5>Polygon collider</h5>
        <table>
            <VectorInput v-for="(point, index) in collider.points" :key="index" :value="point" @input="(vector) => {setPoint(point, vector)}"><span v-if="index === 0">Points</span></VectorInput>
            <tr>
                <td></td>
                <td colspan="2">
                    <button @click="addPoint">Add point</button>
                </td>
            </tr>
        </table>
    </div>
</template>


<script lang="ts">

import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'
import VectorInput from '../../utils/VectorInput.vue'
import ValueInput from '../../utils/ValueInput.vue'
import { Entity } from '../../../engine/Entity';
import { PolygonColliderComponent } from '../../../engine/components/collider/PolygonColliderComponent';
import { Polygon } from '../../../engine/components/collider/SAT';
import { Vector2 } from '../../../engine/math/Vector2';


@Component({
    components: {VectorInput, ValueInput}
})
export default class PolygonCollider extends Vue {

    collider: Polygon;
    points: Array<Vector2> = [];
  
    @Prop()
    component: PolygonColliderComponent;

    constructor() {
        super();
        this.collider = this.component.collider;
    }

    addPoint() {
        this.collider.points.push(new Vector2)
    }

    setPoint(point: Vector2, vector: Vector2) {
        point.copy(vector);
    }
}

</script>


<style lang="less" scoped>


</style>
