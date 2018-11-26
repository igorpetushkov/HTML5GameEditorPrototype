declare module KiGame {
    class StorageCollection extends BaseCollection {
        add(arg): StorageCollection;
        remove(arg): StorageCollection;
        filter(predicate: object | Function): StorageCollection;
    }
}