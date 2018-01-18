/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when upgrading.
*/

Ext.application({
    name: 'helloext',

    extend: 'helloext.Application',
    
    //autoCreateViewport: true
});

/*Ext.define('MySharedData', { 
    singleton: true,
    hostname: this.hostname
});  */
var MySharedData = {
	hostname: 'localhost',
	getUser: function (){
        if (localStorage.getItem('user') != null){
           return  JSON.parse( localStorage.getItem('user')).id
        }else{
            return null
        }
    },
}