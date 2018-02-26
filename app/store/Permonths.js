Ext.define('helloext.store.Permonths', { //parameter pertama harus sesuai filepath
    extend: 'Ext.data.Store',
    model: 'helloext.model.Permonth',
    autoLoad:true,   
    proxy: {
        type: 'rest',
        headers: {
            Authorization : 'Bearer ' + helloext.util.Config.getToken()  //setting token, ambil dari localStorage
        },
        url: 'http://'+helloext.util.Config.hostname()+'/daily_output/public/api/daily_repairs/permonth',
        reader:{
            root: 'data',
            type: 'json'
        }
    }

});