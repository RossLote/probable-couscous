<template>
    <div class="hierarchy-node" @click.stop="activate" :class="{'active': active}">
        <div v-if="entities.length > 0" @click.stop="expanded=!expanded" class="expander">
            <span v-if="expanded">▼</span>
            <span v-else>▶</span>
        </div>
        <input v-if="editable" @keypress.enter="disableEditing" type="text" v-model="label">
        <span v-else class="label">{{ label }}</span>
        <div v-if="expanded" class="children">
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

    disableEditing() {
        this.editable = false
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
    

    &.active {
        > .label {
            background: #555;
        }
    }

    .expander {
        cursor: pointer;
        position: absolute;
        left: -15px;
    }
}

</style>
