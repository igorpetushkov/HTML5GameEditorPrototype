declare module KiGame {
    class ImageObjectChain extends RoomChain<ImageObject, ImageObjectModel, ImageObjectChain> {
        toLayer(key): ImageObjectChain;
        fromLayer(): ImageObjectChain;

        select(...keys[]): ImageObjectChain;
        selectQ(...queries: ImageObjectChain.ImageObjectQuery[]): ImageObjectChain;
    }

    module ImageObjectChain {
        interface ImageObjectQuery extends ImageObjectModel { }
    }
}