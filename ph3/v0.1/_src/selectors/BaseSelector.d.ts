declare module KiGame {
    interface BaseSelectorArg { }

    abstract class BaseSelector {
        private _points: SelectorPoint[];

        protected setPoints(instances[]): void
        // this._points = [new SelectorPoint(instance)]

        protected getPoints(): SelectorPoint[];

        protected abstract parseSelectorArgs(...args[]): BaseSelectorArg[];

        abstract select(...args[]): BaseSelector;
        abstract selectAll(): BaseSelector;
        abstract clear(): BaseSelector;
    }
}