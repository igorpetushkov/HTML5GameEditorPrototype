import { PhGame } from './PhGame';
import { PhState } from './PhState';
import { PhLayer } from './PhLayer';
import { PhImage } from './gameobject/PhImage';
import { PhSprite } from './gameobject/PhSprite';
import { PhAssetImage } from './asset/PhAssetImage';

export class PhGameBuilder {
    public static build(phgame: PhGame, data: PhGame.ItemModel): PhGame.Item {
        let inst = null;

        switch (data.typeclass) {
            case 'scene':
                inst = new PhState(data as PhGame.StateModel, phgame);
                phgame.stateman.add(inst);

                break;
            case 'layer':
                inst = new PhLayer(phgame.game, data as PhLayer.Model);

                break;
            case 'object':
                switch ((data as PhGame.ObjectItemModel).typeobject) {
                    case 'image':
                        inst = new PhImage(phgame.game, data as PhGame.ImageModel);
                        break;
                    case 'sprite':
                        inst = new PhSprite(phgame.game, data as PhGame.SpriteModel);
                        break;
                }

                break;
            case 'asset':
                switch ((data as PhGame.AssetModel).typeasset) {
                    case 'image':
                        inst = new PhAssetImage(phgame.loader, data as PhGame.AssetModel);
                        break;
                }
        }

        return inst;
    }
}