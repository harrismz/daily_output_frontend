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
        // margin: '20'
    },



    items: [
        {
            xtype:'form',
            cls:'myform',
            // frame:true,
            bodyPadding: 10,
            bodyBorder: true,
            width: 400,
            split:true,
            // margin: '30% 20% 30% 30% ',
            
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
                    name: 'username',
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

                        /*if (form.isValid()) {
                            var out = [];
                            Ext.Object.each(form.getValues(), function(key, value){
                                out.push(key + '=' + value);
                            });
                            Ext.Msg.alert('Submitted Values', out.join('<br />'));
                        }*/

                        console.log(form)
                    }
                },
                {
                    xtype:'button',
                    text: 'Register',
                    align: 'left'
                }
            ]
        }
    ]
});