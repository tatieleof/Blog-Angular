import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  
  fileToUpload: File = null; 

  constructor(private postService: PostService) { }

  ngOnInit() {
    // if(!this.auth.register()){
      
    // }
    // if(!this.auth.getToken()){
    //   // redirect 
    // }
  }
  addPost(forma:any){

    this.postService.addPost(forma.value, this.fileToUpload);
    console.log("adding post working");

  }
  handleFileInput(files: FileList){
    console.log(files.item(0));
    this.fileToUpload = files.item(0); 
    
  }

}
