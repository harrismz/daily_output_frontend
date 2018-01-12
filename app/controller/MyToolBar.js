Ext.define('helloext.controller.MyToolBar', {
    extend: 'Ext.app.Controller',
    models:[ 'Daily_output' ],
    stores:[ 'Daily_outputs' ],
    views:['daily_output_grid', 'Create' ],
    init : function (){
    	console.log('init MyToolBar controller ')

    	this.control({
    		'MyToolBar button#btnAdd':{
    			click: this.btnAddOnClick
    		},

            'MyToolBar button#btnDelete':{
                click: this.btnDeleteOnClick
            }            	
    	});
    	
    },

    btnAddOnClick: function(){
    	//var view = Ext.widget('create');
        //var store = Ext.create('helloext.store.Daily_outputs', {} );
        var store = this.getDaily_outputsStore();
        var model = new helloext.model.Daily_output();
        //console.log(model);
        store.insert(0, model );
        RowEditing.startEdit(0, 0);
        
    },

    btnDeleteOnClick: function (){
        var rows = this.up("panel").down("doGrid").getSelectionModel().getSelection();
        console.log(rows)
    }
});
