import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './components/user.component';
import { HomeComponent } from './components/home.component';
import { PageNotFoundComponent } from './Components/pageNotFound.component';

//creates routes for components in my angular project
const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'user', component: UserComponent },
    { path: '**', component: PageNotFoundComponent }
];

export const routing: ModuleWithProviders =
    RouterModule.forRoot(appRoutes);