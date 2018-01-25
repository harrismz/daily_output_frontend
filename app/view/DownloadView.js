Ext.define("helloext.view.DownloadView", {
    extend: 'Ext.window.Window',
    alias: 'widget.downloadView',
    title: 'Download View',
    layout: 'fit',
    autoShow: true,
    items:[
	    {
	        xtype: 'form',
	        padding:10,
	        /**/
	        items: [
	        	/*{
	        		xtype:'combo',
	        		store: ''
	        	},*/
	            {
	                xtype: 'datefield',
	                name : 'start_date',
	                format: 'Y-m-d',
	                fieldLabel: 'Start Date',
	                emptyText:'yyyy-mm-dd',
	                allowBlank: true
	            },
	            {
	                xtype: 'datefield',
	                name : 'end_date',
	                format: 'Y-m-d',
	                fieldLabel: 'End Date',
	                emptyText:'yyyy-mm-dd',
	                allowBlank: true
	            },
	            {
	                text: 'comboShift',
		            xtype: 'combo',
		            name: 'shift',
		            fieldLabel:'Shift',
		            store: 'comboShifts',
		            emptyText : 'Shift',
		            id: 'comboShiftDownload',
		            displayField:'name',
		            valueField:'name',
		            queryMode: 'local'
	            },
	            {
		            text: 'Line',
		            xtype: 'combo',
		            name:'line_name',
		            fieldLabel:'Line',
		            store: 'lines',
		            emptyText : 'lines',
		            id: 'comboLineDownload',
		            displayField:'name',
		            valueField:'name',
		            queryMode: 'local'
		        },
		        {
		        	xtype: 'label',
		        	text: "*Click download if you don't want to filter"
		        }
	        ],
	        buttons:[
		    	{
		            text: 'Download',
		            xtype: 'button',
		            name: 'btnStartDownload',
		            action: 'download',
		            id: 'btnStartDownload',
		            formBind: true               
		        }
		    ]
	    }
    ]
});