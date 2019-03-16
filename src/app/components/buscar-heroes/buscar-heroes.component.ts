import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';
import { Heroe } from '../../components/heroes/heroe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar-heroes',
  templateUrl: './buscar-heroes.component.html',
  styleUrls: ['./buscar-heroes.component.css']
})
export class BuscarHeroesComponent implements OnInit {

  heroes : Heroe[];

  constructor(
      private heroesService : HeroesService,
      private activatedRoute : ActivatedRoute,
      private router: Router) {}

  ngOnInit() {
    this.setHeroes();
  }

  public setHeroes() : void{
        this.activatedRoute.params.subscribe(params =>{
            this.heroesService.buscarHeroes(params['term'])
              .subscribe(heroes => this.heroes = heroes)
    });
  }

  verHeroe(id : number){
    this.router.navigate(['/heroe',id]);
  }
}
