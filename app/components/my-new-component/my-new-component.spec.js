System.register(['angular2/testing', './my-new-component'], function(exports_1) {
    var testing_1, my_new_component_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (my_new_component_1_1) {
                my_new_component_1 = my_new_component_1_1;
            }],
        execute: function() {
            testing_1.describe('MyNewComponent Component', function () {
                testing_1.beforeEachProviders(function () { return []; });
                testing_1.it('should ...', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(my_new_component_1.MyNewComponent).then(function (fixture) {
                        fixture.detectChanges();
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=../../../../../app/components/my-new-component/my-new-component.spec.js.map