import root from './core/root/store';
import menu from './core/menu/store';

import world from './core/world/store';
import scripts from './core/scripts/store';
import assets from './core/assets/store';

import scene from './core/scene/store';

import inspector from './core/inspector/store';

import terminal from './core/terminal/store';

export default storage => ({
    root: root(storage),
    menu: menu(storage),

    world: world(storage.world),
    scripts: scripts(storage.scripts),
    assets: assets(storage.assets),

    scene: scene(storage.world),

    inspector: inspector(),

    terminal: terminal(storage),
});