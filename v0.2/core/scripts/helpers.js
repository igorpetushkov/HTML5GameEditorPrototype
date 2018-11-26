import { buildTreeData } from 'kroppli-ui/lists/tree/helpers';

export const buildFunctionsTreeListData = state => {
    const { folders, functions } = state.scripts;

    const tree = buildTreeData(functions.storage, folders.storage, '_functions', '_folders');

    const root = _.remove(tree, { key: 'root' });
    tree.push(...root[0].items);

    return tree;
};