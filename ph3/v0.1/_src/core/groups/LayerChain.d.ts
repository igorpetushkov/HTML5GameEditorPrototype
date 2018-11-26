declare module KiGame {
    class LayerChain extends RoomChain<Layer, LayerModel, LayerChain> {
        toScene(key): LayerChain;
        fromScene(): LayerChain;

        select(...keys[]): LayerChain;
        selectQ(...queries: LayerChain.LayerQuery[]): LayerChain;
    }

    module LayerChain {
        interface LayerQuery extends LayerModel { }
    }
}