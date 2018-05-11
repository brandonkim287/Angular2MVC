import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { UserComponent } from './components/user.component';
import { HomeComponent } from './components/home.component';
import { UserService } from './Service/user.service';
import { PageNotFoundComponent } from './Components/pageNotFound.component';
import { UserFilterPipe } from './filter/user.pipe';
import { SearchComponent } from './Shared/search.component';

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpModule, routing, Ng2Bs3ModalModule, FormsModule],
    declarations: [AppComponent, UserComponent, HomeComponent, PageNotFoundComponent, UserFilterPipe, SearchComponent],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }, UserService],
    bootstrap: [AppComponent]

})
export class AppModule { }
