<template>
    <div class="spritesheet-editor-wrapper">
        <div class="spritesheet-editor">
            <div class="config-panel">
                <div>
                    <label for="">
                        Frame width
                        <input type="number" v-model="frameWidth"/>
                    </label>
                </div>
                <div>
                    <label for="">
                        Frame height
                        <input type="number" v-model="frameHeight"/>
                    </label>
                </div>
            </div>
            <div class="canvas-wrapper">
                <canvas draggable @dragstart="onDragStart" @dragend="onDragEnd" @drag="onDrag" @mousewheel="onScroll" width="600" height="600"></canvas>
            </div>
        </div>
    </div>
</template>


<script lang="ts">

import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'
import Engine from '../../engine/Engine';


@Component({})
export default class SpritesheetEditor extends Vue {

    @Prop()
    engine: Engine;
    
    @Prop()
    imageName: string;

    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    image: HTMLImageElement;
    frameWidth: number = 32;
    frameHeight: number = 32;
    scale: number = 1;
    x: number = 0;
    y: number = 0;

    startX: number = 0;
    startY: number = 0;

    redraw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.save()
        this.context.translate(this.x, this.y);
        this.context.scale(this.scale, this.scale);
        this.context.drawImage(this.image, 0, 0, this.image.width, this.image.height, 0, 0, this.image.width, this.image.height)
        this.context.restore()
    }

    mounted() {
        this.image = this.engine.assetsRegistry.getImage(this.imageName);
        this.canvas = (<HTMLCanvasElement>this.$el.querySelector('canvas'));
        this.context = (<CanvasRenderingContext2D>this.canvas.getContext('2d'));
        this.redraw();
        (<any>window).TESTER = this;
    }

    onScroll(event: WheelEvent) {
        let scale = this.scale - (event.deltaY/1000);
        // this.x -= (event.offsetX * scale) - (event.offsetX * this.scale);
        // this.y -= (event.offsetY * scale) - (event.offsetY * this.scale);
        // console.log(this.x, this.y, scale)
        let scalechange = scale - this.scale;
        this.x += -(event.offsetX * scalechange);
        this.y += -(event.offsetY * scalechange);
        this.scale = scale;
        this.redraw();
    }

    onDrag(event: DragEvent) {
        this.x = event.clientX - this.startX;
        this.y = event.clientY - this.startY;
        this.redraw();
    }

    onDragStart(event: DragEvent) {
        this.startX = event.clientX - this.x;
        this.startY = event.clientY - this.y;
        event.dataTransfer.setDragImage(new Image, 0, 0);
    }

    onDragEnd(event: DragEvent) {
        this.x = event.clientX - this.startX;
        this.y = event.clientY - this.startY;
        this.redraw();
    }

}


</script>


<style scoped lang="less">

.spritesheet-editor-wrapper {
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
}

.spritesheet-editor{
    display: flex;
    flex-direction: row;
    background: #333;
    padding: 10px;
    border: 2px groove #999;
    color: white;

    .config-panel {
        padding: 10px
    }

    .canvas-wrapper {
        padding: 10px;
        canvas {
            width: 100%;
            max-width: 100%;
            background-image: linear-gradient(45deg, #808080 25%, transparent 25%), linear-gradient(-45deg, #808080 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #808080 75%), linear-gradient(-45deg, transparent 75%, #808080 75%);
            background-size: 20px 20px;
            background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
        }
    }
}

</style>