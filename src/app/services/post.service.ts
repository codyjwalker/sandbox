import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AppError } from '../common/app-error';
import { BadInputError } from '../common/bad-input-error';
import { NotFoundError } from '../common/not-found-error';
import { Post } from '../posts/posts.component';

import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { 

  }

  getPosts() {
    try {
      return this.http.get<Post[]>(this.url);
    } catch(e) {
      if (e.status === 400)
        return throwError(new BadInputError(e));
      return throwError(new AppError(e));
    }
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post));
  }

  updatePost(post) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify(
      { isRead: true }));
  }

  deletePost(id) {
    try {
      return this.http.delete(this.url + '/' + id);
    } catch(e) {
      if (e.status === 404)
        return throwError(new NotFoundError());
      return throwError(new AppError(e));
    }
//      .catch((error: Response) => {
//      });
  }
}
