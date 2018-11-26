// import * as _ from 'lodash';

// import { Game } from '../Game';
// import { PoolItem } from '../pool/PoolItem';
// import { Storage } from '../../storage/Storage';
// import { PhPoint } from '../../lib/phaser';
// import { DataStorage } from '../../storage/DataStorage';
// import { InfoService } from '../../services/info/InfoService';
// import { PrintService } from '../../services/print/PrintService';

// export abstract class Group extends PoolItem {
//     public static async info(key?, typegroup?, deep): Promise<InfoService.Modell> {
//         return await InfoService.info({ typeclass: 'group', typegroup: typegroup, key: key, deep: deep });
//     }

//     public static async infoDeep(key?, typegroup?): Promise<InfoService.Modell> {
//         return await Group.info(key, typegroup, true);
//     }

//     public static print(key?, typegroup?, deep): void {
//         Group.info(key, typegroup, deep).then(data => PrintService.print(...[].concat(data)));
//     }

//     public static printDeep(key?, typegroup?): void {
//         return Group.print(key, typegroup, true);
//     }

//     public static select(key, typegroup): Group {
//         return Game.getPool().findItem({
//             key: key,
//             typeclass: 'group',
//             typegroup: typegroup,
//         }) as Group;
//     }

//     public add(objects[], typegroup): Group {
//         const groupId = this.id;

//         _.each(objects, object => {
//             const item = Game.getPool().findItemByKey(object, typegroup) as PoolItem;

//             if (item) {
//                 item.attr('group', groupId);
//             }
//         });

//         return this;
//     }

//     public remove(objects[], typegroup): Group {
//         _.each(objects, object => {
//             const item = Game.getPool().findItemByKey(object, typegroup) as PoolItem;

//             if (item) {
//                 item.attr('group', null);
//             }
//         });

//         return this;
//     }

//     public clear(): Group {
//         _.each(this.getLinks() as PoolItem[], object => object.attr('group', null));

//         return this;
//     }

//     // TODO: prevent change scene of the object if it is in the group with other scene
//     public update(validate, deep) {
//         if (!this.validate()) {
//             throw 'error: Group.update - group is not valid!';
//         }

//         const objects = this.getLinks();

//         _.each(['debug', 'hidden', 'scale', 'rotate', 'scene'], method => {
//             _.invokeMap(objects, method, this.attr(method));
//         });

//         _.each(['position', 'anchor'], method => {
//             const value = this.attr(method);

//             if (value) {
//                 _.invokeMap(objects, method, value.x, value.y);
//             }
//         });

//         return super.update(false, true);
//     }

//     public postUpdate(isOk): void {
//         if (isOk) {
//             Game.ph().debug.reset();
//         }
//     }

//     public debug(value?) & ObjectGroup {
//         return this.attr('debug', value);
//     }

//     public hidden(value?) & ObjectGroup {
//         return this.attr('hidden', value);
//     }

//     public position(...args): PhPoint & ObjectGroup {
//         const value = args[0] !== undefined && args[1] !== undefined ? { x: args[0], y: args[1] } : undefined;

//         return this.attr('position', value);
//     }

//     public anchor(...args): PhPoint & ObjectGroup {
//         const value = args[0] !== undefined && args[1] !== undefined ? { x: args[0], y: args[1] } : undefined;

//         return this.attr('anchor', value);
//     }

//     public scale(value?) & ObjectGroup {
//         return this.attr('scale', value);
//     }

//     public rotate(value?) & ObjectGroup {
//         return this.attr('rotate', value);
//     }

//     public scene(value?) & ObjectGroup {
//         return this.attr('scene', value);
//     }

//     public layer(value?) & ObjectGroup {
//         return this.attr('layer', value);
//     }
// }