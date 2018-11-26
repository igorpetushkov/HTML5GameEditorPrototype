declare module KiGame {
    interface StorageSelectorArg extends BaseSelectorArg {
        storage;
    }
    
    class StorageSelector extends BaseSelector {
        private _storage: StorageManager;

        constructor(args);
        // super(args)
        // const { storages } = args;

        select(...args[]): StorageSelector;
        selectAll(): StorageSelector;

        clear(): StorageSelector;

        protected parseSelectorArgs(...args[]): StorageSelectorArg[];
        // super.parseSelectorArgs(args)
    }
}