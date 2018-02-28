Ext.define("helloext.view.toolbar.Daily_lost_time_chart_toolbar", {
    extend: 'Ext.toolbar.Toolbar',
    alias : 'widget.daily_lost_time_chart_toolbar',
    items: [
        {
            xtype: 'datefield',
            id: 'tanggal_daily_lost_time_chart',
            labelPad: 15,
            labelWidth:40,
            format: 'Y-m-d',          
            allowBlank: true,
            emptyText:'yyyy-mm-dd',
            value: new Date(),
            fieldLabel:'Tanggal'
        }
        , '-',
        {
            xtype:'button',
            id: 'btnRefresh_daily_lost_time_chart',
            text: 'Refresh' 
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