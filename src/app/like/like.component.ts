import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  @Input('numLikes') numLikes: number;
  @Input('isActive') isActive: boolean;
  @Input('body') body: string;

  onClick() {
    this.numLikes += (this.isActive) ? -1 : 1;
    this.isActive = !this.isActive;
  }

}
