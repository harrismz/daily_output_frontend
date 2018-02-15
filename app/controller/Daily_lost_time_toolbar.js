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
            /*if (success && store.totalCount == 0 ){
                var a = self.getShift('a');
                var b = self.getShift('b');

                store.loadData([],false); //empty the local store without firing API  
                var Array_model = [];
                if(param.shift == 'A'){
                    for (var i = 0; i < self.getShift('a').length; i++) {
                        
                        if ( !param.isFriday() ){ //jika bkn jumat
                            var minute = a[i].durasi;
                            // console.log('bukan jumat', param )
                        }else{
                            var minute = a[i].jumat;
                            // console.log('jumat', param )
                        }

                        var model = new helloext.model.Daily_output({
                            time: a[i].name,
                            shift: 'A',
                            tanggal: param.tanggal,
                            line_name: param.line_name,
                            minute: minute,
                            users_id: users_id
                        });

                        Array_model.push(model);
                    }

                }else{
                    for (var i = 0; i < self.getShift('b').length; i++) {
                        
                        if ( !param.isFriday() ){ //jika bkn jumat
                            var minute = b[i].jumat;
                        }else{
                            var minute = b[i].durasi;
                        }

                        var model = new helloext.model.Daily_output({
                            time: b[i].name,
                            shift: 'B',
                            tanggal: param.tanggal,
                            minute: minute,
                            line_name: param.line_name,
                            users_id: users_id
                        });
                        Array_model.push(model);
                    }
                }
                
                store.add(Array_model); 
            }*/
            console.log({records, operation, success})         
        });
    }


});
