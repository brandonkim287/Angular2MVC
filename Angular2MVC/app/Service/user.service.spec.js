"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/common/http/testing");
var user_service_1 = require("./user.service");
var global_1 = require("../Shared/global");
describe('UserService', function () {
    var service;
    var httpMock;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [testing_2.HttpClientTestingModule],
            providers: [user_service_1.UserService]
        });
        service = testing_1.TestBed.get(user_service_1.UserService);
        httpMock = testing_1.TestBed.get(testing_2.HttpTestingController);
    });
    afterEach(function () {
        httpMock.verify;
    });
    it('should retrieve user 1 from the API via GET', function () {
        var dummyUsers = [
            {
                Id: 1, FirstName: 'Brandon', LastName: 'Kim', Gender: 'Male', Address: '255 Anniversary Ln.',
                Interests: 'Basketball, Soccer, Weight Lifting', Age: 20, DateOfBirth: '7/9/1997', Image: 'brandon.jpg'
            }
        ];
        service.get(global_1.Global.BASE_USER_ENDPOINT + "/1").subscribe(function (users) {
            expect(users.length).toBe(1);
            expect(users).toEqual(dummyUsers);
        });
        var request = httpMock.expectOne(global_1.Global.BASE_USER_ENDPOINT + "/1");
        expect(request.request.method).toBe('GET');
        request.flush(dummyUsers);
    });
});
//# sourceMappingURL=user.service.spec.js.map