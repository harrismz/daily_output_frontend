Ext.define('helloext.controller.Daily_output_chart_toolbarController', {
    
    extend: 'Ext.app.Controller',

    models:[ 'Daily_output' ],
    
    stores:[ 'Daily_outputs_perday', 'Daily_outputs_permonth'],
    
    // views:['daily_output_grid'],
    
    init : function (){
    	//console.log('init MyToolBar controller ')
    	this.control({
    		         

            /*'MyToolBar button#btnDelete':{
                click: this.btnDeleteOnClick
            },
            */

            'toolbar_daily_output_toolbar button#toolbar_daily_output_toolbar_showchart':{
                click: this.btnShowChartOnClick
            },

            'toolbar_daily_output_toolbar #toolbar_daily_output_toolbar_tanggal':{
                change: this.onChangeValue
            },



            /*'MyToolBar #comboShift':{
                change: this.onChangeValue
            },

            'MyToolBar #comboLine':{
                change: this.onChangeValue
            }  */          
    	});
    	
    },

    btnShowChartOnClick : function (){
        //  console.log('im cliecked')
        Ext.create('Ext.window.Window', {
            // title: 'CHART',
            height: 600,
            width: 1000,
            layout: 'fit',
            modal :true,
            // frame: true,
            items: [{
                title : 'DAILY OUTPUT SUMMARY CHART',
                // bodyPadding : 10,
                xtype : 'daily_output_chart_main',
                // height : 550,
                // width : '100%'
            }]
        }).show();
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
        var store = this.getDaily_outputs_perdayStore();
        var store2 = this.getDaily_outputs_permonthStore();

        var self = this;
        var users_id = helloext.util.Config.getUser() || null ;
        var month = new Date(param.tanggal);
        
        month = month.getMonth() + 1; //
        store.loadData([],false);
        store2.loadData([],false);

        store.load({
            params: {
                tanggal : param.tanggal,
                shift : param.shift
            },
            callback : function (records, operation, success){
                console.log({records, operation, success})        
            }
        });

        store2.load({
            params :{
                month: month
            }
        });
    },

    getReference : function () {
        return {
            tanggal: Ext.ComponentQuery.query('#toolbar_daily_output_toolbar_tanggal')[0].rawValue,
            shift: Ext.ComponentQuery.query('#toolbar_daily_output_toolbar_shift')[0].value,
            // line_name: Ext.ComponentQuery.query('#comboLine')[0].value,
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
