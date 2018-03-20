<template>
    <div class="transform-component-panel">
        <h5>Transform</h5>
        <table>
            <VectorEditor :vector="transform.localPosition" :label="'Position'" :setter="setPosition"/>
            <VectorEditor :vector="transform.localScale" :label="'Scale'" :setter="setScale" :step="0.1"/>
            <ValueEditor :value="transform.localRotation" :label="'Angle'" :setter="setRotation" :step="0.01"/>
        </table>
    </div>
</template>


<script lang="ts">

import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'
import VectorEditor from '../../utils/VectorEditor.vue'
import ValueEditor from '../../utils/ValueEditor.vue'
import { Entity } from '../../../engine/Entity';
import { Transform } from '../../../engine/Transform';
import { Vector2 } from '../../../engine/math/Vector2';


@Component({
    components: {VectorEditor, ValueEditor}
})
export default class TransformComponentPanel extends Vue {

    @Prop()
    transform: Transform;

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
