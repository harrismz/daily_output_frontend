Ext.define('helloext.store.Repairs', { //parameter pertama harus sesuai filepath
    extend: 'Ext.data.Store',
    model: 'helloext.model.Repair',
    autoLoad:true,   
    autoSync: true,
    // remoteSort: true,
    proxy: {
        type: 'rest',
        enablePaging:true,
        headers: {
            Authorization : 'Bearer ' + helloext.util.Config.getToken()  //setting token, ambil dari localStorage
        },
        /*extraParams: {
            tanggal: new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate(),
            shift: 'A',
            line_name: 1,
            users_id: helloext.util.Config.getUser(),
            token : helloext.util.Config.getToken()
        },*/  
        url: 'http://'+helloext.util.Config.hostname()+'/daily_output/public/api/daily_repairs',
        reader:{
            root: 'data',
            type: 'json',
            totalProperty: 'total',
            idProperty: 'id'
        }
    }

});