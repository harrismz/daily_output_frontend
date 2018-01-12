Ext.define('helloext.view.user.Create', {
	extend: 'Ext.window.Window',

	alias:'widget.userCreate',

	title:'Create User',

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
						id: 'txtName',
						fieldLabel : 'Name'
					},
					{
						xtype: 'textfield',
						name: 'email',
						id:'txtEmail',
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