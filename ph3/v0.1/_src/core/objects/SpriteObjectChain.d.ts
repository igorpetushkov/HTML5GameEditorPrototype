declare module KiGame {
    class SpriteObjectChain extends RoomChain<SpriteObject, SpriteObjectModel, SpriteObjectChain> {
        toLayer(key): SpriteObjectChain;
        fromLayer(): SpriteObjectChain;

        select(...keys[]): SpriteObjectChain;
        selectQ(...queries: SpriteObjectChain.SpriteObjectQuery[]): SpriteObjectChain;
    }

    module SpriteObjectChain {
        interface SpriteObjectQuery extends SpriteObjectModel { }
    }
}