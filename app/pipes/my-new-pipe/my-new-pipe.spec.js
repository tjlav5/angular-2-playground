System.register(['angular2/testing', './my-new-pipe'], function(exports_1) {
    var testing_1, my_new_pipe_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (my_new_pipe_1_1) {
                my_new_pipe_1 = my_new_pipe_1_1;
            }],
        execute: function() {
            testing_1.describe('MyNewPipe Pipe', function () {
                testing_1.beforeEachProviders(function () { return [my_new_pipe_1.MyNewPipe]; });
                testing_1.it('should transform the input', testing_1.inject([my_new_pipe_1.MyNewPipe], function (pipe) {
                    testing_1.expect(pipe.transform(true)).toBe(null);
                }));
            });
        }
    }
});
//# sourceMappingURL=../../../../../app/pipes/my-new-pipe/my-new-pipe.spec.js.map