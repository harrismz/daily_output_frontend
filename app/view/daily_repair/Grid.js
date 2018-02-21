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

	alias:'widget.daily_lost_time_grid',

    tbar: {xtype: 'daily_lost_time_toolbar'},

    id: 'LTGrid',

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
        {text: 'Line <br> Name',  dataIndex: 'line_name', editor: 'textfield' , field: {xtype: 'textfield'} },
        {
            text: 'shift',
            flex:1,
            dataIndex: 'shift'
        },
        {text: 'SMT', flex:4,/*width:300,*/ editor: 'textareafield', dataIndex: 'SMT',field: {xtype: 'textarea',emptyText:'Problem Causing the Delay',  height: 25/*, resizable:true*/}},
        {text: 'PCB', dataIndex:'PCB_CODE', editor: 'numberfield',
            summaryType : 'sum', 
            summaryRenderer: function (value,b,c)
            {
                // console.log('summaryRenderer', {value,b,c}) 
                return value
            }
        },
        {text: 'DESIGN_CODE', flex:4,/*width:250,*/ dataIndex: 'DESIGN_CODE',field: {xtype: 'textareafield', emptyText:'Penyebab', height: 25 }},
        {text: 'MECHANISM_CODE', flex:4, editor: 'textareafield', dataIndex: 'MECHANISM_CODE',field: {xtype: 'textarea', emptyText:'Action yang diambil' , height: 25}},
        {text: 'ELECTRICAL_CODE', flex:2, dataIndex:'ELECTRICAL_CODE', editor: 'textfield'},
        {text: 'MECHANICAL_CODE', flex:2, dataIndex:'MECHANICAL_CODE', editor: 'textfield'},
        {text: 'FINAL_ASSY_CODE', flex:2, dataIndex:'FINAL_ASSY_CODE', editor: 'textfield'},
        {text: 'OTHERS_CODE', flex:2, dataIndex:'OTHERS_CODE', editor: 'textfield'},
        {text: 'AFTER_REPAIR_QTY', flex:2, dataIndex:'AFTER_REPAIR_QTY', editor: 'textfield'},
        {text: 'MA', flex:2, dataIndex:'MA', editor: 'textfield'},
        {text: 'PCB', flex:2, dataIndex:'PCB', editor: 'textfield'},
        {text: 'TOTAL_REPAIR_QTY', flex:2, dataIndex:'TOTAL_REPAIR_QTY', editor: 'textfield'},
        {text: 'major_problem', flex:2, dataIndex:'major_problem', editor: 'textfield'}

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