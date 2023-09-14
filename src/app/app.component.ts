import { SuperHeroService } from './services/super-hero.service';
import { Component } from '@angular/core';
import { SuperHero } from './models/sh';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sh.ui';

  heroes: SuperHero[]=[];
  heroToEdit?:SuperHero;

  constructor (private SuperHeroService: SuperHeroService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.SuperHeroService.getSuperHeroes().subscribe((result:SuperHero[])=>(this.heroes=result));

  }
  updateHeroList(heroes:SuperHero[]){
    this.heroes=heroes;
  }
  initNewHero(){
    this.heroToEdit=new(SuperHero);
  }

  editHero(hero:SuperHero){
    this.heroToEdit=hero;
  }
}
