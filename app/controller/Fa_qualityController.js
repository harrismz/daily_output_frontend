Ext.define('helloext.controller.Fa_qualityController', {
    extend: 'Ext.app.Controller',
    stores:[
        'Dics', 'Qualities'
    ],
    models:[
        'Dic' , 'Quality'
    ],
    init :  function(){
    	// console.log('hai im helloext')
    	this.control({
    		
           'fa_quality_toolbar button#btnRefresh':{
                click: this.onRefresh
            },

            'fa_quality_toolbar #tanggal_fa_quality_toolbar':{
                change: this.valueOnChange
            }


 
    	});

    },

    onRefresh : function (){
        var store = this.getDicsStore();
        var store2 = this.getQualitiesStore();
        // console.log('onRefresh', store)
        this.refresh(store);
        this.refresh(store2);
    },

    refresh : function (store){
        store.load()
    },

    tanggalOnChange: function (){
        // console.log('tanggalOnChange')    
    },

    valueOnChange : function (component, value){
        
        var param = this.getReference();
        var store = this.getDicsStore();
        var Qualities = this.getQualitiesStore();
        // console.log(param, store);
        
        // return false;
        this.reload(store, param);
        this.reload(Qualities, param);
        
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
            tanggal: Ext.ComponentQuery.query('#tanggal_fa_quality_toolbar')[0].rawValue,
            //shift: Ext.ComponentQuery.query('combo#comboShift_fa_quality_toolbar')[0].value,
            //line_name: Ext.ComponentQuery.query('combo#comboLine_fa_quality_toolbar')[0].value
        }
    } 



});
