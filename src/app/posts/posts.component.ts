import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/*
 * TODO:
 * Figure out more about (regarding http):
 *  - What was depricated
 *  - What has changed
 *    - How it has changed
 *  - What has remained the same
 */


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  posts: Object;
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {

    http.get(this.url)
      .subscribe(response => {
        this.posts = response;
      });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };

    this.http.post(this.url, JSON.stringify(post))
      .subscribe(response => {
        post['id'] = response['id'];
        console.log(post);
    });
  }

}
