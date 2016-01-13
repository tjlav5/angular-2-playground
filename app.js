System.register(['angular2/platform/browser', './app/ang2', 'angular2/router'], function(exports_1) {
    var browser_1, ang2_1, router_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (ang2_1_1) {
                ang2_1 = ang2_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(ang2_1.Ang2App, [
                router_1.ROUTER_PROVIDERS
            ]);
        }
    }
});
//# sourceMappingURL=../../app.js.map