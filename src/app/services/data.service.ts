import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppError } from '../common/app-error';
import { BadInputError } from '../common/bad-input-error';
import { NotFoundError } from '../common/not-found-error';
import { Post } from '../posts/posts.component';

import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url: string, private http: HttpClient) { 

  }

  getAll() {
    try {
      return this.http.get<Post[]>(this.url)
    } catch(e) {
      this.handleError(e);
    }
  }

  create(resource) {
    try {
      return throwError(new AppError());
//      return this.http.post(this.url, JSON.stringify(resource));
    } catch (e) {
      this.handleError(e);
    }
  }

  update(resource) {
    try {
      return this.http.patch(this.url + '/' + resource.id, JSON.stringify(
        { isRead: true }));
    } catch (e) {
      this.handleError(e);
    }
  }

  /* TODO: Investigate if this is where the problem with not throwing errors
  upon deleting a nonexistent post.... returning throwError here throws
  the error in the end!  But, if we try to delete an invalid id and proceed
  with the try-catch block, no error is ever caught!
  */
  delete(id) {
    return throwError(new AppError());
    /*
    try {
      return this.http.delete(this.url + '/' + id);
    } catch(e) {
      this.handleError(e);
    }
    */
//      .catch((error: Response) => {
//      });
  }

  private handleError(e: Response) {

    if (e.status === 400)
      return throwError(new BadInputError(e));
    if (e.status === 404)
      return throwError(new NotFoundError());
    return throwError(new AppError(e));
  }
}
