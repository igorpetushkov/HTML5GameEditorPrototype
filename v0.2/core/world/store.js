import {
    buildObjectsTreeListData,
    findGroupsWithSelectedItems,
    buildLayersTreeListData,
    findScenesWithSelectedLayers,
} from './helpers';

export default storage => ({
    tabs: {
        selectedTab: 'objects',
    },

    objects: {
        storage: storage.objects,
        search: {
            value: 'is: objects',
            mask: true,
        },
        selectedObjects: [],

        f: {
            treeData: buildObjectsTreeListData,
            groupsWithSelectedItems: findGroupsWithSelectedItems,
            selectedGroups: store => store.world.groups.selectedGroups,
            expandedGroups: store => store.world.groups.expandedGroups,
        }
    },
    groups: {
        storage: storage.groups,
        selectedGroups: [],
        expandedGroups: [],
    },
    scenes: {
        storage: storage.scenes,
        selectedScene: 'scene1',
        search: {
            value: 'is: scenes',
            mask: true,
        }
    },
    layers: {
        storage: storage.layers,
        selectedLayers: ['layer1'],
        expandedScenes: ['scene1'],
        search: {
            value: 'is: layers',
            mask: true,
        },

        f: {
            treeData: buildLayersTreeListData,
            scenesWithSelectedLayers: findScenesWithSelectedLayers,
        },
    },
    tags: {
        storage: storage.tags,
        selectedTags: ['tags1'],
        search: {
            value: 'is: tags',
            mask: true,
        },
    },
});