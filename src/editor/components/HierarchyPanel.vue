<template>
  <div class="hierarchy-panel">
        <CreateEntityButton :engine="engine"/>
        <HierarchyNode v-for="node in nodes" :key="node.id" :node="node" />
  </div>
</template>

<script lang="ts">

import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'
import Engine from '../../engine/Engine';
import {Entity} from '../../engine/Entity';
import HierarchyNode from './HierarchyNode.vue';
import CreateEntityButton from './CreateEntityButton.vue';


@Component({
    components: {HierarchyNode, CreateEntityButton}
})
export default class HierarchyPanel extends Vue {
    nodes: Array<Entity> = [];

    @Prop()
    engine: Engine;

    constructor(){
        super();
        const refresh = () => {
            this.nodes.splice(0);
            for (const node of this.engine.currentScene.root.getChildren()) {
                this.nodes.push(node);
            }
            setTimeout(refresh, 500);
        }

        refresh();
    }
}


</script>

<style lang="less">

</style>
