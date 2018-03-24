Ext.define('helloext.Application', {
    name: 'helloext',
    
    extend: 'Ext.app.Application',
    
    requires: [
        'helloext.util.Config',
        'Ext.container.Viewport',
        'Ext.form.Panel',
        'Ext.data.proxy.Rest',
        'Ext.toolbar.Paging',
        'Ext.grid.plugin.CellEditing',
        'Ext.ux.ProgressBarPager',
        'Ext.grid.RowNumberer',
        'Ext.grid.plugin.RowEditing',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Date',
        'Ext.grid.feature.Summary',
        'helloext.view.Viewport',
        'Ext.chart.axis.Category',
        'Ext.chart.series.Line',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Pie',
        'Ext.chart.series.Column'

     ],

    views: [
        // TODO: add views here
        /*'user.ActionPanel',*/
        //chart
        'chart.delay_type',
        'chart.target_output',
        'chart.div_responsibilities',
        'chart.Daily_rejection_by_line',
        'chart.Daily_rejection_per_month',
        'Chart_month_container',
        'chart.Daily_lost_time_per_line',
        'chart.Daily_lost_time_per_month',

        'chart.daily_output.Main',
        'chart.daily_output.Barchart',
        'chart.daily_output.Barchart_permonth',
        
        //toolbar chart
        'toolbar.Daily_lost_time_chart_toolbar',     
        'toolbar.daily_output.Toolbar',     


        //toolbar
        'MyToolBar',
        'indexToolbarView',
        'daily_lost_time.toolbar',
        'Fa_quality_toolbar',
        'daily_repair.Toolbar',
        'toolbar.Chart_permonth',

        //grid
        'daily_output_grid',
        'daily_lost_time.grid',
        'daily_repair.Grid',
        'daily_output.grid_perday',
        'daily_output.grid_permonth',

        //others
        'loginView',
        'Create',
        'RegisterUser',
        'DownloadView',
        'daily_output.Main',

        //container
        'Fa_quality_container',
        'Daily_repair_container',
        'Daily_lost_time_chart_container'
        
        
    ],

    controllers: [
        'Main',
        'Daily_outputs',
        'MyToolBar',
        'DownloadViewController',
        'indexToolbarController',
        'Daily_lost_time_toolbar',
        'Fa_qualityController',
        'DailyRepairToolbarController',
        'Chart_permonth_toolbarController',
        'Daily_lost_time_chart_toolbar',
        'Daily_output_chart_toolbarController'
    ],

    //Collection
    stores: [
        'Daily_outputs',
        'timeCombos', //untuk combobox time 06-07 dll
        'comboShifts', //untuk combobox shift
        'lines', //untuk combobox lines
        'Lost_times',
        'Qualities',
        'Dics',
        'Repairs',
        'Permonths',
        'Lost_time_per_lines',
        'Lost_time_per_months',
        'Daily_outputs_perday',
        'Daily_outputs_permonth'

    ],

    //model
    models:[
        /*'User'*/
        'Daily_output',
        'Lost_time',
        'timeCombo',
        'Quality',
        'Dic',
        'Repair',
        'Permonth',
        'Lost_time_per_line',
        'Lost_time_per_month'
    ],

    getCurrentUser: function (token){
       Ext.Ajax.request({
            url: 'http://'+helloext.util.Config.hostname()+'/daily_output/public/api/auth/me',
            method: 'GET',
            params: {token: token},
            success: function (form, action){
                // console.log({form: form, action: action})
                // var user = JSON.parse(form.responseText )
                localStorage.setItem('user', form.responseText )

            },

            failure: function (form, action){
                console.log({form: form, action: action})
            }
        }) 
    },

    runProgram:  function (){

    },

    launch: function() {

        //ambil token dari localStorage
        var token = helloext.util.Config.getToken(); //ambil token dari global variable
        var self = this;
        //cek apa token tsb msh aktif atau engga,
        Ext.Ajax.request({
            url: 'http://'+helloext.util.Config.hostname()+'/daily_output/public/api/protected',
            method: 'GET',
            params: {token: token},
            success: function (form, action){
                //kalau aktif, masuk/
                //fungsi ini harus selesai duluan sebelum jalan fungsi dibawahnya
                //self.getCurrentUser(token); //untuk get current user

                Ext.create('Ext.tab.Panel', {
                    title: 'DAILY OUTPUT CONTROL',
                    
                    items: [
                        {   
                            title: 'DAILY OUTPUT CONTROL',
                            // bodyPadding : 10,
                            xtype:'daily_output_grid',
                            
                            tbar:[{
                                xtype: 'MyToolBar'  
                            }],

                            bbar: {
                                xtype: 'pagingtoolbar',
                                pageSize: 50,
                                store: 'Daily_outputs',
                                emptyMsg: 'Sorry, No Records Are Available At The Moment.',   
                                displayInfo: true,
                                plugins: new Ext.ux.ProgressBarPager()
                            },
                            
                            height: 550
                        },{
                            title : 'DAILY OUTPUT SUMMARY INFO',
                            // bodyPadding : 10,
                            xtype : 'daily_output_main',
                            height : 550
                        },/*{
                            title : 'DAILY OUTPUT SUMMARY CHART',
                            // bodyPadding : 10,
                            xtype : 'daily_output_chart_main',
                            height : 550,
                            // width : '100%'
                        },*/                      
                        {
                            title: 'DAILY LOST TIME',
                            bodyPadding : 10,
                            xtype: 'daily_lost_time_grid',
                            height: 550
                        },
                        {
                            title : 'DAILY LOST TIME CHART',
                            bodyPadding : 10,
                            xtype : 'daily_lost_time_chart_container',
                            height : 550
                        },
                        {
                            title: 'DAILY REPAIRS',
                            xtype: 'daily_repair',
                            bodyPadding : 10,
                            height: 550
                        },
                        {
                            title: 'DAILY REPAIRS CHART',
                            xtype: 'fa_quality',
                            // bodyPadding : 10,
                            height: 550
                        },
                        {
                            title : 'DAILY REPAIRS CHART PER MONTH',
                            xtype: 'chart_month_container',
                            // region: 'south',
                            height : 550
                        }
                    ],
                    renderTo: "mainPanel"
                });
            },

            failure: function (form, action){
                //kalau engga, masuk login
                Ext.create('helloext.view.Viewport', {
                    id: 'viewport'
                });
            }
        })   
    }

});
