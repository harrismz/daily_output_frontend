Ext.define("helloext.view.Fa_quality_toolbar", {
    extend: 'Ext.toolbar.Toolbar',
    style:{
    	'border-radius' : '5px'
    },
    alias : 'widget.fa_quality_toolbar',
    items: [
        {
            xtype:'button',
            id: 'btnRefresh',
            text: 'Refresh' 
        }, '-',
        {
            xtype: 'datefield',
            id: 'tanggal_fa_quality_toolbar',
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
            id: 'comboShift_fa_quality_toolbar',
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
            id: 'comboLine_fa_quality_toolbar',
            displayField:'name',
            valueField:'name',
            queryMode: 'local',
            forceSelection: true,
            value:'1'
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