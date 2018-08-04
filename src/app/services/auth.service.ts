import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../../node_modules/@angular/common/http';
import { Router } from '@angular/router'; 

const TOKEN_NAME = "current-user"
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlBase:string='http://localhost:3977/api'

  constructor(public http:HttpClient,
              private router:Router) { }
  
  login(email:string, password:string){
    this.http.post(this.urlBase+"/user/login", {email, password}).subscribe((resp:any)=>{
      console.log(resp.token);
      this.router.navigate(['/home']); 
      this.setToken(resp.token)
    }, err =>{
      console.log(err);
    });
  }

  register(formUser){
    let headers = new HttpHeaders().set('authentification', this.getToken());

    this.http.post(this.urlBase+"user",
                  JSON.stringify(formUser),
                  {headers: headers}
    )
    .subscribe(resp =>{
      console.log(resp);
    }, err => {
      console.log(err);
      this.router.navigate(['/login'])
    });
  }
  setToken(token:string):void{
    localStorage.setItem("current.user", token)
  }
  getToken():string{
    return localStorage.getItem("current.user")
  }
  logout(){
    localStorage.removeItem(TOKEN_NAME); 
  }
}
