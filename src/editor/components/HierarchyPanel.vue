<template>
  <div class="hierarchy-panel" @click="activateSelf">
        <button @click.stop="addEntity">Add entity</button>
        <button @click.stop="deleteEntity" :disabled="entities.length===0">Delete entity</button>
        <HierarchyNode
            v-for="entity in entities"
            :key="entity.id"
            :entity="entity"
            :activateMethod="activateNode"
            :propLabel="entity.label" />
  </div>
</template>

<script lang="ts">

import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'
import Engine from '../../engine/Engine';
import {Entity} from '../../engine/Entity';
import HierarchyNode from './HierarchyNode.vue';
import CreateEntityButton from './CreateEntityButton.vue';


const NEW_ENTITY_LABEL = 'New Entity';


@Component({
    components: {HierarchyNode, CreateEntityButton}
})
export default class HierarchyPanel extends HierarchyNode {

    private activeNode: HierarchyNode;

    constructor(){
        super();
        this.activeNode = this;
    }

    activateNode(node: HierarchyNode) {
        if (this.activeNode) {
            this.activeNode.active = false;
            node.active = true;
        }
        this.activeNode = node;
    }

    activateSelf() {
        this.activateNode(this);
    }

    addEntity() {
        this.activeNode.createChild(NEW_ENTITY_LABEL);
        this.activeNode.expanded = true;
    }

    deleteEntity() {
        if (this.activeNode !== this) {
            this.activeNode.delete()
            this.activeNode = this;
        }
    }
}


</script>

<style lang="less">

.hierarchy-panel{
    height: 100%;
}

</style>
