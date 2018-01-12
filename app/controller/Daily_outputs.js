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
    		
           //namaview selector : eventhandler 
           /*daily_output_grid: {
                itemdblclick: this.editItem,
                click: this.onClick
           }*/

           'daily_output_grid' : {
            itemdblclick: this.editItem
           },
 
    	});

    },

    editItem: function (grid, record){
        // //console.log('Double clicked on ' + record.get('name'));
        // // console.log('item clicked' + {grid, record})
        // /*var view = Ext.widget('useredit');
        // view.down('form').loadRecord(record);
        // console.log('eidt', record)*/
        //console.log(this)
    },

    onClick: function (){
        console.log('on click');
    }

});
