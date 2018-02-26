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
        var store = this.getPermonthsStore();
        // console.log(param, store);
        
        // return false;
        this.reload(store, param);
        
    },

    reload : function (store, param){
        store.proxy.setExtraParam('tanggal', param.tanggal);
        // store.proxy.setExtraParam('shift', param.shift);
        // store.proxy.setExtraParam('line_name', param.line_name);
        // reload store
        store.loadData([],false);

        store.load(function (records, operation, success){
            if (success && store.totalCount == 0 ){
                var message = 'Tanggal : '+ param.tanggal+ '<br> shift : ' + param.shift+ '<br> line : ' + param.line_name+ ' <br> ';
                Ext.Msg.alert('Info', message + 'Data Kosong!');
            }           
        });
    },

    getReference : function (){
        return {
            tanggal: Ext.ComponentQuery.query('#tanggal_Chart_permonth')[0].rawValue,
            //shift: Ext.ComponentQuery.query('combo#comboShift_fa_quality_toolbar')[0].value,
            //line_name: Ext.ComponentQuery.query('combo#comboLine_fa_quality_toolbar')[0].value
        }
    } 



});
