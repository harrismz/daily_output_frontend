Ext.define('helloext.view.Daily_repair_container', {
    extend: 'Ext.container.Container',
    xtype: 'daily_repair',
    style: { 
        "background-image" : "url(resources/img.jpg) !important"
    },

    layout: {
        type: 'border'
    },

    items: [
        /*{
            xtype : 'fa_quality_toolbar',
            region : 'north'
        },*/
        {
            xtype: 'daily_repair_grid',
            region: 'center'
        }
    ]
});