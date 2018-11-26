const upd = ['scene.toolbar.positions'];

export default {
    move: (args, state) => {
        const { positions } = state.scene.toolbar;

        positions.move = !positions.move;
        positions.scale = false;
        positions.rotate = false;
        positions.rotateLeft = false;
        positions.rotateRight = false;
        positions.rotate90 = false;

        return upd;
    },

    scale: (args, state) => {
        const { positions } = state.scene.toolbar;

        positions.move = false;
        positions.scale = !positions.scale;
        positions.rotate = false;
        positions.rotateLeft = false;
        positions.rotateRight = false;
        positions.rotate90 = false;

        return upd;
    },

    rotate: (args, state) => {
        const { positions } = state.scene.toolbar;

        positions.move = false;
        positions.scale = false;
        positions.rotate = !positions.rotate;
        positions.rotateLeft = false;
        positions.rotateRight = false;
        positions.rotate90 = false;

        return upd;
    },

    rotateLeft: (args, state) => {
        const { positions } = state.scene.toolbar;

        positions.move = false;
        positions.scale = false;
        positions.rotate = true;
        positions.rotateLeft = !positions.rotateLeft;
        positions.rotateRight = false;
        positions.rotate90 = false;

        return upd;
    },

    rotateRight: (args, state) => {
        const { positions } = state.scene.toolbar;

        positions.move = false;
        positions.scale = false;
        positions.rotate = true;
        positions.rotateLeft = false;
        positions.rotateRight = !positions.rotateRight;
        positions.rotate90 = false;

        return upd;
    },

    rotate90: (args, state) => {
        const { positions } = state.scene.toolbar;

        positions.move = false;
        positions.scale = false;
        positions.rotate = true;
        positions.rotateLeft = false;
        positions.rotateRight = false;
        positions.rotate90 = !positions.rotate90;

        return upd;
    },
};