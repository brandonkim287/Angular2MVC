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
var user_service_1 = require("../Service/user.service");
var forms_1 = require("@angular/forms");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var enum_1 = require("../Shared/enum");
var global_1 = require("../Shared/global");
var UserComponent = /** @class */ (function () {
    // default method of the class that is executed when the class is instantiated
    //and ensures proper initialization of fields in the class and its subclasses
    function UserComponent(fb, _userService) {
        this.fb = fb;
        this._userService = _userService;
        this.usersLoading = false; //when users are not done loading, this will trigger our loading gif to handle loading delay
    }
    //life cycle hook called by Angular2 to indicate that Angular is done creating the component.
    //here we initialize the user form that we will use to add, update, or delete users within the view
    UserComponent.prototype.ngOnInit = function () {
        this.userFrm = this.fb.group({
            Id: [''],
            FirstName: ['', forms_1.Validators.required],
            LastName: ['', forms_1.Validators.required],
            Gender: ['', forms_1.Validators.required],
            Address: ['', forms_1.Validators.required],
            Interests: ['', forms_1.Validators.required],
            Age: ['', forms_1.Validators.required],
            DateOfBirth: ['', forms_1.Validators.required],
            Image: ['', forms_1.Validators.required]
        });
        this.LoadUsers();
    };
    //used for searching. triggers change event within search.component
    //This in turns enters text into listFilter in search.component. listFilter is the ngModule form in our input
    //The ngModule form is used to get data from the view layer
    UserComponent.prototype.criteriaChange = function (value) {
        if (value != '[object Event]')
            this.listFilter = value;
    };
    //loads list of users using http request from our webAPI. BASE_USER_ENDPOINT is set to our userAPI controller
    UserComponent.prototype.LoadUsers = function () {
        var _this = this;
        this.usersLoading = true;
        this._userService.get(global_1.Global.BASE_USER_ENDPOINT)
            .subscribe(function (users) { _this.users = users; _this.usersLoading = false; }, function (error) { return _this.msg = error; });
    };
    UserComponent.prototype.addUser = function () {
        this.dbops = enum_1.DBOperation.create; //sets dbops to create
        this.SetControlsState(true); //enables user form putting it in editable mode
        this.modalTitle = "Add New User";
        this.modalBtnTitle = "Add";
        this.userFrm.reset(); //resets any existing elements in our form to create a new user
        this.modal.open(); //initializes the model in the view
    };
    UserComponent.prototype.editUser = function (id) {
        this.dbops = enum_1.DBOperation.update;
        this.SetControlsState(true);
        this.modalTitle = "Edit User";
        this.modalBtnTitle = "Update";
        this.user = this.users.filter(function (x) { return x.Id == id; })[0]; //finds user from array of users using user id
        this.userFrm.setValue(this.user); //sets the form attributes to this.users
        this.modal.open();
    };
    UserComponent.prototype.deleteUser = function (id) {
        this.dbops = enum_1.DBOperation.delete;
        this.SetControlsState(false);
        this.modalTitle = "Confirm to Delete?";
        this.modalBtnTitle = "Delete";
        this.user = this.users.filter(function (x) { return x.Id == id; })[0];
        this.userFrm.setValue(this.user);
        this.modal.open();
    };
    //operations for when users submit the form for add, edit, and delete operations
    UserComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        this.msg = "";
        switch (this.dbops) {
            case enum_1.DBOperation.create:
                this._userService.post(global_1.Global.BASE_USER_ENDPOINT, formData._value).subscribe(function (data) {
                    if (data == 1) //Success
                     {
                        _this.msg = "Data successfully added.";
                        _this.LoadUsers();
                    }
                    else {
                        _this.msg = "There is some issue in saving records, please contact the system administrator!";
                    }
                    _this.modal.dismiss();
                }, function (error) {
                    _this.msg = error;
                });
                break;
            case enum_1.DBOperation.update:
                this._userService.put(global_1.Global.BASE_USER_ENDPOINT, formData._value.Id, formData._value).subscribe(function (data) {
                    if (data == 1) //Success
                     {
                        _this.msg = "Data successfully updated.";
                        _this.LoadUsers();
                    }
                    else {
                        _this.msg = "There is some issue in saving records, please contact to system administrator!";
                    }
                    _this.modal.dismiss();
                }, function (error) {
                    _this.msg = error;
                });
                break;
            case enum_1.DBOperation.delete:
                this._userService.delete(global_1.Global.BASE_USER_ENDPOINT, formData._value.Id).subscribe(function (data) {
                    if (data == 1) //Success
                     {
                        _this.msg = "Data successfully deleted.";
                        _this.LoadUsers();
                    }
                    else {
                        _this.msg = "There is some issue in saving records, please contact to system administrator!";
                    }
                    _this.modal.dismiss();
                }, function (error) {
                    _this.msg = error;
                });
                break;
        }
    };
    //sets state of model. if enabled, form is editable. if disabled, form is in read-only mode
    UserComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.userFrm.enable() : this.userFrm.disable();
    };
    __decorate([
        core_1.ViewChild('modal'),
        __metadata("design:type", ng2_bs3_modal_1.ModalComponent)
    ], UserComponent.prototype, "modal", void 0);
    UserComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/Components/user.component.html'
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, user_service_1.UserService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map