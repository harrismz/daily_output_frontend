Ext.define('helloext.store.Lost_time_per_lines', { //parameter pertama harus sesuai filepath
    extend: 'Ext.data.Store',
    model: 'helloext.model.Lost_time_per_line',
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
        url: 'http://'+helloext.util.Config.hostname()+'/daily_output/public/api/lost_times/perline',
        reader:{
            root: 'data',
            type: 'json',
            // totalProperty: 'total',
            // idProperty: 'id'
        }
    }

});