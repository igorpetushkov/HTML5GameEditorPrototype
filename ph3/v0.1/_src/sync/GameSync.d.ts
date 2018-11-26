declare module KiGame {
    class GameSync {
        private _room: Room;
        

        /*
            #cache points
            
        */
        sync(): Promise<GameSync.Result>; // cache points -> pounch.change callback + push to storages if storages are existed

    }

    module GameSync {
        interface Result { }
    }
}