<template>
    <div
        @click.stop="activate"
        @dragstart="onDragStart"
        @dragenter.prevent="onDragEnter"
        @dragover.prevent
        @dragleave="onDragLeave"
        @drop="onDrop"
        :class="{active, dragover}"
        draggable
        class="hierarchy-node">

        <div v-if="entities.length > 0" @click.stop="expanded=!expanded" class="expander">
            <span v-if="expanded">⊟</span>
            <span v-else>⊞</span>
        </div>
        <div class="label">
            <input
                v-if="editable"
                @keypress.enter="editable=false"
                @blur="editable=false"
                @keydown.esc="cancelEditing"
                onFocus="this.setSelectionRange(0, this.value.length)"
                v-model="label"
                type="text"
                class="label-input"
                autofocus>
            <div v-else @dblclick="enableEditing">{{ label }}</div>
        </div>
        <div v-show="expanded" class="children">
            <HierarchyNode
                v-for="entity in entities"
                :key="entity.id"
                :entity="entity"
                :activateMethod="activateMethod"
                :refreshMethod="refreshMethod"
                :propLabel="entity.label" />
        </div>
    </div>
    
</template>

<script lang="ts">

import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'
import Engine from '../../engine/Engine';
import {Entity} from '../../engine/Entity';


@Component({})
export default class HierarchyNode extends Vue {
    label: string;
    tmpLabel: string;
    entities: Array<Entity> = [];
    active: boolean = false;
    editable: boolean = false;
    expanded: boolean = false;
    dragover: boolean = false;

    @Prop()
    propLabel: string;

    @Prop()
    engine: Engine;

    @Prop()
    entity: Entity;

    @Prop()
    activateMethod: Function

    @Prop()
    refreshMethod: Function

    constructor() {
        super();
        this.label = this.propLabel;
        this.entity.on('entity:added', (entity: Entity, other: Entity) => {
            this.entities.push(other);
        });
        this.entity.on('entity:hard-destroy', (entity: Entity) => {
            (<HierarchyNode>this.$parent).removeChild(this);
        });
    }

    created(){
        this.$on('node:created', (node: HierarchyNode) => {
            this.$parent.$emit('node:created', node);
        })
        this.$parent.$emit('node:created', this);
    }

    mounted() {
        this.refresh();
    }

    activate() {
        this.activateMethod(this);
    }

    createChild(label: string) {
        this.entity.createChild(label);
    }

    delete() {
        (<HierarchyNode>this.$parent).deleteChild(this);
    }

    deleteChild(child: HierarchyNode) {
        child.entity.forceDestroy();
    }

    onDragStart(event: DragEvent) {
        event.dataTransfer.setData("entity_id", this.entity.id)
    }

    onDragEnter(event: DragEvent) {
        this.dragover = true;
    }

    onDragLeave(event: DragEvent) {
        this.dragover = false;
    }

    onDrop(event: DragEvent) {
        let id = event.dataTransfer.getData('entity_id');
        let droppedEntity = Entity.getByID(id);
        let receiverEntity = this.entity;
        receiverEntity.addChild(droppedEntity);
        this.refreshMethod();
        this.dragover = false;
    }

    refresh(){
        this.entities.splice(0)
        for (const entity of this.entity.getChildren()) {
            this.entities.push(entity);
        }
    }

    removeChild(child: HierarchyNode) {
        let index = this.entities.indexOf(child.entity);
        this.entities.splice(index, 1);
    }

    enableEditing() {
        this.tmpLabel = this.label;
        this.editable = true;
    }

    cancelEditing() {
        this.label = this.tmpLabel;
        this.editable = false;
    }

    @Watch('label')
    onLabelChange() {
        this.entity.label = this.label;
    }
}


</script>

<style lang="less">

.hierarchy-node {
    margin-left: 20px;
    position: relative;
    cursor: pointer;
    font-size: 18px;

    &.dragover {
        outline: 2px solid orange;
    }

    &.active {
        > .label {
            background: rgba(0,0,0, 0.5);
            color: white;
        }
    }

    &:hover:not(.active) {
        > .label {
            background: rgba(0,0,0, 0.2);
        }
    }

    .label-input {
        padding: 0;
        padding-left: 2px;
        margin-left: -2px;
        border: 0;
        background: transparent;
        color: white;

        &:focus, :active {
            outline: none;
        }

        &::selection{
            background: black;
            color: orange;
        }
    }

    .expander {
        cursor: pointer;
        user-select: none;
        position: absolute;
        left: -15px;
    }
}

</style>
