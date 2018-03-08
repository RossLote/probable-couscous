export interface ITileData {
    sx: number;
    sy: number;
    dx: number;
    dy: number;
}

export interface TileMapData {
    tilesetName: string;
    data: Array<Array<number>>;
    sortOrder: string;
    orderInLayer: number;
}
