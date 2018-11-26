import { Storage } from './Storage';

export namespace PhysicsStorage {
    export interface Model {}
}

export class PhysicsStorage extends Storage {
    public async sync(data: PhysicsStorage.Model[]): Promise<boolean> {
        return null;
    }

    public async update(data): Promise<boolean> {
        return true;
    }
}