declare module KiGame {
    class GameObjectChain extends RoomChain<GameObject, GameObjectModel, GameObjectChain> {
        toLayer(key): GameObjectChain;
        fromLayer(): GameObjectChain;

        select(...keys[]): GameObjectChain;
        selectQ(...queries: GameObjectChain.ObjectQuery[]): GameObjectChain;
    }

    module GameObjectChain {
        interface ObjectQuery extends GameObjectModel { }
    }
}