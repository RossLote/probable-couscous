<template>
    <div class="hierarchy-node">
        {{node.id}}
        <HierarchyNode v-for="node in nodes" :key="node.id" :node="node" />
    </div>
    
</template>

<script lang="ts">

import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'
import Engine from '../../engine/Engine';
import {Entity} from '../../engine/Entity';


@Component({})
export default class HierarchyNode extends Vue {
    label: string;
    nodes: Array<Entity> = [];

    @Prop()
    engine: Engine;

    @Prop()
    node: Entity;
}


</script>

<style lang="less">

.hierarchy-node {
    padding-left: 0px;

    .hierarchy-node {
        padding-left: 20px;
    }
}

</style>
