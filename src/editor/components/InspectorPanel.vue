<template>
    <div class="inspector-panel">
        <div v-if="entityWrapper.entity">
            <TransformComponentPanel :transform="entityWrapper.entity.transform" :key="entityWrapper.entity.id+'-transform'"/>
            <hr>
            <CircleColliderComponentPanel v-if="'circlecollider' in entityComponents" :component="entityComponents['circlecollider']" :key="entityWrapper.entity.id+'-circlecollider'"/>
        </div>
    </div>
</template>


<script lang="ts">

import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'
import TransformComponentPanel from './entity-component-panels/TransformComponentPanel.vue';
import CircleColliderComponentPanel from './entity-component-panels/CircleColliderComponentPanel.vue';
import {Entity} from '../../engine/Entity';
import {Component as EntityComponent} from '../../engine/Component';


@Component({
    components: {TransformComponentPanel, CircleColliderComponentPanel}
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
