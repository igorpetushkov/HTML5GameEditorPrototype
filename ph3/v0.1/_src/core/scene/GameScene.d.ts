declare module KiGame {
    interface GameSceneModel extends GameItemModel {
        thumbnail?;
        standalone?;
        active?;
        debug?;
        hasPhysics?;
        hasRemoteData?;
        hasRemoteAssets?;
    }

    class GameScene extends GameItem {
        standalone;
        active;
        debug;
        thumbnail;

        putToGame(gameKey): GameScene;
        outFromGame(): GameScene;

        init(): Promise<boolean>;
        update(): void;

        stack(...models: GameItemModel[]): void;
        getStack(): GameItemModel[];
        removeFromStack(model: GameItemModel): void;
        clearStack(): void;

        validate(): Promise<boolean>;
        sync(): Promise<boolean>;
        render(): Promise<boolean>;

        findDirty(predicate): GameItem[];
        findUnsynced(predicate): GameItem[];

        setThumbnail(value): void;
        getThumbnail();

        activeOn(): void;
        activeOff(): void;
        isActive();

        standaloneOn(): void;
        standaloneOff(): void;
        isStandalone();

        debugOn(): void;
        debugOff(): void;
        isDebug();

        localSyncOn(): void;
        localSyncOff(): void;
        isLocalSync();

        remoteSyncOn(): void;
        remoteSyncOff(): void;
        isRemoteSync();
    }
}