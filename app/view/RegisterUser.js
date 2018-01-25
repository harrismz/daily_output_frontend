Ext.define("helloext.view.RegisterUser", {
    extend: 'Ext.window.Window',
    alias: 'widget.registerUser',

    title: 'Add Users',
    layout: 'fit',
    autoShow: true,

    /*initComponent: function() {

        this.callParent(arguments);
    },*/
    items:[
    {
        xtype: 'form',
        padding:10,
        /**/
        items: [
            {
                xtype: 'textfield',
                name : 'name',
                fieldLabel: 'Username',
                allowBlank: false
            },
            {
                xtype: 'textfield',
                name : 'password',
                fieldLabel: 'Password',
                style: 'margin-top:15px',
                inputType: 'password',
                allowBlank: false,
                minLength: 5
            },
            {
                xtype: 'textfield',
                name : 'retype_password',
                fieldLabel: 'Retype Password',
                style: 'margin-top:15px',
                inputType: 'password',
                allowBlank: false,
                minLength: 5

            }
        ],
        buttons:[
	    	{
	            text: 'Save',
	            action: 'save',
	            formBind: true,
	            handler: function (){
	            	var form = this.up('form').getForm();
	            	var self = this;
	            	var hostname = helloext.util.Config.hostname(); //ini global variable di app.js

	            	if (form.isValid()) {
	            		
	            		var paramater = {};
                        Ext.Object.each(form.getValues(), function(key, value){
                            paramater[key] = value;
                        });
                        //jika password tidak identical
                        if (paramater.password != paramater.retype_password) {
                        	
                            Ext.Msg.show({
                                title       :'Failed!',
                                icon        : Ext.Msg.ERROR,
                                msg         : "your password is not same!",
                                buttons     : Ext.Msg.OK
                            });
                        }
                        else{
                            Ext.Ajax.request({
                                url: 'http://'+hostname+'/daily_output/public/api/auth/signup',
                                method: 'POST',
                                contentType: 'application/json',
                                cors: true,
                                useDefaultXhrHeader : false,
                                params: paramater,
                                success: function (form, action){
                                    Ext.Msg.show({
                                        title: 'Success',
                                        msg: 'Data Saved!',
                                        buttons: Ext.Msg.OK
                                    });
                                    self.close
                                },
                                failure: function (form, action){
                                    Ext.Msg.show({
                                        title       :'Failed!',
                                        icon        : Ext.Msg.ERROR,
                                        msg         : "sorry, something went wrong!",
                                        buttons     : Ext.Msg.OK
                                    });
                                }
                            });
                        }
	            	}
	            }                
	        }
	        /*{
	            text: 'Cancel',
	            scope: this,
	            handler: this.close    
	        }*/
	    ]
    }
    ]

});