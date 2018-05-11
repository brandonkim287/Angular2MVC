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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var global_1 = require("../Shared/global");
var user_service_1 = require("../Service/user.service");
var HomeComponent = /** @class */ (function () {
    // default method of the class that is executed when the class is instantiated
    //and ensures proper initialization of fields in the class and its subclasses
    function HomeComponent(_userService) {
        this._userService = _userService;
        this.usersLoading = false;
    }
    //life cycle hook called by Angular2 to indicate that Angular is done creating the component.
    //Here when load the list of users
    HomeComponent.prototype.ngOnInit = function () {
        this.LoadUsers();
    };
    //used for searching. triggers change event within search.component
    //This in turns enters text into listFilter in search.component. listFilter is the ngModule form in our input
    //The ngModule form is used to get data from the view layer
    HomeComponent.prototype.criteriaChange = function (value) {
        if (value != '[object Event]')
            this.listFilter = value;
    };
    //loads list of users using http request from our webAPI. BASE_USER_ENDPOINT is set to our userAPI controller
    HomeComponent.prototype.LoadUsers = function () {
        var _this = this;
        this.usersLoading = true;
        this._userService.get(global_1.Global.BASE_USER_ENDPOINT)
            .subscribe(function (users) { _this.users = users; _this.usersLoading = false; }, function (error) { return _this.msg = error; });
    };
    HomeComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/Components/home.component.html',
            styleUrls: ['app/Components/home.component.css']
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map