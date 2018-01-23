Ext.define('helloext.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border'
    ],
    
    xtype: 'app-main',
    /*style: { 
        // "background-color" : 'coral',
        "background-image" : "url(resources/img.jpg) !important",
        // "opacity": 0.2
    },*/
    layout: {
        type: 'border',
        /*align: 'center',
        pack: 'center'*/
    },

    items: [
        {
            xtype:'form',
            cls:'myform',
            margin: '10 10 10 10',
            region : 'east',
            bodyPadding: 10,
            // bodyBorder: true,
            width: 350,
            split:true,
            
            /*defaults: {
                anchor: '100%',
            },*/
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
                        var hostname= MySharedData.hostname; //global variable di app.js

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
                                    // console.log(returnValue)
                                    localStorage.setItem("token", returnValue.token);                                    
                                    window.location.reload();
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
        },
        /*{
            xtype: 'delay_type_chart',
            region : 'west',
            margin: 10
        }*/
        {
            xtype: 'chart',
            // width: 500,
            // height: 410,
            region: 'center',
            margin: '10 10 10 10',
            padding: '10 0 0 0',
            style: {
                'background' : '#fff'
            },
            animate: true,
            shadow: false,
            store: 'Daily_outputs',
            insetPadding: 40,
                /*items: [
                    {
                        type  : 'text',
                        text  : 'Line Charts - Basic Line',
                        font  : '22px Helvetica',
                        width : 500,
                        height: 30,
                        x : 40, //the sprite x position
                        y : 12  //the sprite y position
                    }, {
                        type: 'text',
                        text: 'Data: Browser Stats 2012',
                        font: '10px Helvetica',
                        x: 12,
                        y: 380
                    }, {
                        type: 'text',
                        text: 'Source: http://www.w3schools.com/',
                        font: '10px Helvetica',
                        x: 12,
                        y: 390
                    }
                ],*/
            axes: [
                {
                    type: 'numeric',
                    fields: 'lost_hour',
                    position: 'left',
                    grid: true,
                    minimum: -10,
                    maximum: 10,
                    /*label: {
                        renderer: function(v) { 
                            if (v != null ){
                                return v + '%';
                            }else{
                                return 0 + '%';
                            }
                        }
                    }*/
                }, {
                    type: 'category',
                    fields: 'time',
                    position: 'bottom',
                    grid: true,
                    label: {
                        rotate: {
                            degrees: -45
                        }
                    }
                }
            ],
            series: [
                {
                    type: 'line',
                    // axis: 'left',
                    xField: 'time',
                    yField: 'lost_hour',
                    style: {
                        'stroke-width': 6
                    },
                    markerConfig: {
                        radius: 4
                    },
                    highlight: {
                        fill: 'black',
                        radius: 5,
                        'stroke-width': 2,
                        stroke: 'black'
                    },
                    tips: {
                        trackMouse: true,
                        style: 'background: #AAA    ',
                        height: 20,
                        showDelay: 0,
                        dismissDelay: 0,
                        hideDelay: 0,
                        renderer: function(storeItem, item) {
                            /*if (storeItem.get('lost_hour') != null ){
                                var lost_hour = storeItem.get('lost_hour')
                            } else {
                                var lost_hour = 0;
                            }*/
                            lost_hour= storeItem.get('lost_hour')
                            this.setTitle(storeItem.get('time') + ': ' + lost_hour + '%');
                        }
                    }
                }
            ]
        }
    ]
});