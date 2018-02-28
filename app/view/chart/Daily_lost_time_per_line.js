Ext.define("helloext.view.chart.Daily_lost_time_per_line", {
    extend: 'Ext.chart.Chart',
    margin : '10 10 10 10',
    alias: 'widget.chart_daily_lost_time_per_line',
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

    store: 'Lost_time_per_lines',
    
    items :[
    	{
          type  : 'text',
          text  : 'DAILY LOST TIME BY LINE',
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
	        fields: 'lost_time',
	        position: 'left',
	        grid: true,
	        minimum: 0,
	        // maximum: 60,
	        label: {
	            renderer: function(v) { return v + ' Minutes'; }
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
                this.setTitle('Line '+storeItem.get('line_name') + ': ' + storeItem.get('lost_time') + ' Pcs');
              }
            },
            label: {
              display: 'insideEnd',
              'text-anchor': 'middle',
              field: ['lost_time' ],
              renderer: Ext.util.Format.numberRenderer('0'),
              orientation: 'vertical',
              color: '#000000'
            },
            xField: 'line_name',
            yField: ['lost_time']
        }
  	    
    ]
});