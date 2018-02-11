// TODO: handle load failure.

interface IAssets {
    url: string,
    name: string
}

export class AssetRegistry {
    private images : {[key: string] : HTMLImageElement} = {};
    private audio : {[key: string] : HTMLAudioElement} = {};
    promises: Promise<any>[] = [];

    addImage(url: string, name: string):AssetRegistry {
        this.addImages([{url: url, name: name}]);
        return this;
    }

    addImages(images: Array<IAssets>):AssetRegistry {
        images.forEach((data) => {
            this.promises.push(new Promise((resolve, reject) => {
                let image = new Image();
                image.onload = () => {
                    this.images[data.name] = image;
                    resolve();
                }
                image.src = data.url;
            }));
        });
        return this;
    }

    getImage(name: string) {
        return this.images[name];
    }

    addSound(url: string, name: string):AssetRegistry {
        this.addSounds([{url: url, name: name}]);
        return this;
    }

    addSounds(images: Array<IAssets>):AssetRegistry {
        images.forEach((data) => {
            this.promises.push(new Promise((resolve, reject) => {
                let image = new Audio();
                image.onload = () => {
                    this.audio[data.name] = image;
                    resolve();
                }
                image.src = data.url;
            }));
        });
        return this;
    }

    getSound(name: string) {
        return this.audio[name];
    }

    loadAssets(assetsData: any): Promise<any> {
        let imageData = assetsData.images;
        let soundData = assetsData.sounds;
        if (imageData) {
            this.addImages(imageData);
        }
        if (soundData) {
            this.addSounds(soundData);
        }
        return Promise.all(this.promises);
    }
}
