import { Component, OnInit } from '@angular/core';

import { AppError } from '../common/app-error';
import { BadInputError } from '../common/bad-input-error';
import { NotFoundError } from '../common/not-found-error';
import { PostService } from '../services/post.service';

/*
 * TODO:
 * Figure out more about (regarding http):
 *  - What was depricated
 *  - What has changed
 *    - How it has changed
 *  - What has remained the same
 */

export interface Post {
  title: String;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  thePosts: Post[];


  constructor(private service: PostService) {
  }

  ngOnInit(): void {
    this.service.getAll()
    .subscribe(posts => this.thePosts = posts);
  }


  createPost(input: HTMLInputElement) {
    let post = { title: input.value };

    this.service.create(post)
      .subscribe(
        newPost => {
          post['id'] = newPost['id'];
          this.thePosts.splice(0, 0, post);
          console.log(post);
        },
        (error: AppError) => {
          if (error instanceof BadInputError) {
//            this.form.setErrors(error.originalError);
          }
          else {
            throw error;
          }
        });
  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(
        updatedPost => {
          console.log(updatedPost)
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
    //    TODO: FIGURE OUT WHY IT'S NOT THROWING ERROR IF UNCOMMENTED!
    this.service.delete(345)
      .subscribe(
        () => {
          console.log('DELETED POST');
          let index = this.thePosts.indexOf(post);
          this.thePosts.splice(index, 1);
        },
        (error: AppError) => {
          if (error instanceof NotFoundError) {
            alert('This post has already been deleted!');
          }
          else {
            throw error;
          }
        });
  }
}
