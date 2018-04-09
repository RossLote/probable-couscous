<template>
    <div class="asset-panel"
         @dragenter.stop.prevent="onDragEnter"
         @dragleave.stop.prevent="onDragLeave"
         @dragover.stop.prevent="onDragOver"
         @drop.stop.prevent="onDrop">
        <ul>
            <li v-for="asset in assets" :key="asset.fullPath" @dblclick="buildSprite(asset)">{{ asset.fullPath }}</li>
        </ul>

    </div>
</template>


<script lang="ts">

import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'
import { AssetRegistry } from '../../engine/core/assets';


class Asset {
    constructor(public path: string, public file: File){}

    get fullPath(): string {
        return this.path + this.file.name
    }
}


function traverseFileTree(item: any, path: string, callback: Function) {
    path = path || "";
    if (item.isFile) {
        // Get file
        (<any>item).file(function(file: File) {
            callback(path, file);
        });
    } else if (item.isDirectory) {
        // Get folder contents
        let dirReader = item.createReader();
        dirReader.readEntries(function(entries: any) {
            for (let entry of entries) {
                traverseFileTree(entry, path + item.name + "/", callback);
            }
        });
    }
}

@Component({})
export default class AssetPanel extends Vue {

    assets: Array<Asset> = [];

    @Prop()
    assetsRegistry: AssetRegistry;

    onDragEnter(event: DragEvent) {

    }

    onDragLeave(event: DragEvent) {

    }

    onDragOver(event: DragEvent) {

    }

    onDrop(event: DragEvent) {
        let assets = new Array<Asset>();

        for (let index = 0; index < event.dataTransfer.items.length; index++) {
            traverseFileTree(event.dataTransfer.items[index].webkitGetAsEntry(), '', this.addAsset);
        }
    }

    addAsset = (path: string, file: File) => {
        let asset = new Asset(path, file);
        let url = URL.createObjectURL(file);
        this.assets.push(asset);
        this.assetsRegistry.addImage(url, asset.fullPath);
    }

    buildSprite(asset: Asset) {
        this.$parent.$emit('sprite-builder:open', asset.fullPath);
    }
}

</script>


<style lang="less">

    .asset-panel {
        height: 100%;
    }

</style>
