import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'search-list',
    template: `<div class="form-inline">
          <div class="form-group">
            <div class="col-lg-12">
              <label display="inline-block" width="140px" text-align="right">Search: </label>
              <input class="input-md" placeholder="Search by first or last name" (paste)="getPasteData($event)" (keyup)="getEachChar($event.target.value)" type="text" [(ngModel)]="listFilter" />
              <img src="" id="img1" class="glyphicon glyphicon-remove" (click)="clearFilter()" *ngIf="listFilter"/>
           </div>
         </div>
         <div class="form-group">
             <div *ngIf='listFilter'>
           <div class="h3 text-muted">Filter by: {{listFilter}}</div>
        </div>
      </div>
     </div> `,
    styleUrls:['app/Shared/search.component.css']
})
//search bar for user search application
export class SearchComponent {
    listFilter: string; //filter for search inputted in search bar

    /* 
     * change is with @Output decorator and of EventEmitter type.
     * This is how we send data back to parent component. 
     * change EventEmitter<string> means change is an event that parent component
     * needs to subscribe and will get string argument type. We will explicitly call
     * emit function (i.e. change.emit(“test”)) to send the value back to the parent component.
     * */
    @Output() change: EventEmitter<string> = new EventEmitter<string>();

    //this is triggered by keyup in our view which triggers the method every time a user presses a key.
    //this function will be called for every character
    //user will enter in search textbox.We are only calling
    //this.change.emit(value); that is sending that character to parent component where 
    //it is being sent to the UserFilterPipe pipe to be filtered from User list.
    getEachChar(value: any) {
        this.change.emit(value);
    }

    //clears the filter to reset the User list to default without any filtering.
    //triggered by clicking the cross img in the view
    clearFilter() {
        this.listFilter = null;
        this.change.emit(null);
    }

    //this takes care of if users paste a string into the search box.
    //it is being called by paste in the view layer
    getPasteData(value: any) {
        let pastedVal = value.clipboardData.getData('text/plain');
        this.change.emit(pastedVal);
        value.preventDefault();
    }
}