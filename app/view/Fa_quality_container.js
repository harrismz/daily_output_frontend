Ext.define('helloext.view.Fa_quality_container', {
    extend: 'Ext.container.Container',
    xtype: 'fa_quality',
    style: { 
        "background-image" : "url(resources/img.jpg) !important"
    },

    layout: {
        type: 'border'
    },

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
            width : '50%'
        }
    ]
});