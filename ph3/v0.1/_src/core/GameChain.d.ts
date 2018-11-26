declare module KiGame {
    abstract class RoomChain<I extends GameItem, M extends GameItemModel, C> {
        private _room: Room;

        constructor(room: Room);

        build(key, model?: M, putIntoRoom?): C;
        value(): I;

        select(...args[]): C;
        selectQ(...queries: RoomChain.GameItemQuery[]): C;
        selectById(id): C;
        selectByIds(ids[]): C;
        selectByKey(key, type: GameItemType): C;
        selectByKeys(keys[], type: GameItemType): C;

        change(): Promise<RoomChain.Status>;

        list(): RoomChain.Status;
        status(): RoomChain.Status;
    }

    module RoomChain {
        interface GameItemQuery extends GameItemModel { }
        interface Status { }
    }
}