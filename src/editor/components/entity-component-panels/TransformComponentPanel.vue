<template>
    <div class="transform-component-panel">
        <h5>Position</h5>
        <div class="form-group">
            X: <input type="number" v-model="positionX"><br>
            Y: <input type="number" v-model="positionY">
        </div>
        <h5>Scale</h5>
        <div class="form-group">
            X: <input type="number" v-model="scaleX"><br>
            Y: <input type="number" v-model="scaleY">
        </div>
        <h5>Rotation</h5>
        <div class="form-group">
            <input type="number" v-model="rotation" step="0.01">
        </div>
    </div>
</template>


<script lang="ts">

import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'
import { Entity } from '../../../engine/Entity';
import { Transform } from '../../../engine/Transform';
import { Vector2 } from '../../../engine/math/Vector2';


@Component({})
export default class TransformComponentPanel extends Vue {


    positionX: number = 0; 
    positionY: number = 0; 
    scaleX: number = 0; 
    scaleY: number = 0;
    rotation: number = 0;
    // transformWrapper: {transform: Transform | undefined} = {transform: undefined};
    // get transform(): Transform | undefined {
    //     return this.transformWrapper.transform;
    // }
    // set transform(transform: Transform | undefined) {
    //     this.transformWrapper.transform = transform;
    // }

    @Prop()
    transform: Transform;

    mounted() {
        this.positionX = this.transform.getLocalPosition().x;
        this.positionY = this.transform.getLocalPosition().y;
        this.scaleX = this.transform.getLocalScale().x;
        this.scaleY = this.transform.getLocalScale().y;
        this.rotation = this.transform.getLocalRotation();
    }

    @Watch('positionX')
    @Watch('positionY')
    onPositionChange(newVal: number, oldVal: number) {
        (<Transform>this.transform).setLocalPosition([this.positionX, this.positionY]);
    }

    @Watch('transform.localPosition')
    onTransformPositionChange(newVal: Vector2, oldVal: Vector2){
        this.positionX = newVal.x;
        this.positionY = newVal.y;
    }

    @Watch('scaleX')
    @Watch('scaleY')
    onScaleChange(newVal: number, oldVal: number) {
        (<Transform>this.transform).setLocalScale([this.scaleX, this.scaleY]);
    }

    @Watch('rotation')
    onRotationChange(newVal: number, oldVal: number) {
        (<Transform>this.transform).setLocalRotation(newVal);
    }

}

</script>


<style lang="less" scoped>

.transform-component-panel{
}

</style>
