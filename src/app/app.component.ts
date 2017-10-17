import { Component } from '@angular/core';

import { Hero } from './components/hero-details/hero';
import { HeroService } from './services/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour of Heroes';
  heroes = new HeroService().getHeroes();
  selectedHero: Hero;
  atata = 12345;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
