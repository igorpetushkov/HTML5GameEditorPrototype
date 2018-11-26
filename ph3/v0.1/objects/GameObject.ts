import * as _ from 'lodash';

import { PhGame, PhPoint } from '../../lib/phaser';
import { PhysicsItem } from '../physics/PhysicsItem';
import { Storage } from '../../storage/Storage';

export abstract class GameObject extends PhysicsItem {
    public abstract update_(phfunc: Function): void;
    public abstract render_(): void;

    public constructor(model: Storage.Model) {
        super(_.assign({ debug: true }, model));
    }

    public init(): GameObject {
        super.init();

        const ph = this.ph<PhGame.ObjectItem>();
        ph.update = this.update_.bind(this, ph.update.bind(ph));

        return this;
    }

    public postUpdate(isOk): void { }

    public debug(value?) & GameObject {
        return this.attr('debug', value);
    }

    public typeobject(value?) & GameObject {
        return this.attr('typeobject', value);
    }

    public width(value?) & GameObject {
        return this.attr('width', value);
    }

    public height(value?) & GameObject {
        return this.attr('height', value);
    }

    public position(...args): PhPoint & GameObject {
        const value = args[0] !== undefined && args[1] !== undefined ? { x: args[0], y: args[1] } : undefined;

        return this.attr('position', value);
    }

    public anchor(...args): PhPoint & GameObject {
        const value = args[0] !== undefined && args[1] !== undefined ? { x: args[0], y: args[1] } : undefined;

        return this.attr('anchor', value);
    }

    public scale(value?) & GameObject {
        return this.attr('scale', value);
    }

    public rotate(value?) & GameObject {
        return this.attr('rotate', value);
    }

    public hidden(value?) & GameObject {
        return this.attr('hidden', value);
    }

    public scene(value?) & GameObject {
        return this.attr('scene', value);
    }

    public layer(value?) & GameObject {
        return this.attr('layer', value);
    }

    public group(value?) & GameObject {
        return this.attr('group', value);
    }

    public tag(...args[])[] & GameObject {
        return this.attr('tag', args);
    }

    public getLinks(): PhysicsItem[] {
        return [];
    }

}