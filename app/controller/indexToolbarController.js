Ext.define('helloext.controller.indexToolbarController', {
    extend: 'Ext.app.Controller',
    models:[ 'Daily_output' ],
    stores:[ 'Daily_outputs' ],
    init : function (){

    	this.control({
    		'indexToolbar #tanggal ':{ //downloadView = xtype nya, bukan classnya.!
    			change: this.valueOnChange
    		},

    		'indexToolbar #comboShift ':{ //downloadView = xtype nya, bukan classnya.!
    			change: this.valueOnChange
    		},

    		'indexToolbar #comboLine ':{ //downloadView = xtype nya, bukan classnya.!
    			change: this.valueOnChange
    		},   

    		'indexToolbar #btnLogIn ':{ //downloadView = xtype nya, bukan classnya.!
    			click: this.btnLogInOnClick
    		}

    	});
    },

	valueOnChange : function (component, value){
    	
    	var param = this.getReference();
    	var store = this.getDaily_outputsStore();

    	store.proxy.setExtraParam('tanggal', param.tanggal);
        store.proxy.setExtraParam('shift', param.shift);
        store.proxy.setExtraParam('line_name', param.line_name);
        // reload store
        store.loadData([],false);

        store.load(function (records, operation, success){
			if (success && store.totalCount == 0 ){
				var message = 'Tanggal : '+ param.tanggal+ '<br> shift : ' + param.shift+ '<br> line : ' + param.line_name+ ' <br> ';
				Ext.Msg.alert('Info', message + 'Data Kosong!');
			}        	
        });
    },

    btnLogInOnClick: function(){
    	// console.log('btn on click')
    	Ext.widget({
    		xtype: 'window',
    		modal: true,
    		height: 200,
    		autoShow: true,
    		layout: 'fit',
    		items:[
    			{
    				xtype: 'login_view'
    			}
    		]
    	})
    },

    getReference : function (){
    	return {
    		tanggal: Ext.ComponentQuery.query('#tanggal')[0].rawValue,
    		shift: Ext.ComponentQuery.query('combo#comboShift')[0].value,
    		line_name: Ext.ComponentQuery.query('combo#comboLine')[0].value
    	}
    }    
});
