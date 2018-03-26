<template>
    <div class="asset-panel"
         @dragenter.stop.prevent="onDragEnter"
         @dragleave.stop.prevent="onDragLeave"
         @dragover.stop.prevent="onDragOver"
         @drop.stop.prevent="onDrop">
        <ul>
            <li v-for="asset in assets" :key="asset.fullPath">{{ asset.fullPath }}</li>
        </ul>
    </div>
</template>


<script lang="ts">

import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'


class Asset {
    constructor(public path: string, public file: File){}

    get fullPath(): string {
        return this.path + this.file.name
    }
}


function traverseFileTree(item: any, path: string, assets: Array<Asset> = []) {
    path = path || "";
    if (item.isFile) {
        // Get file
        (<any>item).file(function(file: File) {
            assets.push(new Asset(path, file))
        });
    } else if (item.isDirectory) {
        // Get folder contents
        let dirReader = item.createReader();
        dirReader.readEntries(function(entries: any) {
            for (let entry of entries) {
                traverseFileTree(entry, path + item.name + "/", assets);
            }
        });
    }
}

@Component({})
export default class AssetPanel extends Vue {

    assets: Array<Asset> = [];

    onDragEnter(event: DragEvent) {

    }

    onDragLeave(event: DragEvent) {

    }

    onDragOver(event: DragEvent) {

    }

    onDrop(event: DragEvent) {
        let assets = new Array<Asset>();

        for (let index = 0; index < event.dataTransfer.items.length; index++) {
            traverseFileTree(event.dataTransfer.items[index].webkitGetAsEntry(), '', this.assets);
        }
    }

}

</script>


<style lang="less">

    .asset-panel {
        height: 100%;
    }

</style>
