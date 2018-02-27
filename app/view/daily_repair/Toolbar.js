Ext.define("helloext.view.daily_repair.Toolbar", {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.daily_repair_toolbar',
    items: [
        {
            xtype: 'datefield',
            id: 'tanggal_daily_repair_toolbar',
            labelPad: 15,
            labelWidth:40,
            format: 'Y-m-d',          
            allowBlank: true,
            emptyText:'yyyy-mm-dd',
            value: new Date(),
            fieldLabel:'Tanggal'
        }, '-',

        {
            xtype:'button',
            id: 'btnRefresh_daily_repair_toolbar',
            text: 'Refresh' 
        }, '-',
        /*{   
            text: 'comboShift',
            xtype: 'combo',
            fieldLabel:'Shift',
            labelPad: 15,
            labelWidth:20,
            store: 'comboShifts',
            emptyText : 'Shift',
            id: 'comboShift_daily_repair_toolbar',
            displayField:'name',
            valueField:'name',
            queryMode: 'local',
            forceSelection: true,
            value:'A'
        },*/
        {
            xtype:'button',
            text: 'Log Out',
            handler: function (){
                localStorage.clear(); //hapus localStorage
                window.location.reload(); //refresh page
            }
        }      
    ]
});