<template>
    <div class="spritesheet-editor-wrapper">
        <div class="spritesheet-editor">
            <div class="upper">
                <div class="filmstrip">
                    <SpriteFrame v-if="ready"
                                 v-for="(frame, index) in selectedFrames" 
                                 :key="'frame'+frame+index"
                                 :engine="tmpEngine"
                                 :active="index === activeFrame"
                                 :frameIndex="index"/>
                </div>
            </div>
            <div class="lower">
                <div class="config-panel">
                    <div class="sprite">
                    
                    </div>
                    <div>
                        <label for="">
                            Name
                            <input type="text" v-model="name"/>
                        </label>
                    </div>
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
                    <div>
                        <label for="">
                            Framerate
                            <input type="number" min="0" max="60" v-model="framerate"/>
                        </label>
                    </div>
                    <button @click="cancel">Cancel</button>
                    <button @click="createSprite">Create</button>
                </div>
                <div class="canvas-wrapper">
                    <canvas class="spritesheet-canvas" 
                            draggable
                            @dragstart="onDragStart"
                            @dragend="onDragEnd"
                            @drag="onDrag"
                            @mousewheel="onScroll"
                            @click="onClick"
                            width="600"
                            height="600"
                            ></canvas>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts">

import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'
import Engine from '../../../engine/Engine';
import { IUncalculatedSprites, IUncalculatedSprite, ISpritesheetData } from '../../../engine/core/sprites';
import { SpriteComponent, ISpriteData } from '../../../engine/components/sprite/SpriteComponent';

import SpriteFrame from './SpriteFrame.vue'


@Component({
    components: {
        SpriteFrame
    }
})
export default class SpriteBuilder extends Vue {

    @Prop()
    engine: Engine;
    
    @Prop()
    imageName: string;

    tmpEngine: Engine;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    image: HTMLImageElement;
    ready: boolean = false;
    name: string = '';

    selectedFrames: Array<number> = [];
    framerate: number = 10;
    activeFrame: number = 0;

    frameWidth: number = 32;
    frameHeight: number = 32;

    lastX: number = 0;
    lastY: number = 0;
    offsetX: number = 0;
    offsetY: number = 0;

    scale: number = 1;

    constructor(){
        super()
        this.tmpEngine = new Engine(100, 100);
        this.tmpEngine.sceneManager.createBlankScene('default');
        this.tmpEngine.sceneManager.loadScene('default');
        this.tmpEngine.startGameLoop();
    }

    created() {
        this.$on('frame:delete', (frameIndex: number) => {
            this.selectedFrames.splice(frameIndex, 1);
            this.updateSprite();
        });
    }

    mounted() {
        let el = this.$el.querySelector('.sprite');
        if (el) {
            el.appendChild(this.tmpEngine.canvas);
        }
        this.image = this.engine.assetsRegistry.getImage(this.imageName);
        this.canvas = (<HTMLCanvasElement>this.$el.querySelector('.spritesheet-canvas'));
        this.context = (<CanvasRenderingContext2D>this.canvas.getContext('2d'));
        this.context.imageSmoothingEnabled = false;
        this.setupEngine().then(() => {
            this.redraw();
            this.ready = true;
        });
    }

