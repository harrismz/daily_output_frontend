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
        'Ext.grid.RowNumberer',
        'Ext.grid.plugin.RowEditing',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Date'
        // 'KitchenSink.model.Company'
     ],

    views: [
        // TODO: add views here
        /*'user.ActionPanel',*/
        'Create',
        'daily_output_grid',
        'MyToolBar'
    ],

    controllers: [
        'Daily_outputs',
        'MyToolBar'
    ],

    //Collection
    stores: [
        'Daily_outputs',
        'timeCombos'
    ],

    //model
    models:[
        /*'User'*/
        'Daily_output',
        'timeCombo'
    ],

    launch: function() {
        Ext.create('Ext.container.Container', {
            items: [
                
                {   
                    xtype:'daily_output_grid',

                    title: 'Daily output controll',
                    
                    tbar:{
                        xtype: 'MyToolBar'
                    },

                    bbar: {
                        xtype: 'pagingtoolbar',
                        pageSize: 50,
                        store: 'Daily_outputs',
                        emptyMsg: 'Sorry, No Records Are Available At The Moment.',   
                        displayInfo: true,
                        plugins: new Ext.ux.ProgressBarPager()
                    },
                    
                    height: 500,
                }
            ],

            

            renderTo: "mainPanel"
            // renderTo: Ext.getBody()
        });
    }

});
