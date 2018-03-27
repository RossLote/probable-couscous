<template>
    <div class="editor">
        <div class="left-column">
            <div class="main-view-wrapper">

            </div>
            <div class="asset-panel-wrapper">
                <AssetPanel :assetsRegistry="engine.assetsRegistry"/>
            </div>
        </div>
        <div class="hierarchy-panel-wrapper">
            <HierarchyPanel :engine="engine" :scene="engine.currentScene" :root="engine.currentScene.getRootEntity()"/>
        </div>
        <div class="inspector-panel-wrapper">
            <InspectorPanel/>
        </div>
    </div>
</template>

<script lang="ts">

import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'
import Engine from '../engine/Engine';
import AssetPanel from './components/AssetPanel.vue';
import HierarchyPanel from './components/HierarchyPanel.vue';
import InspectorPanel from './components/InspectorPanel.vue';


@Component({
    components: {AssetPanel, HierarchyPanel, InspectorPanel}
})
export default class Editor extends Vue {
    title: string;
    engine: Engine;

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
    height: 100%;
    width: 100%;
    box-sizing: content-box;
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: stretch;
    align-content: stretch;

    .left-column {
        display: flex;
        flex-direction: column;
        .main-view-wrapper {
            flex: 1;
            background: #999;
        }
        .asset-panel-wrapper {
            flex: 1;
        }

    }


    .hierarchy-panel-wrapper {
        width: 300px;
        background: #555;
        color: #ccc;
    }
    
    .inspector-panel-wrapper {
        width: 300px;
        background: #666;
        color: #ccc;
    }
}

</style>

<style lang="less">
    .main-view-wrapper canvas {
        max-width: 100%;
        width: 100%;
    }
</style>
