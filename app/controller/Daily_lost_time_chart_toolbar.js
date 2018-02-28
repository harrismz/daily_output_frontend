Ext.define('helloext.controller.Daily_lost_time_chart_toolbar', {
    extend: 'Ext.app.Controller',
    stores:[
        'Lost_time_per_lines', 'Lost_time_per_months'
    ],
    models:[
        'Lost_time_per_line', 'Lost_time_per_month'
    ],
    init :  function(){
    	// console.log('hai im helloext')
    	this.control({
    		
            'daily_lost_time_chart_toolbar #tanggal_daily_lost_time_chart':{
                change: this.valueOnChange
            },

            

            'daily_lost_time_chart_toolbar #btnRefresh_daily_lost_time_chart':{
                click: this.onRefresh
            }            
 
    	});

    },

    valueOnChange : function (component, value){
        
        var param = this.getReference();
        var store = this.getLost_time_per_linesStore();
        var store2 = this.getLost_time_per_monthsStore();
        
        // console.log(param, store);
        
        this.StoreLoad(store, param);
        this.StoreLoad(store2, param);
        
    },

    getReference : function (){
        return {
            tanggal: Ext.ComponentQuery.query('#tanggal_daily_lost_time_chart')[0].rawValue
        }
    },

    StoreLoad: function(store, param){
        store.proxy.extraParams = {} //set zero parameter
        var tmp = param.tanggal.split('-');
        var month = tmp[1];
        var year = tmp[0];

        store.proxy.setExtraParam('tanggal', param.tanggal);
        store.proxy.setExtraParam('month', month);
        store.proxy.setExtraParam('year', year);


        store.loadData([],false);
        store.load(function (records, operation, success){
            if (success && store.totalCount == 0 ){
                var message = 'Empty result! <br>';
                Ext.Msg.alert('Info', message + 'Data Kosong!');
            }           
        });
    },

    onRefresh: function(){
        var store = this.getLost_time_per_linesStore();
        var store2 = this.getLost_time_per_monthsStore();

        // store.proxy.extraParams = {}
        store.loadData([], false);
        store.load();

        // store2.proxy.extraParams = {}
        store2.loadData([], false);
        store2.load();



    } 


});
