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
        {
            xtype:'button',
            text: 'Log Out',
            handler: function (){
                localStorage.clear(); //hapus localStorage
                window.location.reload(); //refresh page
            }
        },
        {
            xtype :'button',
            text : 'Help',
            handler : function (){
                var link = 'http://'+helloext.util.Config.hostname()+'/daily_output/public/';
                window.open(link);
            }
        }       
    ]
});