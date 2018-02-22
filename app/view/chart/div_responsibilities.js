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
                font: '16px Arial'
            }
        }
    ]
});