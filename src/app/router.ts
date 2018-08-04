import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { CreateUserComponent } from './components/create-user/create-user.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'post', component: AddPostComponent},
    { path: 'signup', component: CreateUserComponent}, 
    
    { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

export const app_routing = RouterModule.forRoot(APP_ROUTES);