Ext.define('helloext.model.Daily_output', {
    extend: 'Ext.data.Model',
    fields: [ 
     'id',
     'line_name',
     'time',
     'minute',
     'target_sop',
     'osc_output',
     'plus_minus',
     'lost_hour',
     //new column
     'board_delay',
     'part_delay',
     'eqp_trouble',
     'quality_problem_delay',
     'bal_problem',
     'others',
     'support',
     'change_model',
     //end new column
     'delay_type',
     'problem',
     'dic',
     'action',
     'users_id',
     'shift',
     'tanggal',
     //
     'efisiensi'
    ]

    /*proxy: {
    	type: 'rest',
    	url: 'http://localhost/daily_output/public/api/daily_outputs',
    	format:'json'
    }*/
});