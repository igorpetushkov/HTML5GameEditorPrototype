declare module KiGame {
    class GameStorage {
        private _localDataStorage: DataStorage;
        private _localAssetStorage: AssetsStorage;
        private _localLastSyncPoint;
        private _localLastSyncTime;

        private _remoteDataStorage: DataStorage;
        private _remoteAssetStorage: AssetsStorage;
        private _remoteLastSyncPoint;
        private _remoteLastSyncTime;

        constructor(storages: {
            data: {
                local;
                remote;
            }
            assets: {
                local;
                remote;
            }
        })

        init(): Promise<void>;

        hasLocalDataStorage();
        hasLocalAssetsStorage();
        hasRemoteDataStorage();
        hasRemoteAssetsStorage();

        syncData(models: ItemModel[]): Promise<GameStorage.SyncResult>;
        syncAssets(models: AssetModel[]): Promise<GameStorage.SyncResult>;
    }

    module GameStorage {
        class ValidationResult { }
        class SyncResult { }
    }
}