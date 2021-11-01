import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock.heros';
@Component({
  selector: 'app-heroes',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroesComponent implements OnInit {
 
  heroes = HEROES;
  selectedHero?: Hero;

  constructor() { }

  ngOnInit() {
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}