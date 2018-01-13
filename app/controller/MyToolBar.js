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
            },

            'MyToolBar #comboShift':{
                change: this.onComboShiftChange
            },            


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

    onTanggalChanges: function (component, value){
        var store = this.getDaily_outputsStore();
        var tanggal = value;//component.rawValue;
 
        store.proxy.setExtraParam('tanggal', tanggal);
        store.load({
            callback: function (){
                
                if (store.totalCount == 0){
                    console.log('data empty');

                    var a =[{id:1, name: '06-07'},
                        {id:2, name: '07-08'},
                        {id:3, name: '08-09'},
                        {id:4, name: '09-10'},
                        {id:5, name: '10-11'},
                        {id:6, name: '11-12'},
                        {id:7, name: '12-13'},
                        {id:8, name: '13-14'},
                        {id:9, name: '14-15'},
                        {id:10, name: '15-16'}
                    ];

                    var b = [
                        {id:11, name: '16-17'},
                        {id:12, name: '18-19'},
                        {id:13, name: '19-20'},
                        {id:14, name: '20-21'},
                        {id:15, name: '21-22'},
                        {id:16, name: '22-23'},
                        {id:17, name: '23-24'}
                    ];

                    comboShift = component.next('combo')
                    console.log(comboShift.value)

                    if(comboShift.value == 'B'){
                        console.log('comboShift B')
                    }

                    
                } 
            }
        }); 
        
    },

    onComboShiftChange: function (component, value){
        console.log({component, value})
    }
});
