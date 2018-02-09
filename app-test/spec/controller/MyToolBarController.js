describe("MyToolBar Controller", function() {

    var store = null, ctlr = null;

    beforeEach(function(){
        
        console.log("beforeEach", 	ctlr )

        if (ctlr == null) {
            ctlr = Application.getController('MyToolBar');
            console.log(ctlr, "new value of ctlr")
        }

        console.log("beforeEach ka dua", 	ctlr )


        if (store==null) {
            store = ctlr.getStore('Daily_outputs');
        }

        expect(store).toBeTruthy();

        waitsFor(
            function(){ return !store.isLoading(); },
            "load never completed",
            4000
        );
    });

    it("should have MyToolBar",function(){
        expect( store.getCount() ).toBeGreaterThan(1);
    });

    /*it("should open the editor window", function(){
        var grid = Ext.ComponentQuery.query('userlist')[0];

        ctlr.editUser(grid,store.getAt(0));

        var edit = Ext.ComponentQuery.query('useredit')[0];

        expect(edit).toBeTruthy();
        if(edit)edit.destroy();
    });*/


});