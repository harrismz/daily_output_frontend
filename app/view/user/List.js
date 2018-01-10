Ext.define('helloext.view.user.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.userlist',
    
    title: 'All Users',
    
    flex: 1 ,

    initComponent: function() {
        

        this.columns = [

            {header: 'Name',  dataIndex: 'name',  flex: 1 },
            {header: 'Email', dataIndex: 'email', flex: 1}
        ];

        this.callParent(arguments);
    },

    store:  'Users'
});