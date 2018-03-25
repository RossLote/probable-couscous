<template>
    <div class="asset-panel"
         @dragenter.stop.prevent="onDragEnter"
         @dragleave.stop.prevent="onDragLeave"
         @dragover.stop.prevent="onDragOver"
         @drop.stop.prevent="onDrop">
        <ul>
            <li v-for="file in files" :key="file.name">{{ file.name }}</li>
        </ul>
    </div>
</template>


<script lang="ts">

import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'


function traverseFileTree(item: WebKitDirectoryEntry, path: string) {
  path = path || "";
  if (item.isFile) {
    // Get file
    item.file(function(file) {
      console.log("File:", path + file.name);
    });
  } else if (item.isDirectory) {
    // Get folder contents
    var dirReader = item.createReader();
    dirReader.readEntries(function(entries) {
      for (var i=0; i<entries.length; i++) {
        traverseFileTree(entries[i], path + item.name + "/");
      }
    });
  }
}

@Component({})
export default class AssetPanel extends Vue {

    files: Array<File> = [];

    onDragEnter(event: DragEvent) {

    }

    onDragLeave(event: DragEvent) {

    }

    onDragOver(event: DragEvent) {

    }

    onDrop(event: DragEvent) {
        debugger;
        for (let index = 0; index < event.dataTransfer.files.length; index++) {
            this.files.push(event.dataTransfer.files[index]);
        }
    }

}

</script>


<style lang="less">

    .asset-panel {
        height: 100%;
    }

</style>
