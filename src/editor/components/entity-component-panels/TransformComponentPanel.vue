<template>
    <div class="transform-component-panel">
        <h5>Transform</h5>
        <table>
            <VectorEditor :vector="transform.localPosition" :label="'Position'" :setter="setPosition"/>
            <VectorEditor :vector="transform.localScale" :label="'Scale'" :setter="setScale"/>
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


    // positionX: number = 0; 
    // positionY: number = 0; 
    // scaleX: number = 0; 
    // scaleY: number = 0;
    // rotation: number = 0;
    // // transformWrapper: {transform: Transform | undefined} = {transform: undefined};
    // // get transform(): Transform | undefined {
    // //     return this.transformWrapper.transform;
    // // }
    // // set transform(transform: Transform | undefined) {
    // //     this.transformWrapper.transform = transform;
    // // }

    @Prop()
    transform: Transform;

    // mounted() {
    //     this.positionX = this.transform.getLocalPosition().x;
    //     this.positionY = this.transform.getLocalPosition().y;
    //     this.scaleX = this.transform.getLocalScale().x;
    //     this.scaleY = this.transform.getLocalScale().y;
    //     this.rotation = this.transform.getLocalRotation();
    // }

    setPosition(vector: Vector2) {
        this.transform.setLocalPosition(vector);
    }

    setScale(vector: Vector2) {
        this.transform.setLocalScale(vector);
    }

    setRotation(rotation: number) {
        this.transform.setLocalRotation(rotation);
    }

    // @Watch('transform.localPosition')
    // onTransformPositionChange(newVal: Vector2, oldVal: Vector2){
    //     this.positionX = newVal.x;
    //     this.positionY = newVal.y;
    // }

    // @Watch('scaleX')
    // @Watch('scaleY')
    // onScaleChange(newVal: number, oldVal: number) {
    //     (<Transform>this.transform).setLocalScale([this.scaleX, this.scaleY]);
    // }

    // @Watch('rotation')
    // onRotationChange(newVal: number, oldVal: number) {
    //     (<Transform>this.transform).setLocalRotation(newVal);
    // }

}

</script>


<style lang="less">

.transform-component-panel{
    table {
        input {
            width: 60px;
        }
    }
}

</style>
