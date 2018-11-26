// import { UUID } from '../lib/uuid';

import * as PouchDB from 'pouchdb';
import * as PouchDBFind from 'pouchdb-find';
PouchDB.plugin(PouchDBFind);
// PouchDB.debug.enable('*');

import { StorageHelper } from './StorageHelper';
// import { Pool } from '../game/pool/Pool';

export namespace Storage {
    
}

export abstract class Storage {
    public static Helper = StorageHelper;

    private _localDB: PouchDB;
    private _remoteDB: PouchDB;

    constructor({dbkey, ...options}: Storage.Options) {
        if (dbkey) {
            try {
                if (dbkey.includes('+')) {
                    const [localName/*, remoteUrl*/] = dbkey.split('+');

                    this._localDB = new PouchDB(localName, options);
                    // this._remoteDB = new PouchDB(remoteUrl, options);
                } else if (dbkey.includes('http://')) {
                    // this._remoteDB = new PouchDB(dbkey, options);
                } else {
                    this._localDB = new PouchDB(dbkey, options);
                }
            } catch (err) { }
        } else {
            throw 'error';
        }
    }

    private get _db(): PouchDB {
        return this._localDB || this._remoteDB;
    }

    public async init(callback: Function, localIndexes[] = [], data: Storage.Model[] = []): Promise<Storage.Model[]> {
        try {
            if (this._localDB && localIndexes.length) {
                for (let localIndex of localIndexes) {
                    await this._localDB.createIndex({
                        index: localIndex,
                    });
                }
            }

            if (data.length) {
                await this.putModels(data);
            }

            let dbSync = null;

            if (this._localDB && this._remoteDB) {
                dbSync = this._localDB.sync(this._remoteDB, {
                    live: true,
                });
            } else {
                dbSync = this._db;
            }

            dbSync.changes({
                since: 'now',
                live: true,
                include_docs: true,
            }).on('change', (data) => {
                // const items = Pool.Helper.formatDataFromStorage(data);
                callback([]);
            }).on('error', (err) => {
                throw 'error Storage.change';
            });
        } catch (err) { }

        return [];
    }

    public async putModels(models: Storage.Model[]): Promise<boolean> {
        try {
            // let result = await this._db.bulkDocs(models);
        } catch (err) {
            throw 'error: Storage.putModels :: ' + err;
        }

        return true;
    }

    public async findModels(request: Storage.Request): Promise<Storage.Model[]> {
        try {
            let result = await this._db.find(request);

            return result;
        } catch (err) {
            throw 'error Storage.find';
        }
    }

    public static formatUrl(localName, remoteUrl) {
        if (!localName && !remoteUrl) {
            throw 'error StorageHelper.formatUrl';
        }

        if (remoteUrl && remoteUrl.startsWith('!')) {
            return remoteUrl;
        }

        if (localName && !remoteUrl) {
            return localName;
        }

        if (localName && remoteUrl) {
            return `${localName}+${remoteUrl}`;
        }

        return null;
    }
}