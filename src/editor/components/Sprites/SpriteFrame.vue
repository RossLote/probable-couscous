<template>
    <div>
        <canvas width="100" height="100"></canvas>
    </div>
</template>


<script lang="ts">

import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'
import Engine from '../../../engine/Engine';


interface IFrameData {
    x: number;
    y: number;
    width: number;
    height: number;
}


@Component({})
export default class SpriteFrame extends Vue {

    @Prop()
    imageName: string;

    @Prop()
    engine: Engine;

    @Prop()
    frameData: IFrameData;

    image: HTMLImageElement;
    context: CanvasRenderingContext2D;

    mounted() {
        this.image = this.engine.assetsRegistry.getImage(this.imageName);
        let canvas = (<HTMLCanvasElement>this.$el.querySelector('canvas'));
        let fd = this.frameData
        this.context = (<CanvasRenderingContext2D>canvas.getContext('2d'));
        this.context.drawImage(
            this.image,
            fd.x, fd.y, fd.width, fd.height,
            fd.x, fd.y, fd.width, fd.height,
            );
    }
}


</script>


<style scoped lang="less">


</style>