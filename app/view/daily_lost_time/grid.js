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

Ext.define("helloext.view.daily_lost_time.grid", {
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

    store:  'Lost_times', //store = colletion

    columns :[
        // { text: 'ID', width:55, dataIndex: 'id', locked   : true, summaryRenderer:function () {return '<b>Total<b/>'} },
        {text: 'Line <br> Name', locked:true,  dataIndex: 'line_name', editor: 'textfield' , field: {xtype: 'textfield'} },
        {
            text: 'time',
            flex:1,
            field: {
                xtype: 'combobox', 
                store: 'timeCombos',
                displayField:'name',
                valueField:'name',
                queryMode: 'local' 
            }, 
            dataIndex: 'time'
        },
        {text: 'Problem', flex:4,/*width:300,*/ editor: 'textareafield', dataIndex: 'problem',field: {xtype: 'textarea',emptyText:'Problem Causing the Delay',  height: 25/*, resizable:true*/}},
        {text: 'Lost Time <br> ( Minute )', dataIndex:'lost_time', editor: 'numberfield',
            summaryType : 'sum', 
            summaryRenderer: function (value,b,c)
            {
                // console.log('summaryRenderer', {value,b,c}) 
                return value
            }
        },
        {text: 'cause', flex:4,/*width:250,*/ dataIndex: 'cause',field: {xtype: 'textareafield', emptyText:'Penyebab', height: 25 }},
        {text: 'Action', flex:4, editor: 'textareafield', dataIndex: 'action',field: {xtype: 'textarea', emptyText:'Action yang diambil' , height: 25}},
        {text: 'Followed By', flex:2, dataIndex:'followed_by', editor: 'textfield'}
    ],

    bbar: {
        xtype: 'pagingtoolbar',
        pageSize: 50,
        store: 'Lost_times',
        emptyMsg: 'Sorry, No Records Are Available At The Moment.',   
        displayInfo: true,
        plugins: new Ext.ux.ProgressBarPager()
    }
});