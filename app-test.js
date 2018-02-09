Ext.require('Ext.app.Application');

var Application = null;

Ext.onReady(function() {
    Application = Ext.create('Ext.app.Application', {
        name: 'helloext',

        // extend: 'helloext.Application',

        launch: function() {
            //include the tests in the test.html head
            // console.log(this, "launch");

            // this.controllers = ['MyToolBar'];

            /*window.jasmine = jasmineRequire.core(jasmineRequire);
            jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
            jasmine.getEnv().execute();*/

        }
    });

    console.log({Application, helloext})
});