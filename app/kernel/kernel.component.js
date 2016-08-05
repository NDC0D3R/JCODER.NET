"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var index_1 = require('../components/index');
var KernelComponent = (function () {
    function KernelComponent() {
    }
    KernelComponent = __decorate([
        router_1.Routes([
            { path: '/', component: index_1.HomeComponent }
        ]),
        core_1.Component({
            selector: 'app',
            template: '<content></content>',
            directives: [index_1.HomeComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], KernelComponent);
    return KernelComponent;
}());
exports.KernelComponent = KernelComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9rZXJuZWwva2VybmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pDLHNCQUE4QixxQkFBcUIsQ0FBQyxDQUFBO0FBVXBEO0lBQUE7SUFBK0IsQ0FBQztJQVJoQztRQUFDLGVBQU0sQ0FBQztZQUNOLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUscUJBQWEsRUFBRTtTQUN4QyxDQUFDO1FBQ0QsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxLQUFLO1lBQ2YsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixVQUFVLEVBQUUsQ0FBRSxxQkFBYSxDQUFFO1NBQzlCLENBQUM7O3VCQUFBO0lBQzZCLHNCQUFDO0FBQUQsQ0FBL0IsQUFBZ0MsSUFBQTtBQUFuQix1QkFBZSxrQkFBSSxDQUFBIiwiZmlsZSI6ImFwcC9rZXJuZWwva2VybmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2luZGV4JztcblxuQFJvdXRlcyhbXG4gIHsgcGF0aDogJy8nLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfVxuXSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcCcsXG4gIHRlbXBsYXRlOiAnPGNvbnRlbnQ+PC9jb250ZW50PicsXG4gIGRpcmVjdGl2ZXM6IFsgSG9tZUNvbXBvbmVudCBdXG59KVxuZXhwb3J0IGNsYXNzIEtlcm5lbENvbXBvbmVudCB7IH1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
