"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UserFilterPipe = /** @class */ (function () {
    //Custom Angular pipe
    //filter for searching for users by first or last name. 
    function UserFilterPipe() {
    }
    UserFilterPipe.prototype.transform = function (value, filter) {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter(function (app) {
            //this searches an IUser's first or last name and sees if the substring filter is within their name
            return app.FirstName != null && app.FirstName.toLocaleLowerCase().indexOf(filter) != -1
                || app.LastName != null && app.LastName.toLocaleLowerCase().indexOf(filter) != -1;
        }) : value;
    };
    UserFilterPipe = __decorate([
        core_1.Pipe({
            name: 'userFilter'
        })
        //Custom Angular pipe
        //filter for searching for users by first or last name. 
    ], UserFilterPipe);
    return UserFilterPipe;
}());
exports.UserFilterPipe = UserFilterPipe;
//# sourceMappingURL=user.pipe.js.map