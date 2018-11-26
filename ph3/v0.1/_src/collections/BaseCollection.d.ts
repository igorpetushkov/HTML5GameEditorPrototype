declare module KiGame {
    abstract class BaseCollection {
        private _selector: BaseSelector;

        constructor(selector);
        // this._selector = selector;

        select(...args[]): BaseSelector;
            // this._selector.select(args)
        selectAll(): BaseSelector;
            // this._selector.selectAll()

        abstract add(arg): BaseCollection;
        abstract remove(arg): BaseCollection;
        abstract filter(predicate: object | Function): BaseCollection;
    }
}