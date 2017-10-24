import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './components/heroes/hero-details/hero-detail';
import { RouterModule } from '@angular/router';
import { HomePage } from './components/home/HomePage';
import { GeneralPage } from './components/common/pages/GeneralPage';
import { HeroesPage } from "./components/heroes/HeroesPage";

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HomePage,
    GeneralPage,
    HeroesPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{
      path: '',
      component: HomePage
    }, {
      path: 'heroes',
      component: HeroesPage
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
