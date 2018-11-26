declare module KiGame {
    class GameGroupChain extends RoomChain<GameGroup, GameGroupModel, GameGroupChain> {
        select(...keys[]): GameGroupChain;
        selectQ(...queries: GameGroupChain.GroupQuery[]): GameGroupChain;
    }

    module GameGroupChain {
        interface GroupQuery extends GameGroupModel { }
    }
}