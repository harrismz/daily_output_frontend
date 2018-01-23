Ext.define("helloext.view.chart.delay_type", {
    extend: 'Ext.chart.Chart',
    alias: 'widget.chart_delay_type',
    split: true,
    margin: '10 10 10 10',
    padding: '10 0 0 0',
    style: {
        'background' : '#fff'
    },
    animate: true,
    shadow: false,
    store: 'Daily_outputs',
    insetPadding: 40,
    items: [
        {
            type  : 'text',
            text  : 'Line Charts - Delay Time Per Hour',
            font  : '22px Helvetica',
            width : 500,
            height: 20,
            x : 40, //the sprite x position
            y : 12  //the sprite y position
        }, 
    ],
    axes: [
        {
            // title: 'Lost Hour',
            type: 'numeric',
            fields: 'lost_hour',
            position: 'left',
            grid: true,
            minimum: -1,
            maximum: 1,
        }, {
        	// title: 'Time',
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
            // axis: 'left',
            xField: 'time',
            yField: 'lost_hour',
            style: {
                'stroke-width': 6
            },
            markerConfig: {
                radius: 4
            },
            highlight: {
                fill: 'black',
                radius: 5,
                'stroke-width': 2,
                stroke: 'black'
            },
            tips: {
                trackMouse: true,
                style: 'background: #AAA    ',
                height: 20,
                showDelay: 0,
                dismissDelay: 0,
                hideDelay: 0,
                renderer: function(storeItem, item) {
                    if (storeItem.get('lost_hour') != null ){
                        var lost_hour = storeItem.get('lost_hour')
                    } else {
                        var lost_hour = 0;
                    }
                    // lost_hour= storeItem.get('lost_hour')
                    this.setTitle(storeItem.get('time') + ': ' + lost_hour + ' Hour');
                }
            }
        }
    ]
});