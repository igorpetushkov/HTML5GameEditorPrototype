declare module KiGame {
    class GameHistory {
        private _points; // ??? TODO

        addPoint(point: GameCacheHistoryPoint): void;
        findPoint(query: GameCacheHistory.PointQuery): GameCacheHistoryPoint;
        removePoint(point: GameCacheHistoryPoint): void;

        last(): void;
        current(): void;
        back(): void;
        next(): void;
        count();
    }

    module GameHistory {
        interface PointQuery { }
    }

    class GameHistoryPoint { }
}