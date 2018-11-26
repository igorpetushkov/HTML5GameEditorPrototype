declare module KiGame {
    class GameLoader {
        static loadRoomConfig(url): Promise<RoomModel>;
        static loadRoomData(url): Promise<ItemModel[]>;
        static loadAssetsData(url): Promise<AssetModel[]>;
    }
}