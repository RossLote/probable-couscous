<template>
    <div class="">
        <h5>Ridgedbody</h5>
        <table>
        </table>
    </div>
</template>


<script lang="ts">

import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'
import VectorInput from '../../utils/VectorInput.vue'
import ValueInput from '../../utils/ValueInput.vue'
import { Entity } from '../../../engine/Entity';
import { RidgedBodyComponent } from '../../../engine/components/ridgedbody/RidgedBodyComponent';
import { Vector2 } from '../../../engine/math/Vector2';


@Component({
    components: {VectorInput, ValueInput}
})
export default class Transform extends Vue {

    @Prop()
    transform: RidgedBodyComponent;
}

</script>


<style lang="less">

</style>
