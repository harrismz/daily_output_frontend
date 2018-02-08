Ext.define('helloext.util.Config', {
	singleton : true,

    config : {
        debug : true
    },

    constructor : function(config) {
        this.initConfig(config);
        this.callParent([config]);
    },

    hostname: function(){
    	if ( window.location.hostname == 'localhost'){
		    return 'localhost';
		}else{
            return '10.230.38.10/t_web';
        }
                
 	},
    getUser: function (){
        if (localStorage.getItem('user') != null){
           return  JSON.parse( localStorage.getItem('user') ).id
        }else{
            return null
        }
    },
    getToken : function(){
        // return localStorage.getItem('token');
        if (localStorage.getItem('token') != null){
           return localStorage.getItem('token') ;
        }else{
            return null
        }  
    }

});