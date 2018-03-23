<template>
    <div class="transform-component-panel">
        <h5>Transform</h5>
        <table>
            <VectorInput :value="transform.localPosition" @input="setPosition">Position</VectorInput>
            <VectorInput :value="transform.localScale" @input="setScale" :step="0.1">Scale</VectorInput>
            <ValueInput :value="transform.localRotation" @input="setRotation" :step="0.01">Angle</ValueInput>
        </table>
    </div>
</template>


<script lang="ts">

import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'
import VectorInput from '../../utils/VectorInput.vue'
import ValueInput from '../../utils/ValueInput.vue'
import { Entity } from '../../../engine/Entity';
import { Transform as TransformComponent } from '../../../engine/Transform';
import { Vector2 } from '../../../engine/math/Vector2';


@Component({
    components: {VectorInput, ValueInput}
})
export default class Transform extends Vue {

    @Prop()
    transform: TransformComponent;

    setPosition(vector: Vector2) {
        this.transform.setLocalPosition(vector);
    }

    setScale(vector: Vector2) {
        this.transform.setLocalScale(vector);
    }

    setRotation(rotation: number) {
        this.transform.setLocalRotation(rotation);
    }
}

</script>


<style lang="less">

.transform-component-panel{

}

</style>
