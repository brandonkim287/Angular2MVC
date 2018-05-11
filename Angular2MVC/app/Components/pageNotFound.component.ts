import { Component } from '@angular/core';

//Page used for non-existing pages. If user types in a page in the browser that does not exist,
//user will be rerouted to this page
@Component({
    template: '<h1>The page you are looking for does not exist</h1>'
})

export class PageNotFoundComponent {

}