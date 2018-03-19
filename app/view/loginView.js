Ext.define("helloext.view.loginView", {
    extend:'Ext.form.Panel',
    alias: 'widget.login_view',
    cls:'myform',
    margin: '10 10 10 10',
    
    bodyPadding: 10,
    height: 300,
    split:true,

    fieldDefaults: {
        labelWidth: 110,
        labelAlign: 'left',
        msgTarget: 'none',
        invalidCls: '' //unset the invalidCls so individual fields do not get styled as invalid
    },

    items:[
        {
            xtype: 'textfield',
            name: 'name',
            fieldLabel: 'User Name',
            allowBlank: false,
            minLength: 1
        },
        {
            xtype: 'textfield',
            name: 'password',
            fieldLabel: 'Password',
            inputType: 'password',
            style: 'margin-top:15px',
            allowBlank: false,
            minLength: 5
        }
    ],

    buttons:[
        {
            xtype: 'button',
            formBind: true,
            align: 'left',
            // disabled: true,
            text: 'Login',
            // width: 140,
            handler: function() {
                var form = this.up('form').getForm();
                var hostname= helloext.util.Config.hostname(); //global variable di app.js

                if (form.isValid()) {
                    var paramater = {};
                    Ext.Object.each(form.getValues(), function(key, value){
                        // out.push(key + '=' + value);
                        paramater[key] = value;
                    });


                    Ext.Ajax.request({
                        url: 'http://'+hostname+'/daily_output/public/api/auth/login',
                        method: 'POST',
                        withCredentials:true,
                        dataType: 'json',
                        contentType: 'application/json',
                        cors: true,
                        useDefaultXhrHeader : false,
                        params: paramater,
                        success: function (form, action){
                            var returnValue = JSON.parse(form.responseText)
                            localStorage.setItem("token", returnValue.token);
                            
                            var token = returnValue.token;

                            Ext.Ajax.request({
                                url: 'http://'+helloext.util.Config.hostname()+'/daily_output/public/api/auth/me',
                                method: 'GET',
                                params: {token: token},
                                success: function (form, action){
                                    localStorage.setItem('user', form.responseText )
                                    window.location.reload(); //refresh
                                },
                                failure: function (form, action){
                                    console.log({form: form, action: action})
                                }
                            })

                        },
                        failure: function (form, action){
                            // console.log({form, action})
                            Ext.Msg.show({
                                title       :'Failed!',
                                icon        : Ext.Msg.ERROR,
                                msg         : "Username Or Password is wrong!",
                                buttons     : Ext.Msg.OK
                            });
                        } 
                    });
                }
            }
        },
        {
            xtype:'button',
            text: 'Register',
            align: 'left',
            handler: function (){
                Ext.widget('registerUser');
            }
        }
    ]
});