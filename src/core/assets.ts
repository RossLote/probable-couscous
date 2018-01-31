// TODO: handle load failure.

interface IAssets {
    url: string,
    name: string
}

export class AssetRegistry {
    private static images : {[key: string] : HTMLImageElement} = {};
    private static audio : {[key: string] : HTMLAudioElement} = {};
    static promises: Promise<any>[] = [];

    static addImage(url: string, name: string) : typeof AssetRegistry {
        AssetRegistry.addImages([{url: url, name: name}]);
        return AssetRegistry;
    }

    static addImages(images: Array<IAssets>) : typeof AssetRegistry {
        images.forEach(function(data){
            AssetRegistry.promises.push(new Promise(function(resolve, reject){
                let image = new Image();
                image.onload = function(){
                    AssetRegistry.images[data.name] = image;
                    resolve();
                }
                image.src = data.url;
            }));
        });
        return AssetRegistry;
    }

    static getImage(name: string) {
        return AssetRegistry.images[name];
    }

    static addSound(url: string, name: string) : typeof AssetRegistry {
        AssetRegistry.addSounds([{url: url, name: name}]);
        return AssetRegistry;
    }

    static addSounds(images: Array<IAssets>) : typeof AssetRegistry {
        images.forEach(function(data){
            AssetRegistry.promises.push(new Promise(function(resolve, reject){
                let image = new Audio();
                image.onload = function(){
                    AssetRegistry.audio[data.name] = image;
                    resolve();
                }
                image.src = data.url;
            }));
        });
        return AssetRegistry;
    }

    static getSound(name: string) {
        return AssetRegistry.audio[name];
    }

    static loadAssets(): Promise<any> {
        return Promise.all(AssetRegistry.promises);
    }
}
