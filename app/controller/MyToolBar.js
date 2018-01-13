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
            },

            'MyToolBar #tanggal':{
                change: this.onTanggalChanges
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

    btnDeleteOnClick: function (button){
        var grid = Ext.ComponentQuery.query('daily_output_grid')[0]; //ambil object grid

        if (grid) {
            var sm = grid.getSelectionModel(); //ambil model dari grid tsb, *daily_ouput //contructor   
            var rs = sm.getSelection(); //ambil object modelnya, berupa array
            
            if (!rs.length) {
              Ext.Msg.alert('Info', 'No Record Selected');
              return;
            }
            Ext.Msg.confirm('Remove Record', 
              'Are you sure you want to delete?', 
              function (button) {
                if (button == 'yes') {
                  grid.store.remove(rs[0]);
                }
            });
        }    
    },

    onTanggalChanges: function (component){
        var store = this.getDaily_outputsStore();
        var tanggal = component.rawValue;
        // console.log(tanggal)
        store.proxy.setExtraParam('tanggal', tanggal);
        store.load({
            callback: function (){
                console.log(store.totalCount)
                if (store.totalCount == 0){
                    console.log('data empty')
                } 
            }
        }); 
        
    }
});
