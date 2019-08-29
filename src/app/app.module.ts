import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { AnotherNewCourseFormComponent } from './another-new-course-form/another-new-course-form.component';
import { AppComponent } from './app.component';
import { AppErrorHandler } from './common/app-error-handler';
import { AppRoutingModule } from './app-routing.module';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowersService } from './services/github-followers.service';
import { InputFormatDirective } from './input-format.directive';
import { LikeComponent } from './like/like.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PanelComponent } from './panel/panel.component';
import { PostService } from './services/post.service';
import { PostsComponent } from './posts/posts.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { TitleCaseComponent } from './title-case/title-case.component';
import { TitleCasePipe } from './title-case.pipe';
import { ZippyComponent } from './zippy/zippy.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    TitleCaseComponent,
    TitleCasePipe,
    AuthorsComponent,
    FavoriteComponent,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    NewCourseFormComponent,
    AnotherNewCourseFormComponent,
    ChangePasswordComponent,
    PostsComponent,
    GithubFollowersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule,
    FontAwesomeModule
  ],
  providers: [
    AuthorsService,
    GithubFollowersService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
