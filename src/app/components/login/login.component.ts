import { Component, OnInit } from '@angular/core';
import { FormsModule, EmailValidator } from '@angular/forms'
import { AuthService } from '../../services/auth.service';
import { app_routing } from '../../router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //to give  a defaut value
  user = {
    email: 'eduarda@gmail.com', 
    password: '1234',
  }
 
  constructor(public auth:AuthService) { }

  ngOnInit() {
  }

  save(forma:any){
    console.log("form saved");
    console.log(forma.value);
    console.log(forma);
    this.auth.login(forma.value.email, forma.value.password)
  }
  submitLogin (){
    console.log(this.user.email);
    
  }
}
