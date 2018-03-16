<template>
    <div class="editor">
        <div class="main-view-wrapper">

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

import Vue from 'vue';
import Component from 'vue-class-component';
import Engine from '../engine/Engine';
import HierarchyPanel from './components/HierarchyPanel.vue';
import InspectorPanel from './components/InspectorPanel.vue';


@Component({
    components: {HierarchyPanel, InspectorPanel}
})
export default class Editor extends Vue {
    title: string;
    engine: Engine;

    constructor() {
        super();
        this.engine = new Engine()
        this.engine.sceneManager.createBlankScene('default');
        this.engine.sceneManager.loadScene('default');
        this.engine.startGameLoop();

        (<any>window).TESTER = this.engine
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

    .main-view-wrapper {
        flex: 1;
        background: #999;
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