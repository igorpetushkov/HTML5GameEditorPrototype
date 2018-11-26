declare module KiGame {
    namespace CollectionManager {
        enum COLLECTION {
            STORAGES,
            CACHES,
            OBJECTS,
            IMAGES
        }
    }

    class CollectionManager {
        private _storages: StorageCollection;
        private _caches: CacheCollection;
        private _objects: ObjectCollection;
        private _images: ImageCollection;

        constructor({ storage, cache });
        // this._images = new ImageCollection(new ImageObjectSelector({storage, cache}));

        get(key: CollectionManager.COLLECTION, ...args[]): BaseCollection;
        // this[key].select(args)
    }
}