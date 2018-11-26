declare module KiGame {
    abstract class Storage {
        constructor(options: Storage.Options);

        init(): Promise<Storage>;
        // ? onChanges(): void;

        insertOne(model: StorageItemModel): Promise<Storage.Result>;
        insertMany(models: StorageItemModel[]): Promise<Storage.Result>;

        find(query: Storage.Query): Promise<Storage.Result>;

        updateOne(model: StorageItemModel): Promise<Storage.Result>;
        updateMany(models: StorageItemModel[]): Promise<Storage.Result>;

        deleteOne(id): Promise<Storage.Result>;
        deleteMany(ids[]): Promise<Storage.Result>;

        createIndex(key): Promise<Storage.Result>;
        removeIndex(key): Promise<Storage.Result>;
    }

    module Storage {
        interface Options {
            dbkey;
            adapter?;
            revs_limit?;
        }

        interface Query {
            selector: { [key] };
            filter?: Function;
            fields?[];
            sort?[];
        }

        interface Result { }
    }
}