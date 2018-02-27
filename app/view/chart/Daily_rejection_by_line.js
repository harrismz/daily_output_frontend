Ext.define("helloext.view.chart.Daily_rejection_by_line", {
    extend: 'Ext.chart.Chart',
    margin : '10 10 10 10',
    alias: 'widget.chart_daily_rejection_by_line',
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
    store: 'Qualities',
    
    items :[
    	{
          type  : 'text',
          text  : 'DAILY REJECTION BY LINE',
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
	        fields: 'TOTAL_REPAIR_QTY',
	        position: 'left',
	        grid: true,
	        minimum: 0,
	        maximum: 60,
	        label: {
	            renderer: function(v) { return v + ' Pcs'; }
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
                this.setTitle('Line '+storeItem.get('line_name') + ': ' + storeItem.get('TOTAL_REPAIR_QTY') + ' Pcs');
              }
            },
            label: {
              display: 'insideEnd',
              'text-anchor': 'middle',
              field: ['TOTAL_REPAIR_QTY', 'AFTER_REPAIR_QTY' ],
              renderer: Ext.util.Format.numberRenderer('0'),
              orientation: 'vertical',
              color: '#000000'
            },
            xField: 'line_name',
            yField: ['TOTAL_REPAIR_QTY', 'AFTER_REPAIR_QTY' ]
        }
  	    
    ]
});