Ext.define('helloext.controller.Users', {
    extend: 'Ext.app.Controller',

    init :  function(){
    	// console.log('hai im helloext')
    	this.control({
    		
            userlist: { //event handler for component userlist
    			itemdblclick: this.editUser 
    		},

    		'useredit button[action=save]': { //event handler for component useredit
                click: this.updateUser
            },

            'actionpanel #btnAdd': { //event handler for component action panel
                click: this.btnAddonClick
            },

            'actionpanel #btnDelete': { //event handler for component action panel
                click: this.btnDeleteOnClick
            },

            'userCreate #saveButton':{
            	click: this.btnSaveOnClick
            }

    	});

    },

    updateUser(button){
    	console.log('updateUser');

    	var win    = button.up('window'),
        form   = win.down('form'),
        record = form.getRecord(),
        values = form.getValues();

	    record.set(values);
	    win.close();
	    // synchronize the store after editing the record
    	this.getUsersStore().sync();
    },

    btnAddonClick(param){
        var view = Ext.widget('userCreate');

    },

    btnDeleteOnClick(){
        console.log('btnDeleteOnClick');
        if (userlist.getSelectionModel().hasSelection()) {
           var row = userlist.getSelectionModel().getSelection()[0];
           console.log(row.get('dni'))
        }   
    },

    editUser(grid, record){
    	//console.log('Double clicked on ' + record.get('name'));
    	var view = Ext.widget('useredit');
		view.down('form').loadRecord(record);

    },

    btnSaveOnClick(param){
    	var win    = param.up('window'),
        form   = win.down('form'), 
        values = form.getValues();
        console.log(win,form,values)

    }

});
