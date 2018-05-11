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
var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
        /*
         * change is with @Output decorator and of EventEmitter type.
         * This is how we send data back to parent component.
         * change EventEmitter<string> means change is an event that parent component
         * needs to subscribe and will get string argument type. We will explicitly call
         * emit function (i.e. change.emit(“test”)) to send the value back to the parent component.
         * */
        this.change = new core_1.EventEmitter();
    }
    //this is triggered by keyup in our view which triggers the method every time a user presses a key.
    //this function will be called for every character
    //user will enter in search textbox.We are only calling
    //this.change.emit(value); that is sending that character to parent component where 
    //it is being sent to the UserFilterPipe pipe to be filtered from User list.
    SearchComponent.prototype.getEachChar = function (value) {
        this.change.emit(value);
    };
    //clears the filter to reset the User list to default without any filtering.
    //triggered by clicking the cross img in the view
    SearchComponent.prototype.clearFilter = function () {
        this.listFilter = null;
        this.change.emit(null);
    };
    //this takes care of if users paste a string into the search box.
    //it is being called by paste in the view layer
    SearchComponent.prototype.getPasteData = function (value) {
        var pastedVal = value.clipboardData.getData('text/plain');
        this.change.emit(pastedVal);
        value.preventDefault();
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], SearchComponent.prototype, "change", void 0);
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'search-list',
            template: "<div class=\"form-inline\">\n          <div class=\"form-group\">\n            <div class=\"col-lg-12\">\n              <label display=\"inline-block\" width=\"140px\" text-align=\"right\">Search: </label>\n              <input class=\"input-md\" placeholder=\"Search by first or last name\" (paste)=\"getPasteData($event)\" (keyup)=\"getEachChar($event.target.value)\" type=\"text\" [(ngModel)]=\"listFilter\" />\n              <img src=\"\" id=\"img1\" class=\"glyphicon glyphicon-remove\" (click)=\"clearFilter()\" *ngIf=\"listFilter\"/>\n           </div>\n         </div>\n         <div class=\"form-group\">\n             <div *ngIf='listFilter'>\n           <div class=\"h3 text-muted\">Filter by: {{listFilter}}</div>\n        </div>\n      </div>\n     </div> ",
            styleUrls: ['app/Shared/search.component.css']
        })
        //search bar for user search application
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map