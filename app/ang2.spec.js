System.register(['angular2/testing', '../app/ang2'], function(exports_1) {
    var testing_1, ang2_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (ang2_1_1) {
                ang2_1 = ang2_1_1;
            }],
        execute: function() {
            testing_1.beforeEachProviders(function () { return [ang2_1.Ang2App]; });
            testing_1.describe('App: Ang2', function () {
                testing_1.it('should have the `defaultMeaning` as 42', testing_1.inject([ang2_1.Ang2App], function (app) {
                    testing_1.expect(app.defaultMeaning).toBe(42);
                }));
                testing_1.describe('#meaningOfLife', function () {
                    testing_1.it('should get the meaning of life', testing_1.inject([ang2_1.Ang2App], function (app) {
                        testing_1.expect(app.meaningOfLife()).toBe('The meaning of life is 42');
                        testing_1.expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
                    }));
                });
            });
        }
    }
});
//# sourceMappingURL=../../../app/ang2.spec.js.map