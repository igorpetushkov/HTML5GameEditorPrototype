declare module KiGame {
    class GameSceneChain extends RoomChain<GameScene, GameSceneModel, GameSceneChain> {
        select(...keys[]): GameSceneChain;
        selectQ(...queries: GameSceneChain.SceneQuery[]): GameSceneChain;

        toGame(key): GameSceneChain;
        fromGame(): GameSceneChain;

        thumbnail(value): GameSceneChain;
        active(value): GameSceneChain;
        standalone(value): GameSceneChain;
        debug(value): GameSceneChain;
    }

    module GameSceneChain {
        interface SceneQuery extends GameSceneModel { }
    }
}