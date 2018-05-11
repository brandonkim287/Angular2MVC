import { Component, OnInit } from "@angular/core";

import { IUser } from '../Model/user';
import { Global } from '../Shared/global';
import { UserService } from '../Service/user.service';

@Component({
    templateUrl: 'app/Components/home.component.html',
    styleUrls:['app/Components/home.component.css']

})

export class HomeComponent{
    users: IUser[];//array of IUsers from the UserDB
    msg: string;//string msg for success or error when loading users
    usersLoading: boolean = false;
    listFilter: string;

    // default method of the class that is executed when the class is instantiated
    //and ensures proper initialization of fields in the class and its subclasses
    constructor(private _userService: UserService) { }

    //life cycle hook called by Angular2 to indicate that Angular is done creating the component.
    //Here when load the list of users
    ngOnInit(): void {
        this.LoadUsers();
    }

    //used for searching. triggers change event within search.component
    //This in turns enters text into listFilter in search.component. listFilter is the ngModule form in our input
    //The ngModule form is used to get data from the view layer
    criteriaChange(value: string): void {
        if (value != '[object Event]')
            this.listFilter = value;
    }

    //loads list of users using http request from our webAPI. BASE_USER_ENDPOINT is set to our userAPI controller
    LoadUsers(): void {
        this.usersLoading = true;
        this._userService.get(Global.BASE_USER_ENDPOINT)
            .subscribe(users => { this.users = users; this.usersLoading = false; },
                error => this.msg = <any>error);
    }
}