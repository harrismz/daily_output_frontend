Ext.define('helloext.store.comboShifts', { //parameter pertama harus sesuai filepath
    extend: 'Ext.data.Store',
    //model: 'helloext.model.comboShifts',
    fields:['id','name'],
    data: [
    	{id:1, name: 'A'},
    	{id:2, name: 'B'}

    ]

});