<template>
    <div class="hierarchy-node" @click.stop="activate" :class="{'active': active}">
        <div v-if="entities.length > 0" @click.stop="expanded=!expanded" class="expander">
            <span v-if="expanded">⊟</span>
            <span v-else>⊞</span>
        </div>
        <input
            v-if="editable"
            @keypress.enter="editable=false"
            @blur="editable=false"
            @keydown.esc="cancelEditing"
            v-model="label"
            type="text"
            class="label-input"
            autofocus>
        <div v-else @dblclick="enableEditing" class="label">{{ label }}</div>
        <div v-show="expanded" class="children">
            <HierarchyNode
                v-for="entity in entities"
                :key="entity.id"
                :entity="entity"
                :activateMethod="activateMethod"
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

    @Prop()
    propLabel: string;

    @Prop()
    engine: Engine;

    @Prop()
    entity: Entity;

    @Prop()
    activateMethod: Function

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
    @Watch('editable')
    onEditableChange() {
        if (this.editable) {
            (<HTMLInputElement>this.$el.querySelector('.label-input')).setSelectionRange(0, this.label.length);
        }
    }
}


</script>

<style lang="less">

.hierarchy-node {
    margin-left: 20px;
    position: relative;
    

    &.active {
        > .label {
            background: #000;
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
