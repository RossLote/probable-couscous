import {Component} from "../../Component";
import {Tileset} from "../../../core/tileset";
import {ITileData} from './TileMapData'
import {System} from '../../System';
import {Entity} from '../../Entity';


export class TileMapComponent extends Component {
    tileset: Tileset;
    mapData: Array<ITileData>;
    sortOrder: string;
    orderInLayer: number;
}
