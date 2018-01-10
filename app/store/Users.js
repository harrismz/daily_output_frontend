Ext.define('helloext.store.Users', {
    extend: 'Ext.data.Store',
    //fields: ['name', 'email'],
    
    model: 'helloext.model.User',

    /*data: [
        {name: 'Ed',    email: 'ed@sencha.com'},
        {name: 'Tommy', email: 'tommy@sencha.com'},
        {name: 'John', email: 'John@sencha.com'}
    ]*/

    autoLoad:true,

    proxy: {
    	type: 'ajax',
        
        api:{
        	read 	:'data/users.json',
        	update 	: 'data/updateUsers.json'
        },

        reader: {
            type: 'json',
            root: 'users',
            successProperty: 'success'
        }
    }
});