Ext.define('helloext.view.daily_output_grid', {
	extend: 'Ext.grid.Panel',

	alias:'widget.daily_output_grid',
    
    store:  'Daily_outputs', //store = colletion
	
    title:'Daily Grid',

	initComponent: function() {
         
        this.columns = [
            {header: 'id',  dataIndex: 'id',  flex: 1},
            {header: 'line_name', dataIndex: 'line_name', flex: 1},
            {header: 'time', dataIndex: 'time', flex: 1},
            {header: 'minute', dataIndex: 'minute', flex: 1},
            {header: 'target_sop', dataIndex: 'target_sop', flex: 1},
            {header: 'osc_output', dataIndex: 'osc_output', flex: 1},
            {header: 'plus_minus', dataIndex: 'plus_minus', flex: 1},
            {header: 'lost_hour', dataIndex: 'lost_hour', flex: 1},
            {header: 'delay_type', dataIndex: 'delay_type', flex: 1},
            {header: 'problem', dataIndex: 'problem', flex: 1},
            {header: 'dic', dataIndex: 'dic', flex: 1},
            {header: 'action', dataIndex: 'action', flex: 1},
            {header: 'users_id', dataIndex: 'users_id', flex: 1},
            {header: 'shift', dataIndex: 'shift', flex: 1},
            {header: 'tanggal', dataIndex: 'tanggal', flex: 1}

        ];

        // this.store.load();

        this.callParent(arguments);
    },   

});