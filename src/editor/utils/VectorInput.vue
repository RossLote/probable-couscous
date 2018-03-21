<template>
    <tr>
        <th><slot/></th>
        <td>
            <input type="number" :step="step" v-model="x">
        </td>
        <td>
            <input type="number" :step="step" v-model="y">
        </td>
    </tr>
</template>

<script lang="ts">

import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'
import { Vector2 } from '../../engine/math/Vector2';


function parseNumber(value: number|string): number {
    value = parseFloat(String(value));
    return parseFloat(value.toFixed(2));
}


@Component({
    
})
export default class VectorInput extends Vue {

    x: number = 0;
    y: number = 0;

    @Prop()
    value: Vector2;

    @Prop()
    step: number;

    created() {
        this.x = this.value.x;
        this.y = this.value.y;
    }

    @Watch('x')
    @Watch('y')
    onValChange() {
        this.$emit('input', new Vector2(
            parseNumber(this.x),
            parseNumber(this.y)
        ))
    }

    @Watch('value')
    onDataChange(newValue: Vector2, oldValue: Vector2) {
        this.x = parseNumber(newValue.x);
        this.y = parseNumber(newValue.y);
    }
}

</script>

<style lang="less" scoped>

</style>
