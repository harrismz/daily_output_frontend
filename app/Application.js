Ext.define('helloext.Application', {
    name: 'helloext',
    
    extend: 'Ext.app.Application',
    
    requires: [
        'Ext.container.Viewport',
        'Ext.form.Panel',
        'Ext.data.proxy.Rest'
     ],

    views: [
        // TODO: add views here
        /*'user.List',
        'user.Edit',
        'user.Create',*/
        'user.ActionPanel',
        'daily_output_grid'
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
                    xtype:'actionpanel'
                },
                {
                    xtype:'daily_output_grid'
                }
            ],

            renderTo: "mainPanel"
        });
    }

});
