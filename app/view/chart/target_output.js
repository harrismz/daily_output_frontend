Ext.define("helloext.view.chart.target_output", {
    extend: 'Ext.chart.Chart',
    margin : '10 10 10 10',
    alias: 'widget.chart_target_output',
    padding: '10 0 0 0',
    animate: true,
    shadow: false,
    style: {
    	'background': '#fff',
    	'border-radius' : '5px'
    },
    legend: {
        position: 'right',
        boxStrokeWidth: 0,
        labelFont: '12px Helvetica'
    },
    store: 'Daily_outputs',
    insetPadding: 40,
    items: [
	    {
	        type  : 'text',
	        text  : 'Comparation Between Target And Actual Output',
	        font  : '22px Helvetica',
	        width : 100,
	        height: 30,
	        x : 40, //the sprite x position
	        y : 12  //the sprite y position
	    }, 
    ],
    axes: [
	    {
	        type: 'numeric',
	        fields: ['target_sop', 'osc_output' ],
	        position: 'left',
	        grid: true,
	        minimum: 0,
	        maximum: 120,
	        label: {
	            renderer: function(v) { return v + ' Pcs'; }
	        }
	    }, {
	        type: 'category',
	        fields: 'time',
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
	        title: 'Target',
	        xField: 'time',
	        yField: 'target_sop',
	        style: {
	            'stroke-width': 4
	        },
	        markerConfig: {
	            radius: 4
	        },
	        highlight: {
	            fill: '#000',
	            radius: 5,
	            'stroke-width': 2,
	            stroke: '#fff'
	        },
	        tips: {
	            trackMouse: true,
	            style: 'background: #FFF',
	            height: 20,
	            renderer: function(storeItem, item) {
	                var title = item.series.title;
	                this.setTitle(title + ' for ' + storeItem.get('time') + ': ' + storeItem.get(item.series.yField) + ' Pcs');
	            }
	        }
	    }, 

	    {
	        type: 'line',
	        axis: 'left',
	        title: 'Actual',
	        xField: 'time',
	        yField: 'osc_output',
	        style: {
	            'stroke-width': 4
	        },
	        markerConfig: {
	            radius: 4
	        },
	        highlight: {
	            fill: '#000',
	            radius: 5,
	            'stroke-width': 2,
	            stroke: '#fff'
	        },
	        tips: {
	            trackMouse: true,
	            style: 'background: #FFF',
	            height: 20,
	            renderer: function(storeItem, item) {
	                var title = item.series.title;
	                this.setTitle(title + ' for ' + storeItem.get('time') + ': ' + storeItem.get(item.series.yField) + ' Pcs');
	            }
	        }
	    },
	    
   ]
});