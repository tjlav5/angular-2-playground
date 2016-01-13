System.register(['angular2/core', 'angular2/router', './components/my-new-component/my-new-component', './pipes/my-new-pipe/my-new-pipe'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, my_new_component_1, my_new_pipe_1;
    var Ang2App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (my_new_component_1_1) {
                my_new_component_1 = my_new_component_1_1;
            },
            function (my_new_pipe_1_1) {
                my_new_pipe_1 = my_new_pipe_1_1;
            }],
        execute: function() {
            Ang2App = (function () {
                function Ang2App() {
                    this.defaultMeaning = 42;
                }
                Ang2App.prototype.meaningOfLife = function (meaning) {
                    return "The meaning of life is " + (meaning || this.defaultMeaning);
                };
                Ang2App = __decorate([
                    core_1.Component({
                        selector: 'ang2-app',
                        providers: [],
                        templateUrl: 'app/ang2.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        pipes: [my_new_pipe_1.MyNewPipe]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Foo', component: my_new_component_1.MyNewComponent },
                        { path: '/foo', name: 'Home', component: my_new_component_1.MyNewComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], Ang2App);
                return Ang2App;
            })();
            exports_1("Ang2App", Ang2App);
        }
    }
});
//# sourceMappingURL=../../../app/ang2.js.map