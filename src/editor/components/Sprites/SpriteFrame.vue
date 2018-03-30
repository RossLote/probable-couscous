<template>
    <canvas :class="{active}" width="100" height="100"></canvas>
</template>


<script lang="ts">

import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'
import Engine from '../../../engine/Engine';
import { Sprite } from '../../../engine/core/sprites';


interface IFrameData {
    x: number;
    y: number;
    width: number;
    height: number;
}


@Component({})
export default class SpriteFrame extends Vue {

    @Prop()
    engine: Engine;
    @Prop()
    frameIndex: number;
    @Prop()
    active: boolean;

    mounted() {
        this.$parent.$on('updated', () => {
            this.draw();
        });
        this.draw();
    }

    draw() {
        let sprite = this.engine.spriteRegistry.getSprite('sprite');
        let image = this.engine.assetsRegistry.getImage('image')
        let frame = sprite.frames[this.frameIndex];

        let canvas = (<HTMLCanvasElement>this.$el);
        let ctx = (<CanvasRenderingContext2D>canvas.getContext('2d'));
        let scale = canvas.width / Math.max(frame.width, frame.height);
        let offsetX = (canvas.width - frame.width*scale) / 2;
        let offsetY = (canvas.height - frame.height*scale) / 2;
        ctx.imageSmoothingEnabled = false;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
            image,
            frame.x, frame.y, frame.width, frame.height,
            offsetX, offsetY, frame.width*scale, frame.height*scale
        );
    }
}


</script>


<style scoped lang="less">

    canvas {
        margin: 0 5px;
        border: 1px solid #ccc;
        width: 100px;
        height: 100px;
        &.active {
            outline: 2px solid rgba(255, 255, 255, 0.8)
        }
    }

</style>