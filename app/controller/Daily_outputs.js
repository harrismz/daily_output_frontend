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
    		
           'daily_output_grid': {
                edit: this.onEditItem,

                beforesync: this.onBeforeSync
           }
 
    	});

    },

    onEditItem: function (grid, e){
        // console.log({grid, e});
        /*e.record.commit();*/

    },

    onBeforeSync: function (options, eOpts){
        // console.log({options, eOpts});
    }

});
