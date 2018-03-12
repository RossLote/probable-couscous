<template>
  <div>
      {{tester}}
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class HierarchyPanel extends Vue {
    tester: string;

    constructor(){
        super()
        this.tester = 'what is the problem'
    }
}


</script>

<style lang="less">

</style>
