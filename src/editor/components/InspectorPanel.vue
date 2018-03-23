<template>
    <div class="inspector-panel">
        <div v-if="entityWrapper.entity">
            <Transform :transform="entityWrapper.entity.transform" :key="entityWrapper.entity.id+'-transform'"/>
            <hr>
            <CircleCollider v-if="'circlecollider' in entityWrapper.components" :component="entityWrapper.components['circlecollider']" :key="entityWrapper.entity.id+'-circlecollider'"/>
            <hr>
            <BoxCollider v-if="'boxcollider' in entityWrapper.components" :component="entityWrapper.components['boxcollider']" :key="entityWrapper.entity.id+'-boxcollider'"/>
            <hr>
            <PolygonCollider v-if="'polygoncollider' in entityWrapper.components" :component="entityWrapper.components['polygoncollider']" :key="entityWrapper.entity.id+'-polygoncollider'"/>
            <hr>
            <Ridgedbody v-if="'ridgedbody' in entityWrapper.components" :component="entityWrapper.components['ridgedbody']" :key="entityWrapper.entity.id+'-ridgedbody'"/>
            <hr>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Add component
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <h6 class="dropdown-header">Physics</h6>
                    <a class="dropdown-item" href="#" @click="addComponent('ridgedbody')">Ridgedbody</a>
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
import Transform from './entity-component-panels/Transform.vue';
import BoxCollider from './entity-component-panels/BoxCollider.vue';
import CircleCollider from './entity-component-panels/CircleCollider.vue';
import PolygonCollider from './entity-component-panels/PolygonCollider.vue';
import Ridgedbody from './entity-component-panels/Ridgedbody.vue';
import {Entity} from '../../engine/Entity';
import {Component as EntityComponent} from '../../engine/Component';


@Component({
    components: {
        BoxCollider,
        CircleCollider,
        PolygonCollider,
        Ridgedbody,
        Transform
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
