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
  /*it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Tour of Heroes!');
  }));*/
});
