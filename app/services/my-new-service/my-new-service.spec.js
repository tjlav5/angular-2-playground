System.register(['angular2/testing', './my-new-service'], function(exports_1) {
    var testing_1, my_new_service_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (my_new_service_1_1) {
                my_new_service_1 = my_new_service_1_1;
            }],
        execute: function() {
            testing_1.describe('MyNewService Service', function () {
                testing_1.beforeEachProviders(function () { return [my_new_service_1.MyNewService]; });
                testing_1.it('should ...', testing_1.inject([my_new_service_1.MyNewService], function (service) {
                }));
            });
        }
    }
});
//# sourceMappingURL=../../../../../app/services/my-new-service/my-new-service.spec.js.map