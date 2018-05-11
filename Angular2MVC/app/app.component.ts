import { Component } from "@angular/core"

//Main component for my Angular application
@Component({
    selector: "user-app",
    template: `
                <div class="topnav">
                    <nav class='navbar navbar-inverse'>
                        <div class='container-fluid'>
                            <ul class='nav navbar-nav'>
                                <li><a [routerLink]="['home']">Browse</a></li>
                                <li><a [routerLink]="['user']">User Management</a></li>
                            </ul>
                        </div>
                    </nav>
                    <div class='container'>
                        <router-outlet></router-outlet>
                    </div>
                 </div>
                `
})

export class AppComponent {

}