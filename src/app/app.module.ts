import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './components/heroes/hero-details/hero-detail';
import { RouterModule } from '@angular/router';
import { HomePage } from './components/home/HomePage';
import { GeneralPage } from './components/common/pages/GeneralPage';
import { HeroesPage } from "./components/heroes/HeroesPage";
import { PostsPage } from './components/posts/PostsPage';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HomePage,
    GeneralPage,
    HeroesPage,
    PostsPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([{
      path: '',
      component: HomePage
    }, {
      path: 'heroes',
      component: HeroesPage
    }, {
      path: 'posts',
      component: PostsPage
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
