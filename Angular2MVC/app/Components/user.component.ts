import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../Service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { IUser } from '../Model/user';
import { DBOperation } from '../Shared/enum';
import { Observable } from 'rxjs/Rx';
import { Global } from '../Shared/global';

@Component({
    templateUrl: 'app/Components/user.component.html'
})

export class UserComponent implements OnInit {

    @ViewChild('modal') modal: ModalComponent;
    users: IUser[];//aray of IUsers
    user: IUser;//IUser object we initialize for when editing or deleting existing users
    msg: string;//msg used for errors or success on operations
    usersLoading: boolean = false;//when users are not done loading, this will trigger our loading gif to handle loading delay
    userFrm: FormGroup;//formgroup used for accessing user data from the view
    dbops: DBOperation;
    modalTitle: string;
    modalBtnTitle: string;
    listFilter: string;//string used for filtering users by search

    // default method of the class that is executed when the class is instantiated
    //and ensures proper initialization of fields in the class and its subclasses
    constructor(private fb: FormBuilder, private _userService: UserService) { }

    //life cycle hook called by Angular2 to indicate that Angular is done creating the component.
    //here we initialize the user form that we will use to add, update, or delete users within the view
    ngOnInit(): void {
        this.userFrm = this.fb.group({
            Id: [''],
            FirstName: ['', Validators.required],
            LastName: ['', Validators.required],
            Gender: ['', Validators.required],
            Address: ['', Validators.required],
            Interests: ['', Validators.required],
            Age: ['', Validators.required],
            DateOfBirth: ['', Validators.required],
            Image: ['', Validators.required]
        });
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

    addUser() {
        this.dbops = DBOperation.create; //sets dbops to create
        this.SetControlsState(true); //enables user form putting it in editable mode
        this.modalTitle = "Add New User";
        this.modalBtnTitle = "Add";
        this.userFrm.reset(); //resets any existing elements in our form to create a new user
        this.modal.open(); //initializes the model in the view
    }

    editUser(id: number) {
        this.dbops = DBOperation.update;
        this.SetControlsState(true);
        this.modalTitle = "Edit User";
        this.modalBtnTitle = "Update";
        this.user = this.users.filter(x => x.Id == id)[0];//finds user from array of users using user id
        this.userFrm.setValue(this.user);//sets the form attributes to this.users
        this.modal.open();
    }

    deleteUser(id: number) {
        this.dbops = DBOperation.delete;
        this.SetControlsState(false);
        this.modalTitle = "Confirm to Delete?";
        this.modalBtnTitle = "Delete";
        this.user = this.users.filter(x => x.Id == id)[0];
        this.userFrm.setValue(this.user);
        this.modal.open();
    }
    //operations for when users submit the form for add, edit, and delete operations
    onSubmit(formData: any) {
        this.msg = "";
   
        switch (this.dbops) {
            case DBOperation.create:
                this._userService.post(Global.BASE_USER_ENDPOINT, formData._value).subscribe(
                    data => {
                        if (data == 1) //Success
                        {
                            this.msg = "Data successfully added.";
                            this.LoadUsers();
                        }
                        else
                        {
                            this.msg = "There is some issue in saving records, please contact the system administrator!"
                        }
                        
                        this.modal.dismiss();
                    },
                    error => {
                      this.msg = error;
                    }
                );
                break;
            case DBOperation.update:
                this._userService.put(Global.BASE_USER_ENDPOINT, formData._value.Id, formData._value).subscribe(
                    data => {
                        if (data == 1) //Success
                        {
                            this.msg = "Data successfully updated.";
                            this.LoadUsers();
                        }
                        else {
                            this.msg = "There is some issue in saving records, please contact to system administrator!"
                        }

                        this.modal.dismiss();
                    },
                    error => {
                        this.msg = error;
                    }
                );
                break;
            case DBOperation.delete:
                this._userService.delete(Global.BASE_USER_ENDPOINT, formData._value.Id).subscribe(
                    data => {
                        if (data == 1) //Success
                        {
                            this.msg = "Data successfully deleted.";
                            this.LoadUsers();
                        }
                        else {
                            this.msg = "There is some issue in saving records, please contact to system administrator!"
                        }

                        this.modal.dismiss();
                    },
                    error => {
                        this.msg = error;
                    }
                );
                break;

        }
    }
    //sets state of model. if enabled, form is editable. if disabled, form is in read-only mode
    SetControlsState(isEnable: boolean)
    {
        isEnable ? this.userFrm.enable() : this.userFrm.disable();
    }
}