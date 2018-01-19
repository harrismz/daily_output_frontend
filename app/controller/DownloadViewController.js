Ext.define('helloext.controller.DownloadViewController', {
    extend: 'Ext.app.Controller',
    init : function (){
    	//console.log('init MyToolBar controller ')
    	this.control({
    		'downloadView button#btnStartDownload ':{ //downloadView = xtype nya, bukan classnya.!
    			click: this.btnDownloadOnClick
    		}          
    	});
    },

    btnDownloadOnClick: function(component, value){
    	var form = component.up('form').getForm();
    	var hostname = MySharedData.hostname; //ini global variable di app.js
    	console.log({form, hostname})
    	if (form.isValid()) {        		
    		var data = {};
            Ext.Object.each(form.getValues(), function(key, value){
                if(value != ""){
                    data[key] = value;
                }
            });

            url = Object.keys(data).map(function(k) {
			    return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
			}).join('&');

            var baseurl = 'http://'+hostname+'/daily_output/public/api/daily_outputs/download';
			var download_url = baseurl +'?'+ url;
			console.log(download_url);
			
			var win = window.open(download_url, '_blank');
        	win.focus();

        }
    	
    }
});
