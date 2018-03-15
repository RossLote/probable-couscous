<template>
  <div class="hierarchy-panel" @click="activateSelf">
        <button @click.stop="addEntity">Add entity</button>
        <button @click.stop="deleteEntity">Delete entity</button>
        <HierarchyNode
            :entity="root"
            :activateMethod="activateNode"
            :refreshMethod="refresh"
            :propLabel="'Root'" />
  </div>
</template>

<script lang="ts">

import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'
import Engine from '../../engine/Engine';
import {Entity} from '../../engine/Entity';
import {Scene} from '../../engine/scene/Scene';
import HierarchyNode from './HierarchyNode.vue';
import CreateEntityButton from './CreateEntityButton.vue';


const NEW_ENTITY_LABEL = 'New Entity';


@Component({
    components: {HierarchyNode, CreateEntityButton}
})
export default class HierarchyPanel extends Vue {
    @Prop()
    scene: Scene;

    @Prop()
    root: Entity;

    rootNode: HierarchyNode;
    
    private activeNode: HierarchyNode | undefined;

    constructor(){
        super();
    }

    mounted() {
        for (const child of this.$children) {
            if (child instanceof HierarchyNode) {
                this.rootNode = child;
            }
        }
        this.activateNode(this.rootNode);
    }

    activateNode(node: HierarchyNode) {
        if (node === this.activeNode) {
            return;
        }
        if (this.activeNode) {
            this.activeNode.active = false;
            this.activeNode.editable = false;
        }
        node.active = true;
        this.activeNode = node;
    }

    refresh() {
        this.$emit('refresh');
    }

    activateSelf() {
        this.activateNode(this.rootNode);
    }

    addEntity() {
        (<HierarchyNode>this.activeNode).createChild(NEW_ENTITY_LABEL);
        (<HierarchyNode>this.activeNode).expanded = true;
    }

    deleteEntity() {
        if (this.activeNode && this.activeNode !== this.rootNode) {
            this.activeNode.delete();
            this.activeNode = this.rootNode;
        }
    }
}


</script>

<style lang="less">

.hierarchy-panel{
    height: 100%;
}

</style>
