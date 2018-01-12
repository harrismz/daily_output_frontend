Ext.define('helloext.view.user.Edit', {
	extend: 'Ext.window.Window',

	alias:'widget.useredit',

	title:'Edit User',

	

	autoShow: true,

	initComponent: function (){

		//console.log('edit view initialize')

		this.items = [
			{
				xtype:'form',
				items:[
					{
						xtype:'textfield',
						name	: 'name',
						fieldLabel : 'Name'
					},
					{
						xtype: 'textfield',
						name: 'email',
						fieldLabel:'Email'
					}
				]
			}
		];

		this.buttons = [
            {
                text: 'Save',
                action: 'save',
                id: 'saveButton'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
	}

});