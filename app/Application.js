Ext.define('helloext.Application', {
    name: 'helloext',
    
    extend: 'Ext.app.Application',
    
    requires: [
        'Ext.container.Viewport',
        'Ext.form.Panel',
        'Ext.data.proxy.Rest',
        'Ext.toolbar.Paging',
        'Ext.grid.plugin.CellEditing',
        'Ext.ux.ProgressBarPager',
        'Ext.grid.RowNumberer'
        // 'KitchenSink.model.Company'
     ],

    views: [
        // TODO: add views here
        /*'user.List',
        'user.Edit',
        'user.Create',*/
        'user.ActionPanel',
        'daily_output_grid',
        'test'
    ],

    controllers: [
        // TODO: add controllers here
        /*'Users'*/
        'Daily_output_controller'
    ],

    //Collection
    stores: [
        // TODO: add stores here
        /*'Users'*/
        'Daily_outputs'
    ],

    //model
    models:[
        /*'User'*/
        'Daily_output'
    ],

    launch: function() {
        Ext.create('Ext.container.Container', {
            items: [
                {   
                    title: 'Daily output controll',
                    xtype:'daily_output_grid',
                    bbar: {
                        xtype: 'pagingtoolbar',
                        pageSize: 50,
                        store: 'Daily_outputs',
                        emptyMsg: 'Sorry, No Records Are Available At The Moment.',   
                        displayInfo: true,
                        //plugins: new Ext.ux.ProgressBarPager()
                    }
                }
            ],

            renderTo: "mainPanel"
            // renderTo: Ext.getBody()
        });
    }

});
