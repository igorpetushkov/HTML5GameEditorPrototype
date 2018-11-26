declare module KiGame {
    interface ImageObjectSelectorArg extends ObjectSelectorArg { }

    interface ObjectSelectorActions {
        url(value): ImageObjectSelector;
    }

    class ImageObjectSelector extends ObjectSelector implements ObjectSelectorActions {
        private _caches: CacheManager;

        constructor(args);
        // super(args)
        // const { caches } = args;

        protected parseSelectorArgs(...args[]): ImageObjectSelectorArg[];
        // super.parseSelectorArgs(args)

        select(...args[]): ImageObjectSelector;
        // args = this.parseSelectorArgs(args)
        // cache = this._caches.get(cacheName)
        // images = cache.find({name: name})
        // this.points = images
        // return this;

        selectAll(): ImageObjectSelector;
        // 

        clear(): ImageObjectSelector;

        url(value): ImageObjectSelector;
        // points = this.getPoints() as ImageObject[]
        // points.forEach(point => point.setUrl(value));
    }
}