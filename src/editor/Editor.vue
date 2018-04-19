<template>
    <div class="editor">
        <div class="editor-container">
            <div class="left">
                <div class="top">
                    <HierarchyPanel :engine="engine" :scene="engine.currentScene" :root="engine.currentScene.getRootEntity()"/>
                </div>
                <div class="bottom">
                    <AssetPanel :assetsRegistry="engine.assetsRegistry"/>
                </div>
            </div>
            <div class="center">
                <div class="top">
                    <div class="main-view-wrapper"></div>
                </div>
                <div class="bottom"></div>
            </div>
            <div class="right">
                <InspectorPanel/>
            </div>
        </div>
        <div v-if="editingSpritesheet" class="dialog">
            <div class="dialog-content">
                <SpriteBuilder :imageName="editingSpritesheet" :engine="engine" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'
import Engine from '../engine/Engine';
import AssetPanel from './components/AssetPanel.vue';
import HierarchyPanel from './components/HierarchyPanel.vue';
import InspectorPanel from './components/InspectorPanel.vue';
import SpriteBuilder from './components/Sprites/SpriteBuilder.vue';


@Component({
    components: {AssetPanel, HierarchyPanel, InspectorPanel, SpriteBuilder}
})
export default class Editor extends Vue {
    title: string;
    engine: Engine;
    editingSpritesheet: string = '';

    constructor() {
        super();
        this.engine = new Engine()
        this.engine.renderColliders = true;
        this.engine.sceneManager.createBlankScene('default');
        this.engine.sceneManager.loadScene('default');
        this.engine.startGameLoop();

        (<any>window).gameEngine = this.engine
        this.title = 'This is a test';
    }

    created() {
        this.$on('sprite-builder:open', (imageName: string) => {
            this.editingSpritesheet = imageName;
        });
        this.$on('sprite-builder:close', (imageName: string) => {
            this.editingSpritesheet = '';
        });
        
    }

    mounted() {
        let el = this.$el.querySelector('.main-view-wrapper');
        if (el) {
            el.appendChild(this.engine.canvas);
        }
    }

}

</script>

<style lang="less" scoped>

.editor {
    color: white;
    .editor-container {
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;

        .left {
            grid-column: 1;
            background: #111;

            display: grid;
            grid-template-rows: 1fr 1fr;

            .top {
                background: #151515;
                grid-row: 1;
            }
            .bottom {
                background: #252525;
                grid-row: 2;
            }
        }
        .center {
            grid-column: 2;
            background: #222;

            display: grid;
            grid-template-rows: 4fr 1fr;

            .top {
                background: #444;
                grid-row: 1;
            }
            .bottom {
                grid-row: 2;
            }

        }
        .right {
            grid-column: 3;
            background: #333;
        }
    }
    .dialog {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

</style>

<style lang="less">
    .main-view-wrapper canvas {
        max-width: 100%;
        width: 100%;
    }
</style>
