Ext.define("helloext.view.chart.Daily_rejection_per_month", {
    extend: 'Ext.chart.Chart',
    margin : '10 10 10 10',
    alias: 'widget.chart_daily_rejection_per_month',
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
    store: 'Permonths',

    items :[
    	{
          type  : 'text',
          text  : 'DAILY REJECTION PER MONTH',
          font  : '14px Arial',
          width : 100,
          height: 30,
          x : 50, //the sprite x position
          y : 10  //the sprite y position
       }
    ],

    axes: [
	    {
	        type: 'Numeric',
          position: 'left',
	        fields: 'TOTAL_REPAIR_QTY',//['TOTAL_REPAIR_QTY', 'AFTER_REPAIR_QTY' ],
	        grid: true,
          title:'sample value',
	        minimum: 0,
	        maximum: 300,
	        label: {
	            renderer: function(v) { return v + ' Pcs'; }
	        }
	    }, {
	        type: 'category',
	        fields: 'tanggal',
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
            type: 'line',
            axis: 'left',
            style: {
                'stroke-width': 6
            },
            markerConfig: {
                radius: 4
            },
            highlight: true,
            tips: {
              trackMouse: true,
              width: 200,
              height: 28,
              renderer: function(storeItem, item) {
                this.setTitle('Line '+storeItem.get('tanggal') + ': ' + storeItem.get('TOTAL_REPAIR_QTY') + ' Pcs');
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
            xField: 'tanggal',
            yField: ['TOTAL_REPAIR_QTY', 'AFTER_REPAIR_QTY' ]
        }
	    
   ]
});