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
            return  window.location.hostname + '/t_web';
        }
                
 	},
    getUser: function (){
        if (localStorage.getItem('user') != null){
           return  JSON.parse( localStorage.getItem('user') ).id
        }else{
            return null
        }
    },
    getLineName: function (){
        if (localStorage.getItem('user') != null){
           var default_line =  JSON.parse( localStorage.getItem('user') ).default_line;
            console.log(default_line)
           return  default_line.line_id;
        }else{
            return null;
        }    
    },
    getLineNameString: function(){
        if (localStorage.getItem('user') != null){
           var default_line =  JSON.parse( localStorage.getItem('user') ).default_line.line_id.toString();
           return  default_line;
        }else{
            return '1'; //default value
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