declare module KiGame {
    interface GameGroupModel extends GameItemModel {
        groupType: GameGroupType;
    }

    enum GameGroupType {
        BaseGroup,
        Layer
    }

    class GameGroup extends GameItem {
        init(): Promise<boolean>;

    }
}