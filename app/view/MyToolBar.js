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
        }, '-',
        {
            xtype: 'datefield',
            id: 'tanggal',
            format: 'Y-m-d',          
            allowBlank: true,
            emptyText:'yyyy-mm-dd',
            value: new Date(),
            //renderer: formatDate
        }

    ]
});