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
        /*{
            xtype: 'basic-toolbar',
            region : 'north',
            alias : 'widget.chart_div_responsibilities_toolbar',
            items: [
                {
                    xtype:'button',
                    id: 'btnRefresh',
                    text: 'Refresh' 
                }, '-',
                {
                    xtype: 'datefield',
                    // id: 'tanggal',
                    labelPad: 15,
                    labelWidth:40,
                    format: 'Y-m-d',          
                    allowBlank: true,
                    emptyText:'yyyy-mm-dd',
                    value: new Date(),
                    fieldLabel:'Tanggal'
                    //renderer: formatDate
                }, '-',
                {   
                    text: 'comboShift',
                    xtype: 'combo',
                    fieldLabel:'Shift',
                    labelPad: 15,
                    labelWidth:20,
                    store: 'comboShifts',
                    emptyText : 'Shift',
                    // id: 'comboShift',
                    displayField:'name',
                    valueField:'name',
                    queryMode: 'local',
                    forceSelection: true,
                    value:'A'
                },
                {
                    text: 'Line',
                    xtype: 'combo',
                    fieldLabel:'Line',
                    labelPad: 15,
                    labelWidth:20,
                    store: 'lines',
                    emptyText : 'lines',
                    // id: 'comboLine',
                    displayField:'name',
                    valueField:'name',
                    queryMode: 'local',
                    forceSelection: true,
                    value:'1'
                },
                {
                    text: 'Download',
                    xtype: 'button',
                    
                },
                {
                    xtype:'button',
                    // id: 'btnLogout',
                    text: 'Log Out',
                    handler: function (){
                        localStorage.clear(); //hapus localStorage
                        window.location.reload(); //refresh page
                    }
                }      
            ]
        }*/
        {
            xtype : 'fa_quality_toolbar',
            region : 'north'
        },
        {
            xtype: 'chart_div_responsibilities',
            region: 'center'
        }
    ]
});