Ext.define('helloext.controller.DailyRepairToolbarController', {
    extend: 'Ext.app.Controller',
    stores:[
        'Repairs'
    ],
    models:[
        'Repair'
    ],
    init :  function(){
    	// console.log('hai im helloext')
    	this.control({
    		
            'daily_repair_toolbar #tanggal_daily_repair_toolbar':{
                change: this.valueOnChange
            }
 
    	});

    },

    valueOnChange : function (component, value){
        
        var param = this.getReference();
        var store = this.getRepairsStore();
        
        // console.log(param, store);
        
        // return false;

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
            tanggal: Ext.ComponentQuery.query('#tanggal_daily_repair_toolbar')[0].rawValue
        }
    } 



});
