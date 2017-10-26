import {Component, ViewEncapsulation} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'posts-page',
  templateUrl: './PostsPage.html',
  styleUrls: ['./posts.css'],
  encapsulation: ViewEncapsulation.None
})

export class PostsPage {
  title = 'Posts Page!';
  newPost = '';
  isPostEditorActive = false;
  results = [];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('http://localhost:8002/posts').subscribe(data => {
      console.log(data);
      this.results = data['posts'];
    });
  }
  addComment(post){
    post.isEditorActive = !post.isEditorActive;
  }
  addPost(){
    this.isPostEditorActive = !this.isPostEditorActive;
  }
  commitComment(post){
    post.isEditorActive = false;
    console.log('>> post this: ', post.id, post.newComment);
    this.http.post('http://localhost:8002/posts/' + post.id + '/comments', {
      message: post.newComment
    }).subscribe(data => {
      console.log(data);
      post.comments.push(data);
      post.newComment = '';
    });
  }
  commitPost(){
    this.isPostEditorActive = false;
    console.log('>> post this: ', this.newPost);
    this.http.post('http://localhost:8002/posts', {
      message: this.newPost
    }).subscribe(data => {
      console.log(data);
      this.results.push(data);
      this.newPost = '';
    });
  }
}
