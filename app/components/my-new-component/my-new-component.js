System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MyNewComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MyNewComponent = (function () {
                function MyNewComponent() {
                }
                MyNewComponent = __decorate([
                    core_1.Component({
                        selector: 'my-new-component',
                        templateUrl: 'app/components/my-new-component/my-new-component.html',
                        styleUrls: ['app/components/my-new-component/my-new-component.css'],
                        providers: [],
                        directives: [],
                        pipes: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyNewComponent);
                return MyNewComponent;
            })();
            exports_1("MyNewComponent", MyNewComponent);
        }
    }
});
//# sourceMappingURL=../../../../../app/components/my-new-component/my-new-component.js.map