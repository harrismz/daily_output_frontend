Ext.define('helloext.controller.Daily_outputs', {
    extend: 'Ext.app.Controller',
    stores:[
        'Daily_outputs'
    ],
    models:[
        'Daily_output'
    ],
    init :  function(){
    	// console.log('hai im helloext')
    	this.control({
    		
           
 
    	});

    },

    editItem: function (grid, record){
        console.log({grid, record});
        if (record.field == "osc_output"){
            console.log('on edit');
        }
    },

    onClick: function (){
        console.log('on click');
    }

});
