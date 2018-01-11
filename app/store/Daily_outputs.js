Ext.define('helloext.store.Daily_outputs', { //parameter pertama harus sesuai filepath
    extend: 'Ext.data.Store',
    model: 'helloext.model.Daily_output',
    autoLoad:true,
    pageSize: 10,
    remoteSort: true,
    proxy: {
        type: 'rest',
        enablePaging:true,  
        url: 'http://localhost/daily_output/public/api/daily_outputs',
        reader:{
            root: 'data',
            type: 'json',
            totalProperty: 'total'
            // totalProperty: '_meta.count'
        }
    }
});