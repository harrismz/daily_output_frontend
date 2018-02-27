Ext.define('helloext.view.Chart_month_container', {
    extend: 'Ext.container.Container',
    xtype: 'chart_month_container',
    style: { 
        "background-image" : "url(resources/img.jpg) !important"
    },

    layout: {
        type: 'border'
    },

    defaults: {
        collapsible: true,
        split: {
            size : 20
        }
    },

    autoScroll: true,

    items: [
        {
            xtype : 'chart_permonth',
            region : 'north'
        },
        {
            xtype: 'chart_daily_rejection_per_month',
            region: 'center'
        }

    ]
});