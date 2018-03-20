<template>
    <tr>
        <th><slot/></th>
        <td colspan="2">
            <input type="number" v-model="x" :step="step">
        </td>
    </tr>
</template>

<script lang="ts">

import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'


@Component({})
export default class ValueEditor extends Vue {

    x: number = 0;

    settingValue = false;

    @Prop()
    value: number;

    @Prop()
    step: number;

    @Prop()
    setter: Function;

    mounted() {
        this.x = this.value
    }

    @Watch('x')
    onValChange(newValue: string) {
        this.setter(parseFloat(newValue));
    }

    @Watch('value')
    onDataChange(newValue: number, oldValue: number) {
        this.x = newValue;
    }
}

</script>

<style lang="less" scoped>

</style>
