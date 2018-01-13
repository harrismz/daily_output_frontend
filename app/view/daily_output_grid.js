var CellEditing = Ext.create('Ext.grid.plugin.CellEditing', {
        clicksToEdit: 2,

    });

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

    plugins: [ /*CellEditing,*/ RowEditing ],

    columnLines : true,
    
    multiSelect : true,
    
    viewConfig  : {
        stripeRows          : true,
        enableTextSelection : true
    },

    forceFit: true,

    autoScroll: true,

    store:  'Daily_outputs', //store = colletion

    columns : [
        { text: 'id',  dataIndex: 'id', locked   : true },

        {text: 'line_name',  dataIndex: 'line_name', editor: 'textfield' , field: {xtype: 'textfield'} },

        {text: 'time', field: {xtype: 'combobox', 
                                store: 'timeCombos',
                                displayField:'name',
                                valueField:'name',
                                 queryMode: 'local' }, dataIndex: 'time' },

        {text: 'minute', dataIndex: 'minute' ,field: {xtype: 'textfield', id:'edtMinute' }},

        {text: 'target_sop', dataIndex: 'target_sop', field: {xtype: 'textfield', id:'edtTargetSop' } },

        {text: 'osc_output', dataIndex: 'osc_output', 
            field: { xtype: 'textfield',
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

                            // console.log({edtMinute: edtMinute.value, edtTargetSop: edtTargetSop.value,edtPlusMinus: edtPlusMinus.value, hasil})
                        }

                    }
                } 
            } 
        },

        {text: 'plus_minus', dataIndex: 'plus_minus', field: {xtype: 'textfield', id: 'edtPlusMinus'} },

        {text: 'lost_hour', dataIndex: 'lost_hour', field: {xtype: 'textfield'}},

        {text: 'delay_type',  columns:[
            {text: 'BOARD DELAY', dataIndex: '', field: {xtype: 'textfield'}},
            {text: 'PART DELAY', dataIndex: '', field: {xtype: 'textfield'} },
            {text: 'EQP TROUBLE', dataIndex: '', field: {xtype: 'textfield'} },
            {text: 'QUALITY PROB', dataIndex: '', field: {xtype: 'textfield'}},
            {text: 'BAL. PROB', dataIndex: '', field: {xtype: 'textfield'} },
            {text: 'OTHERS', dataIndex: '' , field: {xtype: 'textfield'} },
            {text: 'SUPPORT', dataIndex: '', field: {xtype: 'textfield'} },
            {text: 'CHANGE MODEL', dataIndex: '', field: {xtype: 'textfield'} },
        ]},
        
        {text: 'problem',editor: 'textarea', dataIndex: 'problem',field: {xtype: 'textfield'}},

        {text: 'dic', dataIndex: 'dic',field: {xtype: 'textfield'}},

        {text: 'action',editor: 'textarea', dataIndex: 'action',field: {xtype: 'textfield'}},

        {text: 'users_id', dataIndex: 'users_id',field: {xtype: 'textfield'}},

        {text: 'shift', dataIndex: 'shift', field: {xtype: 'textfield'}},

        {text: 'tanggal', dataIndex: 'tanggal',field: {xtype: 'textfield'}}

    ]

    

});