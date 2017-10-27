import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {PostsPage} from "./components/posts/PostsPage";
import {HeroesPage} from "./components/heroes/HeroesPage";
import {GeneralPage} from "./components/common/pages/GeneralPage";
import {HomePage} from "./components/home/HomePage";
import {HeroDetailComponent} from "./components/heroes/hero-details/hero-detail";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import { HeroService } from './components/heroes/hero.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it(`should return correct list of Heroes`, async(() => {
    let heroService = new HeroService();
    expect(heroService.getHeroes()).toEqual([
      { id: 11, name: 'Mr. Nice!' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ]);
  }));
});
