import { Component } from '@angular/core';

import { Hero } from './hero-details/hero';
import { HeroService } from './hero.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'heroes-page',
  templateUrl: './HeroesPage.html'
})

export class HeroesPage {
  title = 'Tour of Heroes';
  heroService = new HeroService();
  heroes = this.heroService.getHeroes();
  selectedHero: Hero;
  atata = 12345;
  someEvent = new EventEmitter();

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.someEvent.emit(hero);
  }
}
