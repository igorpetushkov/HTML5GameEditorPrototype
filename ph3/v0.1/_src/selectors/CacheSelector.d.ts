declare module KiGame {
    interface CacheSelectorArg extends StorageSelectorArg {
        cache;
    }

    class CacheSelector extends ObjectSelector {
        private _caches: CacheManager;

        constructor({ caches });

        select(...args[]): CacheSelector;
        // this._points.

        selectAll(): CacheSelector;

        clear(): CacheSelector;

        protected parseSelectorArgs(...args[]): CacheSelectorArg[];
        // super.parseSelectorArgs(args)


        cache(): void;
        // do cache
        //  get data from cache by points


        // from Game
        image(arg | number): ImageObjectSelector;
        images(...args: (string | number)[]): ImageCollection;
    }
}