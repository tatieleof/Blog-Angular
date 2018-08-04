import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResponseContentType, RequestOptions, Http } from '@angular/http';
import { AuthService } from './auth.service';
import { Router } from '@angular/router'; 
import { Headers, Response } from '@angular/http'
import { Observable, Subject} from "rxjs";
// import { map } from "rxjs/operators";

// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';



export interface Post {
  _id: number,
  title: string,
  text: string,
  image: string
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postToDisplay:Post[] = []
  post:Post[] = []

  urlBase:string = 'http://localhost:3977/api'

  errors:string = ''

  constructor(private http: HttpClient,
              private authService: AuthService,
              private router: Router,
              private _http: Http) {
    console.log("post service working");    
               }

  uploadImage(fileToUpload: File, postId:string){
    const formData: FormData = new FormData();
    formData.append('image', fileToUpload, fileToUpload.name);

    this.http
      .post(this.urlBase+'post/insert-image/'+postId, formData).subscribe(resp =>{
        console.log(resp);
      }, err => {
        console.log(err);
      });
  }
  // createUser(newUserObject: Object){
  //   let userObject = JSON.stringify(newUserObject);

  //   let headers = new Headers ({
  //     'Content-Type' : 'application/json'
  //   });
  //   let options = new RequestOptions ({
  //     headers: headers
  //   }); 
  //   return this._http.post('user', userObject, options)
  //                     .pipe(map((res: Response) => res.json()))
  //                     .catch((error: any)=> Observable.throw(error.json().error 
  //                     || 'Server error'));
                    
  // }
  addPost(post:Post, fileToUpload:File){
    let headers = new HttpHeaders({'authorization':this.authService.getToken()})

    this.http.post(this.urlBase+'post', post, {headers}).subscribe((resp:any)=>{
      console.log(resp);

      this.uploadImage(fileToUpload, resp._id)
    },
    (err)=>{
      console.log('error');
      console.log(err.message);

    this.router.navigate(['/login'])
  });
  }
}
