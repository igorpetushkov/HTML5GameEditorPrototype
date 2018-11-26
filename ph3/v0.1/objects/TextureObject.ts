// import Kroppli from "Kroppli";
// import {StorageType} from "game/Game/core/GameStorage";
// import {BaseObject, ObjectType} from "game/core/objects/BaseObject";
// import TextureAsset from "game/core/assets/TextureAsset";

// const DEFAULT_TEXTURE_NAME = "default.png";

// export abstract class TextureObject extends BaseObject {
//     private _texture: TextureAsset;

//     updateTexture(name): void {
//         this._texture = <TextureAsset>Kroppli.Game.Storage.getItem(name, StorageType.Asset);

//         if (!this._texture) {
//             // error
//         }
//     }

//     getTexture(): TextureAsset {
//         return this._texture;
//     }

//     changeTexture(name): void {
//         this.updateTexture(name);
//         this.getPhObject().loadTexture(name);
//     }

//     create(): void {
//         if (!this._texture) {
//             this.updateTexture(DEFAULT_TEXTURE_NAME);
//         }

//         let position = this.getPosition();
//         let phObject = new Phaser[ObjectType[this.getType()]](
//             Kroppli.Game.Phaser, position.x, position.y, this._texture.getName()
//         );
//         phObject.anchor = this.getAnchor();
//         phObject.exists = true;
//         phObject.visible = true;
//         phObject.alive = true;

//         this.setPhObject(phObject);

//         super.create();
//     }

//     get data() {
//         return _.assign(super.data, this._texture ? {texture: this._texture.data} : {});
//     }
// }