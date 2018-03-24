Ext.define("helloext.view.toolbar.daily_output.Toolbar", {
    extend: 'Ext.toolbar.Toolbar',
    
    alias: 'widget.toolbar_daily_output_toolbar',
   
    items: [
        {
            xtype: 'datefield',
            id: 'toolbar_daily_output_toolbar_tanggal',
            labelPad: 15,
            labelWidth:40,
            format: 'Y-m-d',          
            allowBlank: true,
            emptyText:'yyyy-mm-dd',
            value: new Date(),
            fieldLabel:'Tanggal'
        }, '-',
        {   
            text: 'comboShift',
            xtype: 'combo',
            fieldLabel:'Shift',
            id: 'toolbar_daily_output_toolbar_shift',
            labelPad: 15,
            labelWidth:20,
            store: 'comboShifts',
            emptyText : 'Shift',
            displayField:'name',
            valueField:'name',
            queryMode: 'local',
            forceSelection: true
        },
        {
            text: 'SHOW CHART',
            id:'toolbar_daily_output_toolbar_showchart',
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
});