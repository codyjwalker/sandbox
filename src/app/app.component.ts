import { Component } from '@angular/core';

import { FavoriteChangedEventArgs } from './favorite/favorite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

/*******************************************************************************
 *                                Fields
 ******************************************************************************/

  /* Title of the page. */
  title = 'sandbox';

  /* For Safe Traversal Operator */
  task = {
    title: 'Review applications',
    assignee: {
      firstName: 'Meech',
      lastName: 'Matriix'
    }
  }

  /* For ngStyle */
  canSave = true;

  /* For ngFor */
  courses3 = [];

  /* For ngSwitchCase */
  viewMode='map';

  /* For *ngIf and [hidden]. */
  courses = [1, 2];
  courses2 = [];

  /* For Favorite component */
  post = {
    title: "Title",
    isFavorite: true
  }

  /* For Like component */
  tweet = {
    body: 'This right here is better than a damn tweet...',
    isLiked: false,
    numLikes: 68
  }

/*******************************************************************************
 *                                Methods
 ******************************************************************************/

  /* For ngStyle */
  canSaveToggle() {
    this.canSave = !this.canSave;
  }

  /* For ngFor */
  loadCourses() {
    this.courses3 = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}];
 }

  /* For ngFor & TrackBy */
  trackCourse(index, course) {
    return course ? course.id : undefined;
  }

  /* For ngFor */
  onChange(course) {
    course.name = 'UPDATED';
  }

  /* For ngFor */
  onRemove(course) {
    let index = this.courses3.indexOf(course);
    this.courses3.splice(index, 1);
  }

  /* For ngFor */
  onAdd() {
    this.courses3.push({ id: 4, name: 'anotha1'});
  }

  /* For Favorite component */
  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("FAVORITE CHANGED", eventArgs);
  }

}
