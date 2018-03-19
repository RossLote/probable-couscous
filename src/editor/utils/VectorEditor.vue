<template>
    <tr>
        <th>{{ label }}</th>
        <td>
            <input type="number" v-model="x">
        </td>
        <td>
            <input type="number" v-model="y">
        </td>
    </tr>
</template>

<script lang="ts">

import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'
import { Vector2 } from '../../engine/math/Vector2';


@Component({})
export default class VectorEditor extends Vue {

    x: number = 0;
    y: number = 0;

    settingValue = false;

    @Prop()
    label: string;

    @Prop()
    vector: Vector2;

    @Prop()
    setter: Function;

    mounted() {
        this.x = this.vector.x;
        this.y = this.vector.y;
    }

    @Watch('x')
    @Watch('y')
    onValChange() {
        if (this.setter) {
            this.setter(
                new Vector2(
                    parseFloat(<any>this.x),
                    parseFloat(<any>this.y)
                )
            );
        } else {
            this.vector.x = this.x;
            this.vector.y = this.y;
        }
    }

    @Watch('vector')
    onDataChange(newValue: Vector2, oldValue: Vector2) {
        this.x = newValue.x;
        this.y = newValue.y;
    }
}

</script>

<style lang="less" scoped>

</style>
