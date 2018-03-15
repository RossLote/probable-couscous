<template>
    <div class="inspector">
        <ul>
            <li v-for="(component, name) in entityComponents" :key="name">
                {{ name }}
            </li>
        </ul>
    </div>
</template>


<script lang="ts">

import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'
import {Entity} from '../../engine/Entity';
import {Component as EntityComponent} from '../../engine/Component';


@Component({})
export default class InspectorPanel extends Vue {

    entity: Entity;
    entityComponents: {[key: string]: EntityComponent} = {};

    created() {
        this.$parent.$on('entity:selected', (entity: Entity) => {
            this.entity = entity;
            this.entityComponents = this.entity.getComponents();
        });
    }

}

</script>


<style lang="less">

.inspector-panel{
    height: 100%;
}

</style>
