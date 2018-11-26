import { buildTreeData } from 'kroppli-ui/lists/tree/helpers';

export const buildImagesTreeListData = state => {
    const { folders, images } = state.assets;
    const tree = buildTreeData(images.storage, folders.storage, '_images', '_folders');

    const root = _.remove(tree, { key: 'root' });
    tree.push(...root[0].items);

    return tree;
};