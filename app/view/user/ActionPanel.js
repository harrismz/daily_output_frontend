Ext.define('helloext.view.user.ActionPanel', {
	extend: 'Ext.panel.Panel',

	alias:'widget.actionpanel',

	title:'Action Panel',

	items:[
		{
            xtype:'button',
            id: 'btnAdd',
            text: 'Add' 
        },
        {
            xtype:'button',
            id:'btnDelete',
            text: 'Delete'
        }
	]

});