import { PhAsset } from './PhAsset';
import { PhGame } from '../PhGame';
import { PhLoader } from '../PhLoader';

export class PhAssetImage extends PhAsset {
    constructor(loader: PhLoader, model: PhGame.AssetModel) {
        super(loader, model);
    }
}