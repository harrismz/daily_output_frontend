Ext.define('helloext.controller.Chart_permonth_toolbarController', {
    extend: 'Ext.app.Controller',
    stores:[
        'Permonths'
    ],
    models:[
        'Permonth'
    ],
    init :  function(){
    	// console.log('hai im helloext')
    	this.control({
    		
           'chart_permonth button#btnRefresh_Chart_permonth':{
                click: this.onRefresh
            },

            'chart_permonth #tanggal_Chart_permonth':{
                change: this.valueOnChange
            }


 
    	});

    },

    onRefresh : function (){
        var store = this.getPermonthsStore();
        // console.log('onRefresh', store)
        this.refresh(store);
    },

    refresh : function (store){
        store.load()
    },

    valueOnChange : function (component, value){
        
        var param = this.getReference();

        var tmp = param.tanggal.split("-");
        param.month = tmp[1];
        param.year = tmp[0];

        // console.log(param);

        var store = this.getPermonthsStore();
        // console.log(param, store);
        
        // return false;
        this.reload(store, param);
        
    },

    reload : function (store, param){
        // store.proxy.setExtraParam('tanggal', param.tanggal);
        store.proxy.setExtraParam('month', param.month);
        store.proxy.setExtraParam('year', param.year);
        // reload store
        store.loadData([],false);

        store.load(function (records, operation, success){
            if (success && store.totalCount == 0 ){
                var message = 'month : '+ param.month+ '<br> year : ' + param.year+' <br> ';
                Ext.Msg.alert('Info', message + 'Data Kosong!');
            }           
        });
    },

    getReference : function (){
        return {
            tanggal: Ext.ComponentQuery.query('#tanggal_Chart_permonth')[0].rawValue
        }
    } 



});
