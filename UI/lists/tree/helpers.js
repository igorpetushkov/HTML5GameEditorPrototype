export const buildTreeData = (items, lists, itemKey, listKey) => {
    const tree = _.cloneDeep(lists);

    function buildTree(keys) {
        return keys.reduce((acc, key) => {
            const it = _.remove(tree, {key}).pop();

            if (it) {
                if (it[listKey]) {
                    it['lists'] = it[listKey] ? buildTree(it[listKey]) : [];
                    delete it[listKey];
                }
                
                it['items'] = items.filter(item => !!~it[itemKey].indexOf(item.key));
                delete it[itemKey];

                acc.push(it);
            }

            return acc;
        }, []);
    }

    return buildTree(_.map(tree, 'key'));
};