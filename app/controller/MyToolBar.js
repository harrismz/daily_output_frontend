Ext.define('helloext.controller.MyToolBar', {
    extend: 'Ext.app.Controller',
    models:[ 'Daily_output' ],
    stores:[ 'Daily_outputs', 'Qualities', 'Dics' ],
    views:['daily_output_grid'],
    init : function (){
    	//console.log('init MyToolBar controller ')
    	this.control({
    		'MyToolBar button#btnAdd':{
    			click: this.onRefresh
    		},           

            'MyToolBar button#btnDelete':{
                click: this.btnDeleteOnClick
            },

            'MyToolBar button#btnDownload':{
                click: this.btnDownloadOnClick
            },

            'MyToolBar #tanggal':{
                change: this.onChangeValue
            },

            'MyToolBar #comboShift':{
                change: this.onChangeValue
            },

            'MyToolBar #comboLine':{
                change: this.onChangeValue
            }            
    	});
    	
    },

    onRefresh : function (){
        var store = this.getDicsStore();
        console.log('onRefresh', store)
        store.load()
    },

    getShift : function (param){

        var a = [
            {id:1, name: '06-07', durasi: 60, jumat: 60 },
            {id:2, name: '07-08', durasi: 60, jumat: 50 },
            {id:3, name: '08-09', durasi: 50, jumat: 50 },
            {id:4, name: '09-10', durasi: 60, jumat: 60 },
            {id:5, name: '10-11', durasi: 50, jumat: 50 },
            {id:6, name: '11-12', durasi: 60, jumat: 60 },
            {id:7, name: '12-13', durasi: 25, jumat: 10 },
            {id:8, name: '13-14', durasi: 60, jumat: 50 },
            {id:9, name: '14-15', durasi: 60, jumat: 60 },
            {id:10, name: '15-16', durasi: 5, jumat: 30 }
        ];

        var b =[
            {id:11, name: '16-17', durasi: 60, jumat: 60},
            {id:12, name: '17-18', durasi: 60, jumat: 50},
            {id:13, name: '18-19', durasi: 50, jumat: 50},
            {id:14, name: '19-20', durasi: 60, jumat: 60},
            {id:15, name: '20-21', durasi: 50, jumat: 50},
            {id:16, name: '21-22', durasi: 60, jumat: 60},
            {id:17, name: '22-23', durasi: 25, jumat: 10},
            {id:18, name: '23-24', durasi: 60, jumat: 50},
            {id:19, name: '00-01', durasi: 60, jumat: 60},
            {id:20, name: '01-02', durasi: 5, jumat: 30}
        ];

        if(param == 'a'){
            return a;
        }else{
            return b;
        }

    },

    
    btnAddOnClick: function(component, value){

        var store = this.getDaily_outputsStore();
        var tanggal = component.next('datefield#tanggal');
        var shift = component.next('combo#comboShift').value;
        var line_name = component.next('combo#comboLine').value;
        var users_id = helloext.util.Config.getUser() || null ;

        var parameter = {
            tanggal: tanggal.rawValue,
            shift: shift,
            line_name:line_name,
            users_id: users_id
        }


        //parameter didn't pass to avoid ajax post
        var model = new helloext.model.Daily_output(parameter);
        store.insert(0, model );
        // console.log(model)
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

    onChangeValue: function (component, value) {
        var param = this.getReference();
        var store = this.getDaily_outputsStore();
        var self = this;
        var users_id = helloext.util.Config.getUser() || null ;

        // console.log(param)
        
        store.proxy.setExtraParam('tanggal', param.tanggal);
        store.proxy.setExtraParam('shift', param.shift);
        store.proxy.setExtraParam('line_name', param.line_name);
        // reload store
        store.loadData([],false);

        store.load(function (records, operation, success){
            if (success && store.totalCount == 0 ){
                var a = self.getShift('a');
                var b = self.getShift('b');

                store.loadData([],false); //empty the local store without firing API  
                var Array_model = [];
                if(param.shift == 'A'){
                    for (var i = 0; i < self.getShift('a').length; i++) {
                        
                        if ( !param.isFriday() ){ //jika bkn jumat
                            var minute = a[i].durasi;
                            // console.log('bukan jumat', param )
                        }else{
                            var minute = a[i].jumat;
                            // console.log('jumat', param )
                        }

                        var model = new helloext.model.Daily_output({
                            time: a[i].name,
                            shift: 'A',
                            tanggal: param.tanggal,
                            line_name: param.line_name,
                            minute: minute,
                            users_id: users_id
                        });

                        Array_model.push(model);
                    }

                }else{
                    for (var i = 0; i < self.getShift('b').length; i++) {
                        
                        if ( !param.isFriday() ){ //jika bkn jumat
                            var minute = b[i].jumat;
                        }else{
                            var minute = b[i].durasi;
                        }

                        var model = new helloext.model.Daily_output({
                            time: b[i].name,
                            shift: 'B',
                            tanggal: param.tanggal,
                            minute: minute,
                            line_name: param.line_name,
                            users_id: users_id
                        });
                        Array_model.push(model);
                    }
                }
                
                store.add(Array_model); 
            }           
        });
    },

    getReference : function () {
        return {
            tanggal: Ext.ComponentQuery.query('#tanggal')[0].rawValue,
            shift: Ext.ComponentQuery.query('#comboShift')[0].value,
            line_name: Ext.ComponentQuery.query('#comboLine')[0].value,
            isFriday: function (){
                return new Date(this.tanggal).getDay() == 5; // jika jumat, true 
            }
        }
    },


    btnDownloadOnClick: function(component, value){
        /*var url = 'http://localhost/daily_output/public/api/daily_outputs/download';
        var win = window.open(url, '_blank');
        win.focus();*/
        Ext.widget('downloadView'); //instantiate DownloadView class
    }
});
