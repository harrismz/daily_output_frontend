Ext.define('helloext.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border'
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'anchor'
    },

    items: [{
            xtype:'form',
            frame:true,
            bodyPadding: 10,
            bodyBorder: true,
            
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
                    minLength: 6
                },
                {
                    xtype: 'textfield',
                    name: 'password',
                    fieldLabel: 'Password',
                    inputType: 'password',
                    style: 'margin-top:15px',
                    allowBlank: false,
                    minLength: 8
                }
            ],
            dockedItems:[
                {
                    xtype: 'button',
                    formBind: true,
                    dock: 'bottom',
                    disabled: true,
                    text: 'Submit Registration',
                    width: 140,
                    handler: function() {
                        var form = this.up('form').getForm();

                        if (form.isValid()) {
                            var out = [];
                            Ext.Object.each(form.getValues(), function(key, value){
                                out.push(key + '=' + value);
                            });
                            Ext.Msg.alert('Submitted Values', out.join('<br />'));
                        }
                    }
                }
            ]
    }]
});