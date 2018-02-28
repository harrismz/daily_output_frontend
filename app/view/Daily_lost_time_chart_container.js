Ext.define('helloext.view.Daily_lost_time_chart_container', {
    extend: 'Ext.container.Container',
    xtype: 'daily_lost_time_chart_container',
    style: { 
        "background-image" : "url(resources/img.jpg) !important"
    },

    layout: {
        type: 'border'
    },

    items: [
        {
            xtype: 'daily_lost_time_chart_toolbar',
            region : 'north'
        },
        {
            xtype : 'chart_daily_lost_time_per_line',
            region : 'west',
            width : '50%'
        },
        {
            xtype : 'chart_daily_lost_time_per_month',
            region: 'center'
        }
    ]
});