Ext.define("helloext.view.chart.daily_output.Barchart", {
    extend: 'Ext.chart.Chart',
    margin : '10 10 10 10',
    alias: 'widget.daily_output_barchart',
    padding: '10 0 0 0',
    animate: true,
    shadow: false,
    insetPadding: 40,
    style: {
    	'background': '#fff',
    	'border-radius' : '5px'
    },
    legend: {
        position: 'top',
        boxStrokeWidth: 0,
        labelFont: '12px Helvetica'
    },

    store: 'Daily_outputs_perday',
    
    items :[
    	{
          type  : 'text',
          text  : 'DAILY OUTPUT SUMMARY CHART PER DAY',
          font  : '14px Arial',
          width : 100,
          height: 30,
          x : 50, //the sprite x position
          y : 10  //the sprite y position
       }
    ],

    axes: [
	    {
	        type: 'numeric',
	        fields: 'target_sop',
	        position: 'left',
	        grid: true,
	        // minimum: 0,
	        // maximum: 60,
	        label: {
	            renderer: function(v) { return v + ' PCS'; }
	        }
	    }, {
	        type: 'category',
	        fields: 'line_name',
	        position: 'bottom',
	        grid: true,
	        label: {
	            rotate: {
	                degrees: -45
	            }
	        }
	    }
    ],
    
    series: [
	    {
          type: 'column',
          axis: 'left',
          highlight: true,
          tips: {
            trackMouse: true,
            width: 140,
            height: 28,
            renderer: function(storeItem, item) {
              this.setTitle('Line '+storeItem.get('line_name') + ': ' + storeItem.get('target_sop') + ' Pcs');
            }
          },
          label: {
            display: 'insideEnd',
            'text-anchor': 'middle',
            field: ['target_sop' ],
            renderer: Ext.util.Format.numberRenderer('0'),
            orientation: 'vertical',
            color: '#000000'
          },
          xField: 'line_name',
          yField: ['target_sop']
      },
      {
          type: 'column',
          axis: 'left',
          highlight: true,
          tips: {
            trackMouse: true,
            width: 140,
            height: 28,
            renderer: function(storeItem, item) {
              this.setTitle('Line '+storeItem.get('line_name') + ': ' + storeItem.get('osc_output') + ' Pcs');
            }
          },
          label: {
            display: 'insideEnd',
            'text-anchor': 'middle',
            field: ['osc_output' ],
            renderer: Ext.util.Format.numberRenderer('0'),
            orientation: 'vertical',
            color: '#000000'
          },
          xField: 'line_name',
          yField: ['osc_output']
      },
  	    
    ]
});