import {Component} from "../../Component";
import {Tileset} from "../../core/tileset";
import {ITileData} from './TileMapData'
import {System} from '../../System';
import {Entity} from '../../Entity';


export class TileMapComponent extends Component {
    tilesetName: string;
    originalMapData: Array<number>;
    sortOrder: string;

    // These attributes are calculated when the component is added
    tileset: Tileset;
    mapData: Array<ITileData>;

    toJSON():any{
        return {
            tilesetName: this.tilesetName,
            data: this.originalMapData,
            sortOrder: this.sortOrder,
            mapData: this.mapData
        }
    }
}
