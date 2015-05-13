angular.module('AngularFactory.models.App').factory('VoyageModel', function (store) {
    var leStore = store.getNamespacedStore('voyagemodel');

    if (leStore.get('items') === undefined || leStore.get('items') === null) {
        leStore.set('items', {});
    }

    function addItem(label, type, isFav) {
        var items = leStore.get('items');

        var itm = items[label];

        if (itm === undefined) {
            itm = {
                label: label,
                type: type,
                date: (new Date()),
                isFav: false
            };
        } else {
            itm.isFav = isFav;
        }

        items[label] = itm;

        leStore.set('items', items);


        return true;
    }

    function deleteItem(label) {
        var items = leStore.get('items');
        var newItems = {};

        for (var k in items) {
            if (k != label) {
                newItems[k] = items[k];
            }
        }

        leStore.set('items', newItems);
    }

    function getItems() {
        return leStore.get('items');
    }

    function updateItem(item) {
        var items = leStore.get('items');
        var newItems = {};

        for (var k in items) {
            if (k == item.label) {
                newItems[k] = item;
            } else {
                newItems[k] = items[k];
            }
        }

        leStore.set('items', newItems);
    }


    return {
        addItem: addItem,
        deleteItem: deleteItem,
        getItems: getItems,
        updateItem: updateItem
    };
});
