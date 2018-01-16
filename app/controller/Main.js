Ext.define('helloext.controller.Main', {
    extend: 'Ext.app.Controller',

    init: function() {
        this.control({
             'viewport': {
                 render: this.onViewportRendered
            }
        });
    },

    onViewportRendered: function(component, value){
    	console.log({component:component, value:value})
        
    }
});
