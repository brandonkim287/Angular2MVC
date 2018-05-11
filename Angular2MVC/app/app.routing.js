"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var user_component_1 = require("./components/user.component");
var home_component_1 = require("./components/home.component");
var pageNotFound_component_1 = require("./Components/pageNotFound.component");
//creates routes for components in my angular project
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'user', component: user_component_1.UserComponent },
    { path: '**', component: pageNotFound_component_1.PageNotFoundComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map