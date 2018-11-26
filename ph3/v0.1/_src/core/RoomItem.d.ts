declare module KiGame {
    interface GameItemModel extends StorageItemModel {
        key?;
        itemType?: GameItemType;
    }

    enum GameItemType {
        Game,
        GameScene,
        GameGroup,
        GameObject,
        Asset
    }

    class GameItem extends StorageItem {
        private _model: GameItemModel;

        private _links[];
        private _parent;

        private _dirty;

        constructor(model: GameItemModel);

        init(): Promise<boolean>;
        update(model: GameItemModel): void;
        destroy();

        getId();
        getRev();
        getTimestamp();
        getType(): GameItemType;

        attr<T>(name, value?: T): T;

        addLink(id): void;
        getLinks()[];
        removeLink(id): void;
        hasLink(id);
        clearLinks(): void;

        setParent(id): void;
        getParent();
        clearParent(): void;

        makeDirty(): void;
        clearDirty(): void;
        isDirty();
    }
}