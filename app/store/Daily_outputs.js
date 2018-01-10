Ext.define('helloext.store.Daily_outputs', { //parameter pertama harus sesuai filepath
    extend: 'Ext.data.Store',
    //fields: ['name', 'email'],
    
    model: 'helloext.model.Daily_output',
    autoLoad:true,
    /*proxy: {
    	type: 'ajax',
        
        api:{
        	read 	:'http://localhost/daily_output/public/api/daily_outputs',
        	update 	:'http://localhost/daily_output/public/api/daily_outputs'
        },

        reader: {
            type: 'rest',
            root: 'results'
        }
    }*/
    proxy: {
        type: 'rest',
        url: 'http://localhost/daily_output/public/api/daily_outputs',
        reader:{
            root: 'data',
            type: 'json'
        }
    }
});