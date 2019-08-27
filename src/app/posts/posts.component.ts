import { Component, OnInit } from '@angular/core';

import { PostService } from '../services/post.service';

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
export class PostsComponent implements OnInit {

  posts: Object;


  constructor(private service: PostService) {
  }

  ngOnInit(): void {
    this.service.getPosts()
    .subscribe(
      response => {
        this.posts = response;
      },
      (error: Response) => {
        alert('An unexpected error has occurred!');
        console.log(error);
      });
  }


  createPost(input: HTMLInputElement) {
    let post = { title: input.value };

    this.service.createPost(post)
      .subscribe(
        response => {
          post['id'] = response['id'];
          /* This is where you should append 'post' to the 'posts' object
           * so that the new post could be displayed, but due to deprication and
           * API changes, I currently do not know how to.
           */
          console.log(post);
        },
        (error: Response) => {
          if (error.status == 400) {
            //this.form.setErrors(error.json());
          }
          else {
            alert('An unexpected error has occurred!');
            console.log(error);
          }
        });
  }

  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(
        response => {
          console.log(response)
        },
        (error: Response) => {
          alert('An unexpected error has occurred!');
          console.log(error);
        });
    /*
     * ABOVE 'patch' only sends { isRead: true } to the server, while below
     * 'put' sends the entire post object to the server.
     *
     * this.http.put(this.url, JSON.stringify(post));
     */
  }

  deletePost(post) {
//    this.service.deletePost(post.id)
    this.service.deletePost(345)
      .subscribe(
        response => {
          /* This is where you should delete 'post' from the 'posts' object
           * so that the old post would be removed and no longer displayed, but
           * due to deprication and API changes, I currently do not know to to.
           */
          console.log(response);
        },
        (error: Response) => {
          if (error.status === 404) {
            alert('This post has already been deleted!');
          }
          else {
            alert('An unexpected error has occurred!');
            console.log(error);
          }
        });
  }
}
