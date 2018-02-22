var CellEditing = Ext.create('Ext.grid.plugin.CellEditing', {
        clicksToEdit: 2
    });

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

    // tbar: {xtype: 'daily_lost_time_toolbar'},

    //id: 'LTGrid',

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
        { text: 'ID', width:55, dataIndex: 'id', locked   : true, summaryRenderer:function () {return '<b>Total<b/>'} },
        {text: 'Line <br> Name', flex:2,  dataIndex: 'line_name', /*editor: 'textfield' , field: {xtype: 'textfield'}*/ },
        {
            text: 'shift',
            flex:2,
            dataIndex: 'shift'
        },
        {text: 'SMT', flex:2, dataIndex: 'SMT'
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
        {text: 'DESIGN', flex:2, dataIndex: 'DESIGN_CODE',/*field: {xtype: 'textareafield', emptyText:'Penyebab', height: 25 }*/},
        {text: 'MECHANISM', flex:2, dataIndex: 'MECHANISM_CODE'
            // ,field: {xtype: 'textarea', emptyText:'Action yang diambil' , height: 25} , editor: 'textareafield'
        },
        {text: 'ELECTRICAL', flex:2, dataIndex:'ELECTRICAL_CODE'/*, editor: 'textfield'*/},
        {text: 'MECHANICAL', flex:2, dataIndex:'MECHANICAL_CODE'/*, editor: 'textfield'*/},
        {text: 'FINAL_ASSY', flex:2, dataIndex:'FINAL_ASSY_CODE'/*, editor: 'textfield'*/},
        {text: 'OTHERS', flex:2, dataIndex:'OTHERS_CODE'/*, editor: 'textfield'*/},
        {text: 'AFTER REPAIR QTY', flex:2, dataIndex:'AFTER_REPAIR_QTY'/*, editor: 'textfield'*/},
        {text: 'Balance <br> Repair <br> Quantity',
            columns:[
                {text: 'MA', flex:2, dataIndex:'MA', editor: 'numberfield'},
                {text: 'PCB', flex:2, dataIndex:'PCB', editor: 'numberfield'}
            ]
        },
        
        {text: 'TOTAL <br> REPAIR <br> QTY', flex:2, dataIndex:'TOTAL_REPAIR_QTY', editor: 'numberfield'},
        {text: 'Major <br> Problem', flex:4, dataIndex:'major_problem', editor: 'textareafield'}

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