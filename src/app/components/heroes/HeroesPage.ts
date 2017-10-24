import { Component } from '@angular/core';

import { Hero } from './hero-details/hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'heroes-page',
  templateUrl: './HeroesPage.html'
})

export class HeroesPage {
  title = 'Tour of Heroes';
  heroes = new HeroService().getHeroes();
  selectedHero: Hero;
  atata = 12345;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
