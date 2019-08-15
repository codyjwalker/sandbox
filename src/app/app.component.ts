import { Component } from '@angular/core';

import { FavoriteChangedEventArgs } from './favorite/favorite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sandbox';

  post = {
    title: "Title",
    isFavorite: true
  }

  tweet = {
    body: 'This right here is better than a damn tweet...',
    isLiked: false,
    numLikes: 68
  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("FAVORITE CHANGED", eventArgs);
  }
}
