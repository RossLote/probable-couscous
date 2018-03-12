<template>
  <div id="engine">
    <h1>{{title}}</h1>
    <HierarchyPanel/>
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import Component from 'vue-class-component';
import HierarchyPanel from './components/HierarchyPanel.vue';


@Component({
components: {HierarchyPanel}
})
export default class Editor extends Vue {
    title: string;
    
    constructor() {
        super();
        this.title = 'This is a test';
    }
}

</script>

<style lang="less" scoped>



</style>