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
		    return 'localhost:8072';
		}else{
            return  window.location.hostname; // + '/t_web';
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
            //console.log(default_line)
           return  default_line.line_id;
        }else{
            return 1;
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
    setUser: function (token){
        Ext.Ajax.request({
            url: 'http://'+helloext.util.Config.hostname()+'/daily_output/public/api/auth/me',
            method: 'GET',
            params: {token: token},
            success: function (form, action){
                localStorage.setItem('user', form.responseText )
                
            },
            failure: function (form, action){
                console.log({form: form, action: action})
            }
        }) 
    },
    getToken : function(){
        // return localStorage.getItem('token');
        if (localStorage.getItem('token') != null){
           var token = localStorage.getItem('token');
           // this.setUser(token);    
           return token ;
        }else{
            return null
        }  
    }

});