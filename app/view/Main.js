Ext.define('helloext.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border'
    ],
    
    xtype: 'app-main',
    style: { 
        // "background-color" : 'coral',
        "background-image" : "url(resources/img.jpg) !important",
        // "opacity": 0.2
    },
    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },

    items: [
        {
            xtype:'form',
            cls:'myform',
            bodyPadding: 10,
            bodyBorder: true,
            width: 350,
            split:true,
            
            defaults: {
                anchor: '100%',
            },
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
                    minLength: 5
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

                        if (form.isValid()) {
                            var paramater = {};
                            Ext.Object.each(form.getValues(), function(key, value){
                                // out.push(key + '=' + value);
                                paramater[key] = value;
                            });


                            Ext.Ajax.request({
                                url: 'http://localhost/daily_output/public/api/auth/login',
                                method: 'POST',
                                withCredentials:true,
                                dataType: 'json',
                                contentType: 'application/json',
                                cors: true,
                                useDefaultXhrHeader : false,
                                params: paramater,
                                success: function (form, action){
                                    var returnValue = JSON.parse(form.responseText)
                                    // console.log(returnValue)
                                    localStorage.setItem("token", returnValue.token);                                    
                                    window.location.reload();
                                },
                                failure: function (form, action){
                                    console.log({form, action})
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
                        
                    }
                }
            ]
        }
    ]
});