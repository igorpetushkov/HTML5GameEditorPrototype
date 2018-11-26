declare module KiGame {
    interface StorageItemModel {
        _id?;
        _rev?;
        timestamp?;
    }

    class StorageItem {
        private _id;
        private _rev;
        private _timestamp;
    }
}