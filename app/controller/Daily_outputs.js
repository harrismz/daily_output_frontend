Ext.define('helloext.controller.Daily_outputs', {
    extend: 'Ext.app.Controller',
    stores:[
        'Daily_outputs'
    ],
    models:[
        'Daily_output'
    ],

    views: [ 'daily_output_grid' ],
    init :  function(){
    	// console.log('hai im helloext')
    	this.control({
    		
           
 
    	});

    },

    onEditItem:  function () {
        console.log( this.getReference() )
    },

    getReference : function () {
        return {
            edtTargetSop : Ext.getCmp('edtTargetSop').getValue()
        }
    }

});
