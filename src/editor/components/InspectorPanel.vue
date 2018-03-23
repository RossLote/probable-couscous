<template>
    <div class="inspector-panel">
        <div v-if="entityWrapper.entity">
            <TransformComponentPanel :transform="entityWrapper.entity.transform" :key="entityWrapper.entity.id+'-transform'"/>
            <hr>
            <CircleColliderComponentPanel v-if="'circlecollider' in entityWrapper.components" :component="entityWrapper.components['circlecollider']" :key="entityWrapper.entity.id+'-circlecollider'"/>
            <hr>
            <BoxColliderComponentPanel v-if="'boxcollider' in entityWrapper.components" :component="entityWrapper.components['boxcollider']" :key="entityWrapper.entity.id+'-boxcollider'"/>
            <hr>
            <PolygonColliderComponentPanel v-if="'polygoncollider' in entityWrapper.components" :component="entityWrapper.components['polygoncollider']" :key="entityWrapper.entity.id+'-polygoncollider'"/>
            <hr>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Add component
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <h6 class="dropdown-header">Physics</h6>
                    <a class="dropdown-item" href="#" @click="addComponent('boxcollider')">Box collider</a>
                    <a class="dropdown-item" href="#" @click="addComponent('circlecollider')">Circle collider</a>
                    <a class="dropdown-item" href="#" @click="addComponent('polygoncollider')">Polygon collider</a>
                </div>
            </div>
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

    entityWrapper: {entity: Entity | undefined, components: {[key: string]: EntityComponent}} = {entity: undefined, components: {}};

    created() {
        this.$parent.$on('entity:selected', (entity: Entity) => {
            let currentEntity = this.entityWrapper.entity;
            if (currentEntity) {
                currentEntity.off('entity:component:added', this.updateComponents);
            }
            this.entityWrapper.entity = entity;
            this.entityWrapper.components = entity.getComponents();
            this.entityWrapper.entity.on('entity:component:added', this.updateComponents);
        });
    }

    beforeDestroy(){
        (<Entity>this.entityWrapper.entity).off('entity:component:added', this.updateComponents);
    }

    addComponent(componentname: string) {
        let entity = (<Entity>this.entityWrapper.entity);
        entity.addComponent(componentname, {});
    }

    updateComponents(){
        let entity = (<Entity>this.entityWrapper.entity);
        this.entityWrapper.components = entity.getComponents();
        console.log(this.entityWrapper)
        this.$forceUpdate();
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
