var RowEditing = Ext.create('Ext.grid.plugin.RowEditing',{
    clicksToEdit: 2,
    pluginId: 'RowEditing',
    listeners: {
        cancelEdit: function(rowEditing, context) {
            // Canceling editing of a locally added, unsaved record: remove it
            if (context.record.phantom) {
                var store = Ext.data.StoreManager.lookup('Lost_times');
                store.remove(context.record);
            }
        }
    }
});

Ext.define("helloext.view.daily_repair.Grid", {
	extend: 'Ext.grid.Panel',

	alias:'widget.daily_repair_grid',

    selType: 'rowmodel',

    layout: 'fit',
    
    loadMask    : true,

    plugins: [ RowEditing ],

    features: [{
        ftype: 'summary'
    }],

    columnLines : true,
    
    multiSelect : true,
    
    viewConfig  : {
        stripeRows          : true,
        enableTextSelection : true
    },

    forceFit: true,

    autoScroll: true,

    store:  'Repairs', //store = colletion

    columns :[
        // { text: 'ID', width:55, dataIndex: 'id', locked   : true, summaryRenderer:function () {return '<b>Total<b/>'} },
        {text: 'Line <br> Name', locked:true,  dataIndex: 'line_name',
            items: [{ 
                xtype: 'textfield',
                id : 'searchLineName',
                flex : 1,
                margin: '1 2 0 2',
                enableKeyEvents: true,
                emptyText : 'Type and Enter',
                buffer : 500,
                listeners :{
                    buffer : 500
                }
            }]
        },
        {
            text: 'shift',
            flex:2,
            dataIndex: 'shift'
        },
        {text: 'SMT', flex:2, dataIndex: 'SMT', summaryType : 'sum'
            // ,field: {xtype: 'textarea',emptyText:'Problem Causing the Delay',  height: 25 }, editor: 'textareafield'
        },
        {text: 'PCB', dataIndex:'PCB_CODE', flex: 2,
            //editor: 'numberfield',
            summaryType : 'sum', 
            summaryRenderer: function (value,b,c)
            {
                // console.log('summaryRenderer', {value,b,c}) 
                return value
            }
        },
        {text: 'DESIGN', flex:2, dataIndex: 'DESIGN_CODE', summaryType : 'sum'/*field: {xtype: 'textareafield', emptyText:'Penyebab', height: 25 }*/},
        {text: 'MECHANISM', flex:2, dataIndex: 'MECHANISM_CODE', summaryType : 'sum'
            // ,field: {xtype: 'textarea', emptyText:'Action yang diambil' , height: 25} , editor: 'textareafield'
        },
        {text: 'ELECTRICAL', flex:2, dataIndex:'ELECTRICAL_CODE' , summaryType : 'sum'/*, editor: 'textfield'*/},
        {text: 'MECHANICAL', flex:2, dataIndex:'MECHANICAL_CODE', summaryType : 'sum'/*, editor: 'textfield'*/},
        {text: 'FINAL_ASSY', flex:2, dataIndex:'FINAL_ASSY_CODE' , summaryType : 'sum'/*, editor: 'textfield'*/},
        {text: 'OTHERS', flex:2, dataIndex:'OTHERS_CODE' , summaryType : 'sum'/*, editor: 'textfield'*/},
        {text: 'AFTER<br>REPAIR<br>QTY', flex:2, dataIndex:'AFTER_REPAIR_QTY' , summaryType : 'sum', field:{xtype: 'numberfield', id: 'after_repair_qty_column'} },
        {text: 'Balance <br> Repair <br> Quantity',
            columns:[
                {text: 'MA', flex:2, dataIndex:'MA' , summaryType : 'sum' , 
                    field: {
                        xtype: 'numberfield',
                        id : 'MAColumn',
                        listeners:{
                            change: function (editor, value){
                                myGrid = this.up('grid'); //ambil ke atas.
                                if(value != ""){
                                    
                                    MAColumn = myGrid.getPlugin('RowEditing').editor.down('numberfield#MAColumn');
                                    PCBColumn = myGrid.getPlugin('RowEditing').editor.down('numberfield#PCBColumn');
                                    after_repair_qty_column = myGrid.getPlugin('RowEditing').editor.down('numberfield#after_repair_qty_column');
                                    total = myGrid.getPlugin('RowEditing').editor.down('numberfield#total');

                                    totalValue = (MAColumn.value + PCBColumn.value + after_repair_qty_column.value )
                                    total.setValue(totalValue);
                                    // console.log({edtMinute: edtMinute.value, edtTargetSop: edtTargetSop.value,edtPlusMinus: edtPlusMinus.value, hasil})
                                }
                            }
                        } 
                    }
                },
                {text: 'PCB', flex:2, dataIndex:'PCB', summaryType : 'sum' , field: {
                    xtype: 'numberfield',
                    id: 'PCBColumn',
                    listeners:{
                            change: function (editor, value){
                                myGrid = this.up('grid'); //ambil ke atas.
                                if(value != ""){
                                    
                                    MAColumn = myGrid.getPlugin('RowEditing').editor.down('numberfield#MAColumn');
                                    PCBColumn = myGrid.getPlugin('RowEditing').editor.down('numberfield#PCBColumn');
                                    after_repair_qty_column = myGrid.getPlugin('RowEditing').editor.down('numberfield#after_repair_qty_column');
                                    total = myGrid.getPlugin('RowEditing').editor.down('numberfield#total');

                                    totalValue = (MAColumn.value + PCBColumn.value + after_repair_qty_column.value )
                                    total.setValue(totalValue);
                                    // console.log({edtMinute: edtMinute.value, edtTargetSop: edtTargetSop.value,edtPlusMinus: edtPlusMinus.value, hasil})
                                }
                            }
                        }
                    } 
                }
            ]
        },
        
        {text: 'TOTAL <br> REPAIR <br> QTY', flex:2, dataIndex:'TOTAL_REPAIR_QTY', summaryType : 'sum' , field:{xtype:'numberfield', id: 'total'} },
        {text: 'Major <br> Problem', flex:4, dataIndex:'major_problem' , editor: 'textareafield'}

    ],

    bbar: {
        xtype: 'pagingtoolbar',
        pageSize: 50,
        store: 'Repairs',
        emptyMsg: 'Sorry, No Records Are Available At The Moment.',   
        displayInfo: true,
        plugins: new Ext.ux.ProgressBarPager()
    }
});