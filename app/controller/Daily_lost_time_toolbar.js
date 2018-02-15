Ext.define('helloext.controller.Daily_lost_time_toolbar', {
    extend: 'Ext.app.Controller',
    models:[ 'Lost_time' ],
    stores:[ 'Lost_times' ],
    views:['daily_lost_time.grid'],
    init : function () {

    	this.control({
    		'daily_lost_time_toolbar #tanggalLostTime':{
    			change: this.onChangeValue
    		},

    		'daily_lost_time_toolbar #comboShiftLostTime':{
    			change: this.onChangeValue
    		},

    		'daily_lost_time_toolbar #comboLineLostTime':{
    			change: this.onChangeValue
    		}

    	});
    },

    getReference : function () {
        return {
            tanggal: Ext.ComponentQuery.query('#tanggalLostTime')[0].rawValue,
            shift: Ext.ComponentQuery.query('#comboShiftLostTime')[0].value,
            line_name: Ext.ComponentQuery.query('#comboLineLostTime')[0].value,
            isFriday: function (){
                return new Date(this.tanggal).getDay() == 5; // jika jumat, true 
            }
        }
    },

    onChangeValue: function (component, value) {
        var param = this.getReference();
        var store = this.getLost_timesStore();
        var self = this;
        var users_id = helloext.util.Config.getUser() || null ;

        // console.log(param)
        
        store.proxy.setExtraParam('tanggal', param.tanggal);
        store.proxy.setExtraParam('shift', param.shift);
        store.proxy.setExtraParam('line_name', param.line_name);
        // reload store
        store.loadData([],false);

        store.load(function (records, operation, success){
            console.log('OK')       
        });
    }


});
