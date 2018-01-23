Ext.define('helloext.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border'
    ],
    style: { 
        "background-image" : "url(resources/img.jpg) !important",
    },
    layout: {
        type: 'border',
        /*align: 'center',
        pack: 'center'*/
    },

    items: [
        {   
            xtype: 'container',
            // width: 200,//'100%',
            region: 'north',
            // layout : 'border',
            items:[
                {
                    xtype: 'login_view',
                    // region : 'east',
                    height: '50%',
                    width: '30%'
                },
                {
                    xtype : 'basic-toolbar',
                    region: 'center',
                    margin: '10 10 10 10',
                    // width: '70%'
                }
            ]
        },

        {
            xtype: 'chart_delay_type',
            region: 'center',
        },

        {
            xtype: 'chart_target_output',
            region: 'east'
        }
    ]
});