Ext.define("helloext.view.indexToolbarView", {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.indexToolbar',
    style:{
    	'border-radius' : '5px',
    },
    items: [
        
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
        /*{
            text: 'Download',
            xtype: 'button',
            id:'btnDownload',
            
        },*/
        {
            xtype:'button',
            id: 'btnLogIn',
            text: 'Log In',
        },
        

    ]
});