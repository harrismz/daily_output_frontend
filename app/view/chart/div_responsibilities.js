Ext.define("helloext.view.chart.div_responsibilities", {
    extend: 'Ext.chart.Chart',
    alias: 'widget.chart_div_responsibilities',
    split: true,
    margin: '10 10 10 10',
    padding: '10 0 0 0',
    style: {
        'background' : '#fff',
        'border-radius' : '5px'
    },
    animate: true,
    shadow: false,
    store: 'Dics',
    insetPadding: 40,
    theme: 'Base:gradients',
    /*legend: {
        position: 'right'
    },*/
    items :[
        {
          type  : 'text',
          text  : 'DIV. RESPONSIBILITY',
          font  : '14px Arial',
          width : 100,
          height: 30,
          x : 50, //the sprite x position
          y : 10  //the sprite y position
       }
    ],
    series: [
        {
            type: 'pie',
            field: 'total',
            showInLegend: true,
            animate :true,
            tips: {
                trackMouse: true,
                renderer: function(storeItem, item) {
                    //calculate percentage.
                    store1 = Ext.getStore('Dics');
                    
                    var total = 0;
                    store1.each(function(rec) {
                        total += rec.get('total');
                    });
                    this.setTitle(storeItem.get('name') + ': ' + Math.round(storeItem.get('total') / total * 100) + '% or ' + storeItem.get('total') +'/'+ total );
                }
            },
            highlight: {
                segment: {
                    margin: 20
                }
            },
            label: {
                field: 'name',
                display: 'rotate',
                contrast: true,
                font: '12px Arial'
            }
        }
    ]
});