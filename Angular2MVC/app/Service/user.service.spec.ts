import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable } from 'rxjs/Observable';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserService } from './user.service';
import { Global } from '../Shared/global';
import { IUser } from '../Model/user';

describe('UserService', () => {
    let service: UserService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [UserService]
        });
        service = TestBed.get(UserService);
        httpMock = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify;
    })

    it('should retrieve user 1 from the API via GET', () => {
        const dummyUsers: IUser[] = [
            {
                Id: 1, FirstName: 'Brandon', LastName: 'Kim', Gender: 'Male', Address: '255 Anniversary Ln.',
                Interests: 'Basketball, Soccer, Weight Lifting', Age: 20, DateOfBirth: '7/9/1997', Image: 'brandon.jpg'
            }
        ];
        service.get(`${Global.BASE_USER_ENDPOINT}/1`).subscribe(users => {
            expect(users.length).toBe(1);
            expect(users).toEqual(dummyUsers);
        });
        const request = httpMock.expectOne(`${Global.BASE_USER_ENDPOINT}/1`);

        expect(request.request.method).toBe('GET');

        request.flush(dummyUsers);
    });
});