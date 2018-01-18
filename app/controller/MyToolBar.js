Ext.define('helloext.controller.MyToolBar', {
    extend: 'Ext.app.Controller',
    models:[ 'Daily_output' ],
    stores:[ 'Daily_outputs' ],
    views:['daily_output_grid'],
    init : function (){
    	//console.log('init MyToolBar controller ')

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

            'MyToolBar #comboLine':{
                change: this.onComboLineChange
            }            
    	});
    	
    },

    btnAddOnClick: function(){

        var store = this.getDaily_outputsStore();
        var model = new helloext.model.Daily_output();
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
        var tanggal = component.rawValue;
        var shift = component.next('combo').value;
        var line_name = component.next('combo#comboLine').value;
        var users_id = MySharedData.getUser() || null ;

        /*console.log({tanggal, shift, line_name})
        return false;*/

        /*set store parameter*/
        store.proxy.setExtraParam('tanggal', tanggal);
        store.proxy.setExtraParam('shift', shift);
        store.proxy.setExtraParam('line_name', line_name);
        // reload store
        store.load(function (records, operation, success){
            // console.log({records, operation, success})
            if (store.totalCount == 0){
                    //console.log('data empty');

                    var a =[
                        {id:1, name: '06-07'},
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
                        {id:17, name: '23-24'},
                        {id:17, name: '00-01'},
                        {id:17, name: '01-02'}

                    ];

                    store.loadData([],false); //empty the local store without firing API  
                    var Array_model = [];
                    if(shift == 'A'){
                        for (var i = 0; i < a.length; i++) {
                            var model = new helloext.model.Daily_output({
                                time: a[i].name,
                                shift: 'A',
                                tanggal: tanggal,
                                line_name: line_name,
                                users_id: users_id
                            });
                            Array_model.push(model);
                        }

                    }else{
                        for (var i = 0; i < b.length; i++) {
                            var model = new helloext.model.Daily_output({
                                time: b[i].name,
                                shift: 'B',
                                tanggal: tanggal,
                                line_name:line_name
                            });
                            Array_model.push(model);
                        }
                    }
                    
                    store.add(Array_model);                    
                } 
        }); 
        
    },

    onComboShiftChange: function (component, value){
        /*deklarasi variable*/
        var store = this.getDaily_outputsStore();
        var tanggal = component.prev('datefield').rawValue ;
        var shift = value;
        var line_name = component.next('combo').value;
        var users_id = MySharedData.getUser() || null ;

        /**/
        /*set store parameter*/
        store.proxy.setExtraParam('tanggal', tanggal);
        store.proxy.setExtraParam('shift', shift);
        store.proxy.setExtraParam('line_name', line_name);
        
        // reload store
        store.load(function (records, operation, success){
            // console.log({records, operation, success})
            if (store.totalCount == 0){
                    //console.log('data empty');

                    var a =[
                        {id:1, name: '06-07'},
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
                        {id:17, name: '23-24'},
                        {id:17, name: '00-01'},
                        {id:17, name: '01-02'}
                    ];

                    store.loadData([],false); //empty the local store without firing API  
                    var Array_model = [];
                    if(shift == 'A'){
                        for (var i = 0; i < a.length; i++) {
                            var model = new helloext.model.Daily_output({
                                time: a[i].name,
                                shift: 'A',
                                tanggal: tanggal,
                                line_name:line_name,
                                users_id:users_id
                            });
                            Array_model.push(model);
                        }

                    }else{
                        for (var i = 0; i < b.length; i++) {
                            var model = new helloext.model.Daily_output({
                                time: b[i].name,
                                shift: 'B',
                                tanggal: tanggal,
                                line_name:line_name,
                                users_id:users_id
                            });
                            Array_model.push(model);
                        }
                    }
                    
                    store.add(Array_model);                    
                } 
        });

    },

    onComboLineChange: function (component, value){
        // console.log({component:component, value:value})
        var store = this.getDaily_outputsStore();
        var tanggal = component.prev('datefield').rawValue ;
        var shift = component.prev('combo').value;
        var line_name = value;
        var users_id = MySharedData.getUser() || null ;

        /**/
        /*set store parameter*/
        store.proxy.setExtraParam('tanggal', tanggal);
        store.proxy.setExtraParam('shift', shift);
        store.proxy.setExtraParam('line_name', line_name);
        // reload store
        store.load(function (records, operation, success){
            // console.log({records, operation, success})
            if (store.totalCount == 0){
                    //console.log('data empty');

                    var a =[
                        {id:1, name: '06-07'},
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
                        {id:17, name: '23-24'},
                        {id:17, name: '00-01'},
                        {id:17, name: '01-02'}
                    ];

                    store.loadData([],false); //empty the local store without firing API  
                    var Array_model = [];
                    if(shift == 'A'){
                        for (var i = 0; i < a.length; i++) {
                            var model = new helloext.model.Daily_output({
                                time: a[i].name,
                                shift: 'A',
                                tanggal: tanggal,
                                line_name: line_name,
                                users_id:users_id
                            });
                            Array_model.push(model);
                        }

                    }else{
                        for (var i = 0; i < b.length; i++) {
                            var model = new helloext.model.Daily_output({
                                time: b[i].name,
                                shift: 'B',
                                tanggal: tanggal,
                                line_name:line_name,
                                users_id:users_id
                            });
                            Array_model.push(model);
                        }
                    }
                    
                    store.add(Array_model);                    
                } 
        });
    }
});
