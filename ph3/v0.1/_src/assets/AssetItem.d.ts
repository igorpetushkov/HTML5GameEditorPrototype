declare module KiGame {
    interface AssetItemModel extends StorageItemModel {
        assetType: AssetItemType;
    }

    enum AssetItemType {
        Image
    }

    class AssetItem extends StorageItem {

    }
}