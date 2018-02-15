Ext.define("helloext.view.daily_lost_time.toolbar", {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.daily_lost_time_toolbar',
    // xtype: 'basic-toolbar',
    items: [
        {
            xtype: 'datefield',
            id: 'tanggalLostTime',
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
            labelPad: 15,
            labelWidth:20,
            store: 'comboShifts',
            emptyText : 'Shift',
            id: 'comboShiftLostTime',
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
            id: 'comboLineLostTime',
            displayField:'name',
            valueField:'name',
            queryMode: 'local',
            forceSelection: true,
            value:'1'
        },
        // {
        //     text: 'Download',
        //     xtype: 'button',
        //     id:'btnDownloadLostTime'
        // },
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