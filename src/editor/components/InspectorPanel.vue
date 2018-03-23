<template>
    <div class="inspector-panel">
        <div v-if="entityWrapper.entity">
            <TransformComponentPanel :transform="entityWrapper.entity.transform" :key="entityWrapper.entity.id+'-transform'"/>
            <hr>
            <CircleColliderComponentPanel v-if="'circlecollider' in entityComponents" :component="entityComponents['circlecollider']" :key="entityWrapper.entity.id+'-circlecollider'"/>
            <hr>
            <BoxColliderComponentPanel v-if="'boxcollider' in entityComponents" :component="entityComponents['boxcollider']" :key="entityWrapper.entity.id+'-boxcollider'"/>
            <hr>
            <PolygonColliderComponentPanel v-if="'polygoncollider' in entityComponents" :component="entityComponents['polygoncollider']" :key="entityWrapper.entity.id+'-polygoncollider'"/>
        </div>
    </div>
</template>


<script lang="ts">

import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'
import TransformComponentPanel from './entity-component-panels/TransformComponentPanel.vue';
import BoxColliderComponentPanel from './entity-component-panels/BoxColliderComponentPanel.vue';
import CircleColliderComponentPanel from './entity-component-panels/CircleColliderComponentPanel.vue';
import PolygonColliderComponentPanel from './entity-component-panels/PolygonColliderComponentPanel.vue';
import {Entity} from '../../engine/Entity';
import {Component as EntityComponent} from '../../engine/Component';


@Component({
    components: {
        BoxColliderComponentPanel,
        CircleColliderComponentPanel,
        PolygonColliderComponentPanel,
        TransformComponentPanel
    }
})
export default class InspectorPanel extends Vue {

    entityWrapper: {entity: Entity | undefined} = {entity: undefined}; 
    entityComponents: {[key: string]: EntityComponent} = {};

    created() {
        this.$parent.$on('entity:selected', (entity: Entity) => {
            this.entityWrapper.entity = entity;
            this.entityComponents = entity.getComponents();
        });
    }

}

</script>


<style lang="less">

.inspector-panel{
    height: 100%;

    table {
        input {
            width: 60px;
        }
    }
}

</style>