    setupEngine() {
        this.tmpEngine.assetsRegistry.addImage((<HTMLImageElement>this.image).src, 'image')
        return Promise.all(this.tmpEngine.assetsRegistry.promises).then(() => {
            this.updateSprite();
            let entity = this.tmpEngine.currentScene.createEntity();
            entity.addComponent('sprite', {spriteName: 'sprite'});
            let spriteComponent = entity.getComponent('sprite');
            this.$watch(
                function(){
                    return spriteComponent.currentFrame;
                }, (newValue: number) => {
                    this.activeFrame = newValue;
                }
            );
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
        let entity = this.tmpEngine.currentScene.getRootEntity();
        let scale = this.tmpEngine.canvas.width / Math.max(this.frameWidth, this.frameHeight);
        let offsetX = (this.tmpEngine.canvas.width - this.frameWidth*scale) / 2;
        let offsetY = (this.tmpEngine.canvas.height - this.frameHeight*scale) / 2;
        entity.transform.setLocalScale([scale, scale]);
        entity.transform.setLocalPosition([offsetX, offsetY]);
        this.$emit('updated')
    }

    @Watch('framerate')
    @Watch('frameWidth')
    @Watch('frameHeight')
    redraw() {
        if (this.frameWidth > 0 && this.frameHeight > 0) {
            let image = (<HTMLImageElement>this.image);
            this.updateSprite();
            this.context.clearRect(-10000, -10000, 20000, 20000);
            this.context.drawImage(image, 0, 0, image.width, image.height, 0, 0, image.width, image.height);
            this.context.strokeStyle = '#fff'
            this.context.lineWidth = 1;
            let xMax = Math.floor(image.width/this.frameWidth);
            let yMax = Math.floor(image.height/this.frameHeight);
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

    getFrame(frameNumber: number): HTMLCanvasElement {
        let sprite = this.tmpEngine.spriteRegistry.getSprite('sprite');
        let frame = sprite.frames[frameNumber];
        let image = this.tmpEngine.assetsRegistry.getImage('image');
        let canvas = document.createElement('canvas');
        let ctx = <CanvasRenderingContext2D>canvas.getContext('2d');
        ctx.drawImage(
            image,
            frame.x,
            frame.y,
            frame.width,
            frame.height,
        )
        canvas.width = canvas.height = 100;
        return canvas;
    }

    createSprite() {
        let sprites: IUncalculatedSprites = {};
        let sprite: IUncalculatedSprite = {
            frames: this.selectedFrames,
            framerate: this.framerate
        }
        sprites[this.name] = sprite;
        let spriteData: ISpritesheetData = {
            imageName: this.imageName,
            frameWidth: this.frameWidth,
            frameHeight: this.frameHeight,
            sprites: sprites
        }
        this.engine.spriteRegistry.registerSprite(spriteData);
        this.$parent.$emit('sprite-builder:close');
    }

    cancel() {
        this.$parent.$emit('sprite-builder:close');
    }

    onClick(event: MouseEvent) {
        let point = this.transformPoint(event.offsetX, event.offsetY)
        let columns = Math.floor(this.image.width / this.frameWidth);
        let column = Math.floor(point.x / this.frameWidth);
        let row =  Math.floor(point.y / this.frameHeight);
        this.selectedFrames.push(columns*row+column);
        this.updateSprite();
    }

    transformPoint(x: number, y: number): {x: number, y: number} {
        return {
            x: (x - this.offsetX) / this.scale,
            y: (y - this.offsetY) / this.scale
        }
    }

    onDrag(event: DragEvent) {
        // FIXME: scaled imaged pan faster than they should
        let diffX = event.clientX - this.lastX;
        let diffY = event.clientY - this.lastY;
        this.lastX = event.clientX;
        this.lastY = event.clientY;
        this.offsetX += diffX*this.scale;
        this.offsetY += diffY*this.scale;
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

    onScroll(event: WheelEvent) {
        // TODO: scroll to mouse
        let scaleFactor = 0.05;
        if (event.deltaY < 0) {
            scaleFactor *= -1;
        }
        let scale = 1-scaleFactor;
        this.scale *= scale;
        this.context.scale(scale, scale);
        this.redraw();
    }
}


</script>



<style lang="less">


.spritesheet-editor-wrapper{
    canvas {
        background-image: linear-gradient(45deg, #808080 25%, transparent 25%), linear-gradient(-45deg, #808080 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #808080 75%), linear-gradient(-45deg, transparent 75%, #808080 75%);
        background-size: 20px 20px;
        background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
    }
}

</style>
<style scoped lang="less">

.spritesheet-editor{
    background: #333;
    padding: 10px;
    border: 2px groove #999;
    color: white;

    .upper {
        display: flex;
        background: #222;
        padding: 5px;
        
        .filmstrip {
            height: 100px;
        }
    }

    .lower {
        display: flex;
        flex-direction: row;
    }

    .config-panel {
        padding: 10px;
        width: 300px;
    }

    .canvas-wrapper {
        padding: 10px;
        canvas {
            width: 100%;
            max-width: 100%;
        }
    }
}

</style>