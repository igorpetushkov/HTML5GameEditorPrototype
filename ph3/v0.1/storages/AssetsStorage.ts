import { Storage } from './Storage';

export class AssetsStorage extends Storage {
    public async sync(data: AssetsStorage.Model[]): Promise<boolean> {
        return null;
    }

    public async update(data): Promise<boolean> {
        return true;
    }
}