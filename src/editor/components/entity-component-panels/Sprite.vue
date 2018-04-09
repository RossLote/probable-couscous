<template>
    <div class="transform-component-panel">
        <h5>Sprite</h5>
        <table>
            <tr>
                <td>Name</td>
                <td colspan="2"><input type="text" v-model="spriteName"></td>
            </tr>
        </table>
    </div>
</template>


<script lang="ts">

import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'

import { Entity } from '../../../engine/Entity';
import { SpriteComponent } from '../../../engine/components/sprite/SpriteComponent';


@Component({
    components: {}
})
export default class Sprite extends Vue {

    @Prop()
    component: SpriteComponent;

    spriteName: string = '';

    @Watch('spriteName')
    onChange(newValue: string) {
        this.component.spriteName = newValue;
    }
}

</script>


<style lang="less">

</style>
