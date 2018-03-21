<template>
    <tr>
        <th><slot/></th>
        <td colspan="2">
            <input type="number" v-model="val" :step="step">
        </td>
    </tr>
</template>

<script lang="ts">

import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'


@Component({})
export default class ValueInput extends Vue {

    val: number = 0;

    @Prop()
    value: number;

    @Prop()
    step: number;

    created() {
        this.val = this.value;
    }

    @Watch('val')
    onValChange(newValue: string) {
        this.$emit('input', this.val);
    }

    @Watch('value')
    onDataChange(newValue: number, oldValue: number) {
        this.val = newValue;
    }
}

</script>

<style lang="less" scoped>

</style>
