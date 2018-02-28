Ext.define('helloext.view.Fa_quality_container', {
    extend: 'Ext.container.Container',
    xtype: 'fa_quality',
    style: { 
        "background-image" : "url(resources/img.jpg) !important"
    },

    layout: {
        type: 'border'
    },

    /*defaults: {
        collapsible: true,
        split: {
            size : 20
        }
    },*/

    autoScroll: true,

    items: [
        {
            xtype : 'fa_quality_toolbar',
            region : 'north'
        },
        {
            xtype : 'chart_daily_rejection_by_line',
            region : 'center'
        },
        {
            xtype: 'chart_div_responsibilities',
            region: 'east',
            width : '30%'
        }/*,
        {
            xtype: 'chart_daily_rejection_per_month',
            region: 'south',
            height : '40%'
        }*/

    ]
});