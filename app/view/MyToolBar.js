Ext.define("helloext.view.MyToolBar", {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.MyToolBar',
    xtype: 'basic-toolbar',
    items: [
        {
            xtype:'button',
            id: 'btnAdd',
            text: 'Add' 
        }, '-', 
        {
            xtype:'button',
            id:'btnDelete',
            text: 'Delete'
        }
    ]
});