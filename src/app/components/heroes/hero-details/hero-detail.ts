import { Component, Input } from '@angular/core';

import { Hero } from './hero';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.html'
})
export class HeroDetailComponent {
  @Input() hero: Hero;
  @Input() someEvent: EventEmitter<any>;

  ngOnInit(){
    this.someEvent.subscribe(item => console.log('>> selected: ', item));
  }
}
