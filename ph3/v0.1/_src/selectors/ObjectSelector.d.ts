declare module KiGame {
    interface ObjectSelectorArg extends CacheSelectorArg {
        id;
        name;
    }

    interface ObjectSelectorActions {
        debug(value): ObjectSelector;
        hidden(value): ObjectSelector;
    }

    class ObjectSelector extends BaseSelector implements ObjectSelectorActions {
        select(...args[]): BaseSelector;
        selectAll(): BaseSelector;

        clear(): BaseSelector;

        protected parseSelectorArgs(...args[]): ObjectSelectorArg[];
        // super.parseSelectorArgs(args)

        debug(value): ObjectSelector;
        // points = this.getPoints()
        // points.attr('debug', value)

        hidden(value): ObjectSelector;
    }
}