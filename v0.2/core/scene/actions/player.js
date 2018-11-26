const upd = ['scene.toolbar.player'];

export default {
    play: (args, state) => {
        const { player } = state.scene.toolbar;

        player.pre = true;
        player.play = false;
        player.pause = true;
        player.stop = true;
        player.next = true;

        return upd;
    },
    pause: (args, state) => {
        const { player } = state.scene.toolbar;

        player.pre = true;
        player.play = true;
        player.pause = false;
        player.stop = true;
        player.next = true;

        return upd;
    },
    stop: (args, state) => {
        const { player } = state.scene.toolbar;

        player.pre = false;
        player.play = true;
        player.pause = false;
        player.stop = false;
        player.next = false;

        return upd;
    },
    skipPrevious: (args, state) => {
        const { toolbar } = state.scene;

        return upd;
    },
    skipNext: (args, state) => {
        const { toolbar } = state.scene;

        return upd;
    },
};