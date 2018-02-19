Ext.define('helloext.controller.Fa_qualityController', {
    extend: 'Ext.app.Controller',
    stores:[
        'Dics'
    ],
    models:[
        'Dic'
    ],
    init :  function(){
    	// console.log('hai im helloext')
    	this.control({
    		
           'fa_quality_toolbar button#btnRefresh':{
                click: this.onRefresh
            },

            'fa_quality_toolbar #tanggal_fa_quality_toolbar':{
                change: this.tanggalOnChange
            }


 
    	});

    },

    onRefresh : function (){
        var store = this.getDicsStore();
        // console.log('onRefresh', store)
        store.load()
    },

    tanggalOnChange: function (){
        console.log('tanggalOnChange')
    }



});
