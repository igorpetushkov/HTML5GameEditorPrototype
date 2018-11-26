declare module KiGame {
    class GameValidation {
        validate(models: ItemModel[]): GameCacheValidation.Result;
    }

    module GameCacheValidation {
        interface Result { }
    }
}