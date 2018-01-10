Ext.define('helloext.model.Daily_output', {
    extend: 'Ext.data.Model',
    fields: [ 'id',
     'line_name',
     'time',
     'minute',
     'target_sop',
     'osc_output',
     'plus_minus',
     'lost_hour',
     'delay_type',
     'problem',
     'dic',
     'action',
     'users_id',
     'shift',
     'tanggal'
    ]

    /*proxy: {
    	type: 'rest',
    	url: 'http://localhost/daily_output/public/api/daily_outputs',
    	format:'json'
    }*/
});