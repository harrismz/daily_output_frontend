Ext.define('helloext.model.Repair', {
    extend: 'Ext.data.Model',
    fields: [ 
     'id', 
     'line_name',
     'shift', 
     'users_id', 
     'tanggal', 
     'SMT',
     'PCB_CODE',
     'DESIGN_CODE',
     'DESIGN_CODE',
     'ELECTRICAL_CODE',
     'MECHANICAL_CODE',
     'FINAL_ASSY_CODE',
     'OTHERS_CODE',
     'AFTER_REPAIR_QTY',
     'MA',
     'PCB',
     'TOTAL_REPAIR_QTY',
     'major_problem',
     'created_at',
     'updated_at'
    ]
});