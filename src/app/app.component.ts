import { Component } from '@angular/core';

import { FavoriteChangedEventArgs } from './favorite/favorite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sandbox';

  /* For ngSwitchCase */
  viewMode='something';

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

  /* For Favorite component */
  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("FAVORITE CHANGED", eventArgs);
  }
}
