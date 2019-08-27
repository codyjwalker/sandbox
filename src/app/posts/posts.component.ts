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
        /* This is where you should append 'post' to the 'posts' object
         * so that the new post could be displayed, but due to deprication and
         * API changes, I currently do not know how to.
         */
        console.log(post);
    });
  }

  updatePost(post) {
    this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
      .subscribe(response => {
        console.log(response)
      });
    /*
     * ABOVE 'patch' only sends { isRead: true } to the server, while below
     * 'put' sends the entire post object to the server.
     *
     * this.http.put(this.url, JSON.stringify(post));
     */
  }

  deletePost(post) {
    this.http.delete(this.url + '/' + post.id)
      .subscribe(response => {
        /* This is where you should delete 'post' from the 'posts' object
         * so that the old post would be removed and no longer displayed, but
         * due to deprication and API changes, I currently do not know to to.
         */
        console.log(response);
      });
  }

}
