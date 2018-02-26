Ext.define("helloext.view.chart.Daily_rejection_per_month", {
    extend: 'Ext.chart.Chart',
    margin : '10 10 10 10',
    alias: 'widget.chart_daily_rejection_per_month',
    padding: '10 0 0 0',
    animate: true,
    // shadow: false,
    // insetPadding: 40,
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
          type: 'numeric',
          fields: ['AFTER_REPAIR_QTY', 'TOTAL_REPAIR_QTY' ],
          position: 'left',
          // grid: true,
          // minimum: 0,
          // maximum: 250,
          label: {
              renderer: function(v) { return v + ' Pcs'; }
          }
      }, {
          type: 'Category',
          fields: 'tanggal',
          position: 'bottom',
          // grid: true,
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
          xField: 'tanggal',
          yField: 'AFTER_REPAIR_QTY',
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
                  this.setTitle(title + ' for ' + storeItem.get('tanggal') + ': ' + storeItem.get(item.series.yField) + ' Pcs');
              }
          }
      },
      {
          type: 'line',
          axis: 'left',
          title: 'TOTAL_REPAIR_QTY',
          xField: 'tanggal',
          yField: 'TOTAL_REPAIR_QTY',
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
                  this.setTitle(title + ' for ' + storeItem.get('tanggal') + ': ' + storeItem.get(item.series.yField) + ' Pcs');
              }
          }
      }, 

   ]
});