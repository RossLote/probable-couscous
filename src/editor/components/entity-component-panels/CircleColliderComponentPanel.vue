<template>
    <div class="transform-component-panel">
        <h5>Transform</h5>
        <table>
            <tr>
                <th>
                    <label>Position</label>
                </th>
                <td>
                    <input type="number" v-model="positionX">
                </td>
                <td>
                    <input type="number" v-model="positionY">
                </td>
            </tr>
        </table>
    </div>
</template>


<script lang="ts">

import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'
import { Entity } from '../../../engine/Entity';
import { CircleColliderComponent } from '../../../engine/components/collider/CircleColliderComponent';
import { Vector2 } from '../../../engine/math/Vector2';


@Component({})
export default class CircleColliderComponentPanel extends Vue {

    positionX: number = 0; 
    positionY: number = 0; 
  
    @Prop()
    collider: CircleColliderComponent;

    mounted() {
        this.positionX = this.collider.collider.position.x;
        this.positionY = this.collider.collider.position.y;
    }

    @Watch('positionX')
    @Watch('positionY')
    onPositionChange(newVal: number, oldVal: number) {
        this.collider.collider.position = new Vector2(this.positionX, this.positionY)
    }

    @Watch('collider.collider.position')
    onTransformPositionChange(newVal: Vector2, oldVal: Vector2){
        this.positionX = newVal.x;
        this.positionY = newVal.y;
    }
}

</script>


<style lang="less" scoped>

.transform-component-panel{
    table {
        input {
            width: 60px;
        }
    }
}

</style>
