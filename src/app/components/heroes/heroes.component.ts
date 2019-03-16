import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';
import { Heroe } from './heroe';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

     heroes : Heroe[];

  constructor(private heroeService : HeroesService,
              private router  : Router) { }

  ngOnInit() {
    this.heroeService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  verHeroe(id : number){
    this.router.navigate(['/heroe',id]);
  }

}
