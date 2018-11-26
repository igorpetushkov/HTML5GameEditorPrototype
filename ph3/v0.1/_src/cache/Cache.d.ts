declare module KiGame {
    class GameCache {
        private _cache: { [id]: GameItem };
        private _validation: GameCacheValidation;
        private _history: GameCacheHistory;

        constructor(cache: { [id]: GameItem });

        save(items: GameItem[]): void;
        delete(): void;

        /*
            if Object
                result = GameCache.validate()
                if result == valid:
                    Bus.transfer() -> ph2
                    result = GameStorage.syncData()
                    if result == valid: 
                            GameCache.save()
                       result == non_valid:
                            Bus.transfer() -> ph2
        */
        put(...items: GameItem[]): Promise<Room.Result>;
        get(id): GameItem;
        find(predicate /* TODO */): GameItem[];
        delete(id): void;
        all(): GameItem[];

        getByKey(key, typeclass): GameItem;
        getByType(type: ItemModelType): GameItem[];
        // ??? formatIdToKey(id);
        // ??? formatKeyToId(key, typeclass);





        private _validateInStorage(items: GameItem[]): Promise<Room.ValidationResult>; // -> sync

        private _rollbackInCache(items: GameItem[], validationResult: Room.ValidationResult): Promise<boolean>; // ??? TODO
    }
}