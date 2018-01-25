Ext.define('helloext.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
        'Ext.chart.axis.Category',
        'Ext.chart.series.Line',
        'Ext.chart.axis.Numeric'
    ],

    xtype: 'app-main',

    style: { 
        "background-image" : "url(resources/img.jpg) !important"
    },

    layout: {
        type: 'border'
        /*,
        align: 'center',
        pack: 'center'*/
    },

    items: [
        {   
            xtype: 'container',
            // width: 200,//'100%',
            region: 'north',
            // layout : 'border',
            items:[
                /*{
                    xtype: 'login_view',
                    // region : 'east',
                    height: '50%',
                    width: '30%'
                },*/
                {
                    xtype: 'panel',
                    html: '<h1 > DAILY OUTPUT CONTROL </h1>',
                        /*layout: { 
                            type: 'vbox',
                            align: 'center'
                        },*/
                    region: 'north',
                    flex: 1,
                    split :true,
                    bodyPadding : '10',
                    height: 55,
                    frame: false,
                    border: false,
                    bodyStyle: {
                        "background-image" : "url(resources/img.jpg) !important",
                        'color' : 'white',
                        'align' : 'center'
                    }
                },
                {
                    xtype : 'indexToolbar',
                    region: 'center',
                    margin: '10 10 10 10'
                }
            ]
        },

        {
            xtype: 'chart_delay_type',
            region: 'center'
        },

        {
            xtype: 'chart_target_output',
            region: 'east',
            width: '60%'
        }
    ]
});