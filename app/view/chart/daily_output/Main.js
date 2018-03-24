
Ext.define('helloext.view.chart.daily_output.Main', {
	extend: 'Ext.panel.Panel',

	alias:'widget.daily_output_chart_main',

  id: 'daily_output_chart_main',
  
  layout: 'border',

  autoScroll: true,

  items : [
    {
        title : 'CHART PER DAY',
        xtype : 'daily_output_barchart',
        bodyPadding : 10,
        region : 'center'
    },{
      title : 'CHART PER MONTH',
      xtype : 'daily_output_barchart_permonth',
      bodyPadding : 10,
      // collapsible: true,
      split: true,
      // layout: 'fit',
      width : '50%',
      region : 'east'
  }]   

});