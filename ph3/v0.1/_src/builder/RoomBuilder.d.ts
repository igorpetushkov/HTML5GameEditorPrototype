declare module KiGame {
    class RoomBuilder {
        static buildRoom(model: RoomModel): Room;
        static buildGame(model: GameModel): Game;
        static buildScene(model: SceneModel): Scene;
        static buildGroup(model: GroupModel): Group;
        static buildLayer(model: LayerModel): Layer;
        static buildImageObject(model: ImageObjectModel): ImageObject;
        static buildSpriteObject(model: SpriteObjectModel): SpriteObject;
    }
}