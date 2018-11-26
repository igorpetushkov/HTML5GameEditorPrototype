import root from './core/root/actions';

import world from './core/world/actions';
import scripts from './core/scripts/actions';
import assets from './core/assets/actions';

import scene from './core/scene/actions';

import inspector from './core/inspector/actions';

import terminal from './core/terminal/actions';

export default {
    ...root,

    ...world,
    ...scripts,
    ...assets,

    ...scene,

    ...inspector,

    ...terminal,
};