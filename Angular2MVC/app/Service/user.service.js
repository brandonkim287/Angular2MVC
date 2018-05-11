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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
/*The @Injectable decorator identifies services and other classes that are intended to be injected.
*It can also be used to configure a provider for those services.
 * One awesome thing about RESTful API is the HTTP verbs like functions names.
 * If a function name is starting from GET, PUT, POST, or DELETE, we only need
 * base URL (endpoint), by the HTTP call, it automtically determines the corresponding function.
 * It’s obvious, one Web API controller should have one HTTP verb method.
 * The other methods POST, PUT and DELETE have almost same function body,
 * creating the http header and sending the IUser interface in body where it is being
 * received in Web API controller functions and automatically get converted to user entity because
 * column name does match.
 * */
var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
    }
    //returns list of users. For loading users to app
    UserService.prototype.get = function (url) {
        return this._http.get(url)
            .map(function (response) { return response.json(); })
            // .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    };
    UserService.prototype.post = function (url, model) {
        var body = JSON.stringify(model);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(url, body, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.put = function (url, id, model) {
        var body = JSON.stringify(model);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.put(url + id, body, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.delete = function (url, id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.delete(url + id, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map