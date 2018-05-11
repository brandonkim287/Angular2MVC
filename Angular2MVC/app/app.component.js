"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//Main component for my Angular application
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "user-app",
            template: "\n                <div class=\"topnav\">\n                    <nav class='navbar navbar-inverse'>\n                        <div class='container-fluid'>\n                            <ul class='nav navbar-nav'>\n                                <li><a [routerLink]=\"['home']\">Browse</a></li>\n                                <li><a [routerLink]=\"['user']\">User Management</a></li>\n                            </ul>\n                        </div>\n                    </nav>\n                    <div class='container'>\n                        <router-outlet></router-outlet>\n                    </div>\n                 </div>\n                "
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map