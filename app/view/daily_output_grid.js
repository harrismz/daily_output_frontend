var EditRow = Ext.create('Ext.grid.plugin.CellEditing', {
        clicksToEdit: 2
    });

Ext.define('helloext.view.daily_output_grid', {
	extend: 'Ext.grid.Panel',

	alias:'widget.daily_output_grid',
    
    xtype: 'locking-grid',

    // xtype: 'big-data-grid',

    layout: 'fit',

    columnLines : true,
    
    multiSelect : true,
    
    viewConfig  : {
        stripeRows          : true,
        enableTextSelection : true
    },

    forceFit: true,

    autoScroll: true,

    store:  'Daily_outputs', //store = colletion
	
    // title:'Daily Grid',

	/*initComponent: function() {
         
        this.columns = [
            { text: 'id',  dataIndex: 'id', locked   : true },
            {text: 'line_name', editor: 'textfield', dataIndex: 'line_name', locked   : true},
            {text: 'time',editor: 'textfield', dataIndex: 'time',  locked   : true }

        ]

        // this.store.load();

        this.callParent(arguments);
    },*/

    columns : [
        { text: 'id',  dataIndex: 'id', locked   : true  /*/*flex: 1*/},
        {text: 'line_name', editor: 'textfield', dataIndex: 'line_name', locked   : true /*flex: 1*/},
        {text: 'time',editor: 'textfield', dataIndex: 'time',  locked   : true },

        {text: 'minute',editor: 'textfield', dataIndex: 'minute', /*flex: 1*/},
        {text: 'target_sop',editor: 'textfield', dataIndex: 'target_sop', /*flex: 1*/},
        {text: 'osc_output',editor: 'textfield', dataIndex: 'osc_output', /*flex: 1*/},
        {text: 'plus_minus',editor: 'textfield', dataIndex: 'plus_minus', /*flex: 1*/},
        {text: 'lost_hour',editor: 'textfield', dataIndex: 'lost_hour', /*flex: 1*/},

        {text: 'delay_type', /*dataIndex: 'delay_type',*/  columns:[
            {text: 'BOARD DELAY',editor: 'textfield', dataIndex: '', /*flex: 1*/},
            {text: 'PART DELAY',editor: 'textfield', dataIndex: 'delay_type', /*flex: 1*/},
            {text: 'EQP TROUBLE',editor: 'textfield', dataIndex: 'delay_type', /*flex: 1*/},
            {text: 'QUALITY PROB',editor: 'textfield', dataIndex: 'delay_type', /*flex: 1*/},
            {text: 'BAL. PROB',editor: 'textfield', dataIndex: 'delay_type', /*flex: 1*/},
            {text: 'OTHERS',editor: 'textfield', dataIndex: 'delay_type', /*flex: 1*/},
            {text: 'SUPPORT',editor: 'textfield', dataIndex: 'delay_type', /*flex: 1*/},
            {text: 'CHANGE MODEL',editor: 'textfield', dataIndex: 'delay_type', /*flex: 1*/},
        ]},
        
        {text: 'problem',editor: 'textarea', dataIndex: 'problem', /*flex: 1*/},
        {text: 'dic',editor: 'textfield', dataIndex: 'dic', /*flex: 1*/},
        {text: 'action',editor: 'textarea', dataIndex: 'action', /*flex: 1*/},
        {text: 'users_id',editor: 'textfield', dataIndex: 'users_id', /*flex: 1*/},
        {text: 'shift',editor: 'textfield', dataIndex: 'shift', /*flex: 1*/},
        {text: 'tanggal',editor: 'textfield', dataIndex: 'tanggal', /*flex: 1*/}

    ],

    plugins: [ EditRow ]

    

});