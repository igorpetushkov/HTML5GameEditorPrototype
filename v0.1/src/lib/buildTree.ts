import * as _ from 'lodash';

let branchCount;

export default (data: any[] = []): any[] => {
    const tree = [];
    branchCount = 0;

    _buildTree([].concat(data), tree);

    return tree;
};

function _buildTree(data: any[], tree: any[]) {
    if (!data || !data.length) {
        return;
    }

    const item = _.first(data);
    const path = item.url.split('/').slice(0, -1);

    if (!path.length) {
        tree.push(item);

        if (data.length !== 1) {
            _buildTree(data.shift() && data, tree);
        }
    } else {
        let point = null;

        path.forEach((name, index) => {
            const items = [];
            const branch: any = _.find(point ? point : tree, { name: name });

            if (branch) {
                point = branch.items;
            } else {
                (point || tree).push({ id: `branch${++branchCount}`, name: name, items: items });
                point = items;
            }

            if (index === path.length - 1) {
                (branch ? branch.items : point).push(item);
                if (data.length !== 1) {
                    _buildTree(data.shift() && data, tree);
                }
            }
        });
    }
}