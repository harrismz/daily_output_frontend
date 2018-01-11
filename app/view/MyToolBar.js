Ext.define("helloext.view.MyToolBar", {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.mytoolbar',
    // html: 'Hello, World!!'
    xtype: 'basic-toolbar',
    id: 'basic-toolbar',

    items: [{
                text: 'Add',
                iconCls: 'icon-add',
                handler: function(){
                    /*// empty record
                    store.insert(0, new Person());
                    rowEditing.startEdit(0, 0);*/
                    var tmpStore = new Daily_output();
                    console.log(tmpStore)
                }
            }, '-', {
                itemId: 'delete',
                text: 'Delete',
                iconCls: 'icon-delete',
                //disabled: true,
                handler: function(){
                    var selection = grid.getView().getSelectionModel().getSelection()[0];
                    if (selection) {
                        store.remove(selection);
                    }
                }
            }]
});