declare module KiGame {
    interface GameObjectModel extends GameItemModel {
        objectType?: GameObjectType;
    }

    enum GameObjectType {
        Image,
        Sprite
    }

    abstract class GameObject extends GameItem {

    }
}