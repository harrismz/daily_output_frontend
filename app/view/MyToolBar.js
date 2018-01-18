Ext.define("helloext.view.MyToolBar", {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.MyToolBar',
    xtype: 'basic-toolbar',
    items: [
        {
            xtype:'button',
            id: 'btnAdd',
            text: 'Add' 
        }, '-', 
        {
            xtype:'button',
            id:'btnDelete',
            text: 'Delete'
        }, '-',
        {
            xtype: 'datefield',
            id: 'tanggal',
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
            id: 'comboShift',
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
            id: 'comboLine',
            displayField:'name',
            valueField:'name',
            queryMode: 'local',
            forceSelection: true,
            value:'1'
        },
        {
            text: 'Download',
            xtype: 'button',
            id:'btnDownload',
            handler: function (){
             var url = 'http://localhost/daily_output/public/api/daily_outputs/download';
             var win = window.open(url, '_blank');
             win.focus();   
            }
        },
        {
            xtype:'button',
            id: 'btnLogout',
            text: 'Log Out',
            handler: function (){
                localStorage.clear();
                window.location.reload();
            }
        },
        

    ]
});