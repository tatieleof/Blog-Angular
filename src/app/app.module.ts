import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { app_routing} from './router'; 


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '../../node_modules/@angular/forms';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { AddPostComponent } from './components/add-post/add-post.component';
import { AuthService } from './services/auth.service';
import { CreateUserComponent } from './components/create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    HomeComponent,
    PostDetailComponent,
    TruncatePipe,
    AddPostComponent,
    CreateUserComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    app_routing
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
