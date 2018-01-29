// TODO: handle load failure.

interface IAssets {
    url: string,
    alias: string
}

export class AssetRegistry {
    private static images : {[key: string] : HTMLImageElement} = {};
    private static audio : {[key: string] : HTMLAudioElement} = {};
    static promises: Promise<any>[] = [];

    static addImage(url: string, alias: string) : typeof AssetRegistry {
        AssetRegistry.addImages([{url: url, alias: alias}]);
        return AssetRegistry;
    }

    static addImages(images: Array<IAssets>) : typeof AssetRegistry {
        images.forEach(function(data){
            AssetRegistry.promises.push(new Promise(function(resolve, reject){
                let image = new Image();
                image.onload = function(){
                    AssetRegistry.images[data.alias] = image;
                    resolve();
                }
                image.src = data.url;
            }));
        });
        return AssetRegistry;
    }

    static getImage(alias: string) {
        return AssetRegistry.images[alias];
    }

    static addSound(url: string, alias: string) : typeof AssetRegistry {
        AssetRegistry.addSounds([{url: url, alias: alias}]);
        return AssetRegistry;
    }

    static addSounds(images: Array<IAssets>) : typeof AssetRegistry {
        images.forEach(function(data){
            AssetRegistry.promises.push(new Promise(function(resolve, reject){
                let image = new Audio();
                image.onload = function(){
                    AssetRegistry.audio[data.alias] = image;
                    resolve();
                }
                image.src = data.url;
            }));
        });
        return AssetRegistry;
    }

    static getSound(alias: string) {
        return AssetRegistry.audio[alias];
    }

    static loadAssets(): Promise<any> {
        return Promise.all(AssetRegistry.promises);
    }
}
