<template>
    <div class="spritesheet-editor-wrapper">
        <div class="spritesheet-editor">
            <div class="upper">
                <div class="sprite">
                    
                </div>
                <div class="filmstrip">
                </div>
            </div>
            <div class="lower">
                <div class="config-panel">
                    <div>
                        <label for="">
                            Frame width
                            <input type="number" min="1" v-model="frameWidth"/>
                        </label>
                    </div>
                    <div>
                        <label for="">
                            Frame height
                            <input type="number" min="1" v-model="frameHeight"/>
                        </label>
                    </div>
                </div>
                <div class="canvas-wrapper">
                    <canvas class="spritesheet-canvas" draggable @dragstart="onDragStart" @dragend="onDragEnd" @drag="onDrag" @mousewheel="onScroll" width="600" height="600"></canvas>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts">

import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'
import Engine from '../../../engine/Engine';

import SpriteFrame from './SpriteFrame.vue'


@Component({
    components: {
        SpriteFrame
    }
})
export default class SpritesheetEditor extends Vue {

    @Prop()
    engine: Engine;
    
    @Prop()
    imageName: string;

    tmpEngine: Engine;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    image: HTMLImageElement;

    selectedFrames: Array<number> = [0, 1, 2, 3, 4];
    framerate: number = 10;

    frameWidth: number = 32;
    frameHeight: number = 32;

    lastX: number = 0;
    lastY: number = 0;

    constructor(){
        super()
        this.tmpEngine = new Engine(100, 100);
        this.tmpEngine.sceneManager.createBlankScene('default');
        this.tmpEngine.sceneManager.loadScene('default');
        this.tmpEngine.startGameLoop();
    }

    mounted() {
        let el = this.$el.querySelector('.sprite');
        if (el) {
            el.appendChild(this.tmpEngine.canvas);
        }
        this.image = this.engine.assetsRegistry.getImage(this.imageName);
        this.canvas = (<HTMLCanvasElement>this.$el.querySelector('.spritesheet-canvas'));
        this.context = (<CanvasRenderingContext2D>this.canvas.getContext('2d'));
        this.setupEngine();
        this.redraw();
    }

    setupEngine() {
        this.tmpEngine.assetsRegistry.addImage(this.image.src, 'image')
        Promise.all(this.tmpEngine.assetsRegistry.promises).then(() => {
            // imageName: string;
            // frameWidth: number;
            // frameHeight: number;
            // sprites: IUncalculatedSprites;
            this.updateSprite();
            let entity = this.tmpEngine.currentScene.createEntity();
            entity.addComponent('sprite', {spriteName: 'sprite'});
        });
    }

    updateSprite() {
        this.tmpEngine.spriteRegistry.registerSprite({
            imageName: 'image',
            frameWidth: this.frameWidth,
            frameHeight: this.frameHeight,
            sprites : {
                'sprite' : {
                    frames: this.selectedFrames,
                    framerate: this.framerate
                }
            }
        });
    }

    @Watch('frameWidth')
    @Watch('frameHeight')
    redraw() {
        if (this.frameWidth > 0 && this.frameHeight > 0) {
            this.updateSprite();
            this.context.clearRect(-10000, -10000, 20000, 20000);
            this.context.drawImage(this.image, 0, 0, this.image.width, this.image.height, 0, 0, this.image.width, this.image.height);
            this.context.strokeStyle = '#fff'
            this.context.lineWidth = 1;
            let xMax = Math.floor(this.image.width/this.frameWidth);
            let yMax = Math.floor(this.image.height/this.frameHeight);
            // TODO: box sizing
            for (let i = 0; i < yMax; i++) {
                let y = i * this.frameHeight;
                for (let j = 0; j < xMax; j++) {
                    let x = j * this.frameWidth;
                    this.context.beginPath();
                    this.context.rect(x, y, this.frameWidth, this.frameHeight);
                    this.context.stroke();
                }
            }
        }
    }

    get currentFrameData(): any {
        return {
            x: 0,
            y: 0,
            width: this.frameWidth,
            height: this.frameHeight
        }
    } 

    onScroll(event: WheelEvent) {
        // TODO: scroll to mouse
        let scaleFactor = 0.05;
        let scale = 1-(event.deltaY/Math.abs(event.deltaY)) * scaleFactor;
        this.context.scale(scale, scale);
        this.redraw();
    }

    onDrag(event: DragEvent) {
        // FIXME: scaled imaged pan faster than they should
        let diffX = event.clientX - this.lastX;
        let diffY = event.clientY - this.lastY;
        this.lastX = event.clientX;
        this.lastY = event.clientY;
        this.context.translate(diffX, diffY);
        this.redraw();
    }

    onDragStart(event: DragEvent) {
        this.lastX = event.clientX;
        this.lastY = event.clientY;
        event.dataTransfer.setDragImage(new Image, 0, 0);
    }

    onDragEnd(event: DragEvent) {
        this.onDrag(event);
    }

    get spriteData(): any {
        return {

        }
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
    background: #333;
    padding: 10px;
    border: 2px groove #999;
    color: white;

    .upper {
        
    }

    .lower {
        display: flex;
        flex-direction: row;
    }

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