
Ext.define('helloext.view.daily_output.Main', {
	extend: 'Ext.panel.Panel',

	alias:'widget.daily_output_main',

  id: 'daily_output_main',
  
  layout: 'border',

  autoScroll: true,

  tbar: {
    xtype : 'toolbar_daily_output_toolbar'
  },

  items : [{
          // height : 550,
          title : 'GRID PER DAY',
          xtype : 'daily_output_grid_perday',
          region : 'center'
      },{
         title : 'GRID PER MONTH',
         xtype : 'daily_output_grid_permonth',
         region : 'east',
         collapsible: true,
         split: true, 
         width : '50%' 
  }]   

});