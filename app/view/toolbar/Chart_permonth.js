Ext.define("helloext.view.toolbar.Chart_permonth", {
    extend: 'Ext.toolbar.Toolbar',
    style:{
    	'border-radius' : '5px'
    },
    alias : 'widget.chart_permonth',
    items: [
        {
            xtype:'button',
            id: 'btnRefresh_Chart_permonth',
            // cls: 'btnRefresh',
            text: 'Refresh' 
        }, '-',
        {
            xtype: 'datefield',
            id: 'tanggal_Chart_permonth',
            // cls : 'tanggal',
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