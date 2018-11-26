import { buildTreeData } from 'kroppli-ui/lists/tree/helpers';

export const buildObjectsTreeListData = state => {
    const { groups, objects } = state.world;
    const tree = buildTreeData(objects.storage, groups.storage, '_objects', '_groups');

    const world = _.remove(tree, { key: 'world' });
    tree.push(...world[0].items);

    return tree;
};

export const findGroupsWithSelectedItems = state => {
    function findGroups(key, groups) {
        let result = [key];
        const objGroup = groups.find(group => group.key === key);

        if (objGroup._group) {
            result = result.concat(findGroups(objGroup._group, groups));
        }

        return result;
    }

    const { objects, groups } = state.world;
    let selectedItems = null;
    
    if (objects.selectedObjects.length) {
        selectedItems = objects.storage.filter(object => ~objects.selectedObjects.indexOf(object.key));
    } else if (groups.selectedGroups.length) {
        selectedItems = groups.storage.filter(group => ~groups.selectedGroups.indexOf(group.key));
    }

    if (selectedItems) {
        let results = [];

        for (const selectedItem of selectedItems) {
            const itemGroupKey = selectedItem._group;
            
            if (itemGroupKey) {
                results = results.concat(findGroups(itemGroupKey, groups.storage));
            }
        }

        return results;
        
    }

    return [];
};

export const buildLayersTreeListData = state => {
    const { scenes, layers } = state.world;

    return buildTreeData(layers.storage, scenes.storage, '_layers');
};

export const findScenesWithSelectedLayers = state => {
    const { layers } = state.world;
    const selectedLayers = layers.storage.filter(layer => ~layers.selectedLayers.indexOf(layer.key));

    return selectedLayers.map(selectedLayer => selectedLayer._scene);
};