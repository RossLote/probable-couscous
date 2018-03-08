import Vue from "vue";
import Engine from '../engine/Engine';
import AddEntity from "./components/AddEntity.vue";

const game = new Engine();
game.sceneManager.createBlankScene('first');
game.sceneManager.loadScene('first');
game.startGameLoop();

export default class Editor {

    start() {
        new Vue({
            el: "#app",
            template: `
            <div>
                <add-entity :game="game"  />
            </div>
            `,
            data: {
                name: "World",
                game: game
            },
            components: {
                AddEntity
            }
        });
    }
}