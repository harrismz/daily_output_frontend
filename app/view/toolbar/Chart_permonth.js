Ext.define("helloext.view.toolbar.Chart_permonth", {
    extend: 'Ext.toolbar.Toolbar',
    
    alias : 'widget.chart_permonth',
    items: [
        /*{
            xtype: 'datefield',
            id: 'tanggal_Chart_permonth',
            labelPad: 15,
            labelWidth:40,
            format: 'Y-m-d',          
            allowBlank: true,
            emptyText:'yyyy-mm-dd',
            value: new Date(),
            fieldLabel:'Tanggal'
        }*/

        {
            // extend: 'Ext.form.field.Date',
            // alias: 'widget.monthfield',
            xtype : 'datefield',
            id: 'tanggal_Chart_permonth',
            format: 'Y-m',
            fieldLabel:'Tanggal',
            emptyText:'yyyy-mm-dd',
            labelPad: 15,
            labelWidth:40,
            requires: ['Ext.picker.Month'],
            alternateClassName: ['Ext.form.MonthField', 'Ext.form.Month'],
            selectMonth: null,
            value : new Date(),
            createPicker: function() {
                var me = this,
                format = Ext.String.format;
                return Ext.create('Ext.picker.Month', {
                    pickerField: me,
                    ownerCt: me.ownerCt,
                    renderTo: document.body,
                    floating: true,
                    hidden: true,
                    focusOnShow: true,
                    minDate: me.minValue,
                    maxDate: me.maxValue,
                    disabledDatesRE: me.disabledDatesRE,
                    disabledDatesText: me.disabledDatesText,
                    disabledDays: me.disabledDays,
                    disabledDaysText: me.disabledDaysText,
                    format: me.format,
                    showToday: me.showToday,
                    startDay: me.startDay,
                    minText: format(me.minText, me.formatDate(me.minValue)),
                    maxText: format(me.maxText, me.formatDate(me.maxValue)),
                    listeners: {
                        select: {
                            scope: me,
                            fn: me.onSelect
                        },
                        monthdblclick: {
                            scope: me,
                            fn: me.onOKClick
                        },
                        yeardblclick: {
                            scope: me,
                            fn: me.onOKClick
                        },
                        OkClick: {
                            scope: me,
                            fn: me.onOKClick
                        },
                        CancelClick: {
                            scope: me,
                            fn: me.onCancelClick
                        }
                    },
                    keyNavConfig: {
                        esc: function() {
                            me.collapse();
                        }
                    }
                });
            },
            onCancelClick: function() {
                var me = this;
                me.selectMonth = null;
                me.collapse();
            },
            onOKClick: function() {
                var me = this;
                if (me.selectMonth) {
                    me.setValue(me.selectMonth);
                    me.fireEvent('select', me, me.selectMonth);
                }
                me.collapse();
            },
            onSelect: function(m, d) {
                var me = this;
                me.selectMonth = new Date((d[0] + 1) + '/1/' + d[1]);
            }
        }
        , '-',
        {
            xtype:'button',
            id: 'btnRefresh_Chart_permonth',
            // cls: 'btnRefresh',
            text: 'Refresh' 
        }, '-',
        {
            xtype:'button',
            // id: 'btnLogout',
            text: 'Log Out',
            handler: function (){
                localStorage.clear(); //hapus localStorage
                window.location.reload(); //refresh page
            }
        }      
    ]
        
});