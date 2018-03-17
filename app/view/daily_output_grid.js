var RowEditing = Ext.create('Ext.grid.plugin.RowEditing',{
    clicksToEdit: 2,
    pluginId: 'RowEditing',
    listeners: {
        cancelEdit: function(rowEditing, context) {
            // Canceling editing of a locally added, unsaved record: remove it
            if (context.record.phantom) {
                var store = Ext.data.StoreManager.lookup('Daily_outputs');
                store.remove(context.record);
            }
        }
    }
});



Ext.define('helloext.view.daily_output_grid', {
	extend: 'Ext.grid.Panel',

	alias:'widget.daily_output_grid',

    id: 'doGrid',
    
    xtype: 'locking-grid',

    selType: 'rowmodel',

    layout: 'fit',
    
    loadMask    : true,

    plugins: [ /*CellEditing,*/ RowEditing ],

    features: [{
        ftype: 'summary'
    }],

    columnLines : true,
    
    multiSelect : true,
    
    viewConfig  : {
        stripeRows          : true,
        enableTextSelection : true
    },

    // forceFit: true,

    autoScroll: true,

    store:  'Daily_outputs', //store = colletion

    columns : [
        // { text: 'ID',  dataIndex: 'id', width:55, locked   : true, summaryRenderer:function () {return '<b>Total<b/>'} },

        {
            text: 'Line <br> Name',
            locked:true,
            dataIndex: 'line_name',
            width: 50,
            style: {
                "font-size": '7pt !important'
            }
            /*, editor: 'textfield' , field: {xtype: 'textfield'}*/
        },

        {
            text: 'Time',
            locked:true,
            width: 60,
            style: {
                "font-size": '7pt !important'
            },
            // flex : 1,
            /*field: {
                xtype: 'combobox', 
                store: 'timeCombos',
                displayField:'name',
                valueField:'name',
                queryMode: 'local' 
            }, */
            dataIndex: 'time'
        },

        {
            text: 'Minute',
            dataIndex: 'minute' ,
            locked:true,
            width: 55,
            style: {
                "font-size": '7pt !important'
            },
            // flex : 2,
            field: {
                xtype: 'numberfield',
                id:'edtMinute',
                maxValue:60,
                listeners:{
                    change: function (editor, value){
                        
                        myGrid = this.up('grid'); //ambil ke atas.
                        if(value != ""){
                            //get edtPlusMinus
                            edtMinute = value;//myGrid.getPlugin('RowEditing').editor.down('numberfield[name=minute]');
                            edtTargetSop = myGrid.getPlugin('RowEditing').editor.down('numberfield[name=target_sop]');
                            edtOscOutput = myGrid.getPlugin('RowEditing').editor.down('numberfield#edtOscOutput');
                            edtPlusMinus = myGrid.getPlugin('RowEditing').editor.down('numberfield[name=plus_minus]');
                            edtLostHour = myGrid.getPlugin('RowEditing').editor.down('numberfield[name=lost_hour]');

                            if(edtOscOutput.value == "" || edtOscOutput.value == null || edtTargetSop.value == "" || edtTargetSop.value == null ){
                                // console.log('false')
                                return false;
                            }

                            hasilPlusMinus = (edtOscOutput.value - ( ( edtMinute / 60) * edtTargetSop.value ) );
                            lostHour = ( hasilPlusMinus / edtTargetSop.value );
                            edtPlusMinus.setValue(hasilPlusMinus);
                            edtLostHour.setValue(lostHour);

                            // console.log({edtMinute: edtMinute.value, edtTargetSop: edtTargetSop.value,edtPlusMinus: edtPlusMinus.value, hasil})
                        }
                    }
                } 
            },
            summaryType: 'sum',
            dock:'bottom',
            summaryRenderer: function (value){
                if (value === null || value === "") {
                     value = 0;
                   }                
                return value;
            }
            
        },

        {   
            text: 'Target <br> Sop',
            dataIndex: 'target_sop',
            summaryType: 'sum',
            dock:'bottom',
            flex : 2.5,
            style: {
                "font-size": '7pt !important'
            },
            field: {
                xtype: 'numberfield',
                id:'edtTargetSop',
                listeners:{
                    change: function (editor, value){
                        
                        myGrid = this.up('grid'); //ambil ke atas.
                        // console.log('value')
                        if(value != ""){
                            //get edtPlusMinus
                            edtMinute = myGrid.getPlugin('RowEditing').editor.down('numberfield[name=minute]');
                            edtOscOutput = myGrid.getPlugin('RowEditing').editor.down('numberfield#edtOscOutput');
                            edtPlusMinus = myGrid.getPlugin('RowEditing').editor.down('numberfield[name=plus_minus]');
                            edtLostHour = myGrid.getPlugin('RowEditing').editor.down('numberfield[name=lost_hour]');

                            /*if(edtOscOutput.value == "" || edtMinute.value == ""){
                                console.log('false')
                                return false;
                            }

                            if(edtOscOutput.value == null || edtMinute.value == null){
                                console.log('false')
                                return false;
                            }*/

                            hasilPlusMinus = (edtOscOutput.value - ( ( edtMinute.value / 60) * value ) );
                            lostHour = (hasilPlusMinus / value );

                            edtPlusMinus.setValue(hasilPlusMinus);
                            edtLostHour.setValue(lostHour);

                            // console.log({edtMinute: edtMinute.value, edtTargetSop: edtTargetSop.value,edtPlusMinus: edtPlusMinus.value, hasil})
                        }

                    }
                } 
            },
            summaryRenderer: function (value){
                if (value === null || value === "") {
                     value = 0;
                   }                
                return value;
            }
        },

        {
            text: 'OCS <br> Output',
            dataIndex: 'osc_output',
            summaryType: 'sum',
            dock:'bottom',
            style: {"font-size": '7pt !important'}, 
            flex : 2.5,
            field: { xtype: 'numberfield',
                id: 'edtOscOutput',

                listeners:{
                    change: function (editor, value){
                        
                        myGrid = this.up('grid'); //ambil ke atas.
                        
                        //var selectedModel = this.up('grid').getSelectionModel().getSelection()[0];
                        
                        if(value != ""){
                            //get edtPlusMinus
                            edtMinute = myGrid.getPlugin('RowEditing').editor.down('textfield[name=minute]');
                            edtTargetSop = myGrid.getPlugin('RowEditing').editor.down('textfield[name=target_sop]');
                            edtPlusMinus = myGrid.getPlugin('RowEditing').editor.down('textfield[name=plus_minus]');
                            edtLostHour = myGrid.getPlugin('RowEditing').editor.down('textfield[name=lost_hour]');

                            hasilPlusMinus = (value - ( ( edtMinute.value / 60) * edtTargetSop.value ) );
                            lostHour = (hasilPlusMinus / edtTargetSop.value );

                            edtPlusMinus.setValue(hasilPlusMinus);
                            edtLostHour.setValue(lostHour);
                        }

                    }
                } 
            },
            summaryRenderer: function (value){
                if (value === null || value === "") {
                     value = 0;
                   }                
                return value;
            } 
        },

        {
            text: '+ / -',
            dataIndex: 'plus_minus',
            summaryType: 'sum',
            dock:'bottom',
            // style: {"font-size": '7pt !important'},
            flex : 3,
            field: {
                xtype: 'numberfield',
                decimalPrecision: 2,
                id: 'edtPlusMinus'
            },
            summaryRenderer: function (value){
                if (value === null || value === "") {
                    value = 0;
                }                
                return value;
            }   
        },

        {
            text: 'Lost Hours', 
            dataIndex: 'lost_hour', 
            summaryType: 'sum',
            style: {"font-size": '7pt !important'},
            decimalPrecision: 4,
            flex : 3,
            dock:'bottom',
            field: {xtype: 'numberfield', decimalPrecision: 2}
        },

        {
            text: 'DELAY TYPE',
            // flex : 8, 
            columns:[
                {text: 'BOARD <br> DELAY',style: {
                    /*'-webkit-transform': 'rotate(270deg)',
                    '-moz-transform': 'rotate(270deg)',
                    '-o-transform': 'rotate(270deg)',
                    '-ms-transform': 'rotate(270deg)',
                    transform: 'rotate(270deg)',
                    display: 'inline-block',*/
                    "font-size": '6pt !important'
                    /* need to hard code a height for this to work */
                    /* you could use Ext.util.TextMetrics if you needed to dynamically determine the text size */
                    // height: '40px',
                },  flex : 0.5, sort:false, dataIndex: 'board_delay', field: {xtype: 'numberfield', dataIndex: 'board_delay', step:0.01, decimalPrecision:2}, summaryType: 'sum', dock:'bottom' },
                {text: 'PART<br>DELAY',style: {"font-size": '7pt !important'},flex : 0.5, dataIndex: 'part_delay', field: {xtype: 'numberfield',step:0.01,decimalPrecision:2}, summaryType: 'sum', dock:'bottom' },
                {text: 'EQP<br>PROB',style: {"font-size": '7pt !important'}, flex : 0.5, dataIndex: 'eqp_trouble', field: {xtype: 'numberfield',step:0.01,decimalPrecision:2}, summaryType: 'sum', dock:'bottom' },
                {text: 'QLTY<br>PROB',style: {"font-size": '7pt !important'}, flex : 0.5, dataIndex: 'quality_problem_delay', field: {xtype: 'numberfield',step:0.01,decimalPrecision:2}, summaryType: 'sum', dock:'bottom'},
                {text: 'BAL.<br>PROB',style: {"font-size": '7pt !important'}, flex : 0.5, dataIndex: 'bal_problem', field: {xtype: 'numberfield',step:0.01,decimalPrecision:2}, summaryType: 'sum', dock:'bottom' },
                {text: 'OTHERS', flex : 0.5,style: {"font-size": '6pt !important'}, dataIndex: 'others' , field: {xtype: 'numberfield',step:0.01,decimalPrecision:2}, summaryType: 'sum', dock:'bottom' },
                {text: 'SUPPORT', flex : 0.5,style: {"font-size": '6pt !important'}, dataIndex: 'support', field: {xtype: 'numberfield',step:0.01,decimalPrecision:2}, summaryType: 'sum', dock:'bottom' },
                {text: 'CHG<br>MODEL',style: {"font-size": '7pt !important'}, flex : 0.5, dataIndex: 'change_model', field: {xtype: 'numberfield',step:0.01,decimalPrecision:2}, summaryType: 'sum', dock:'bottom' }
            ]
        },
        
        {
            text: 'Problem',
            flex : 6,
            dataIndex: 'problem',
            field: {
                xtype: 'textarea',
                emptyText:'Problem Causing the Delay',
                grow: true,
                completeOnEnter: false,
                enableKeyEvents: true, //Listen to keyevents
                listeners: {
                    keydown: function(field, e) {
                        if (e.getKey() == e.ENTER) {
                            var component = field.getValue();
                            component += '\n';
                            field.setValue(component);
                            e.stopEvent(); // Stop event propagation
                        }
                    }
                }
                /*, resizable:true*/  /*height: 25*/
            }
        },

        {text: 'DIC', flex : 3,style:{"font-size": '7pt !important'}, dataIndex: 'dic',field: {xtype: 'textarea', emptyText:'Department In Charge' }},

        {
            text: 'Action',
            flex : 5,
            editor: 'textareafield',
            dataIndex: 'action',
            field: {
                xtype: 'textarea',
                emptyText:'Action yang diambil',
                grow: true,
                completeOnEnter: false,
                enableKeyEvents: true, //Listen to keyevents
                listeners: {
                    keydown: function(field, e) {
                        if (e.getKey() == e.ENTER) {
                            var component = field.getValue();
                            component += '\n';
                            field.setValue(component);
                            e.stopEvent(); // Stop event propagation
                        }
                    }
                }
                /*, height: 25*/
             }
        }

        // {text: 'users_id', dataIndex: 'users_id',field: {xtype: 'textfield'}},

        // {text: 'shift', dataIndex: 'shift', field: {xtype: 'textfield', disabled:true}},

        /*{text: 'tanggal', dataIndex: 'tanggal', field: {
            xtype: 'datefield',
            format: 'Y-m-d',          
            allowBlank: true,
            emptyText:'yyyy-mm-dd',
            disabled: true
        }}*/

    ]

    

});