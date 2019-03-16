import { Component, OnInit } from '@angular/core';
import { Heroe } from '../heroes/heroe';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

    heroe : Heroe;

  constructor(private activatedRoute : ActivatedRoute,
              private heroesService : HeroesService) { }

  ngOnInit() {
    this.setHeroe();
  }

  setHeroe() : void {
    this.activatedRoute.params.subscribe(params =>{
       this.heroesService.getHeroe(params['id'])
          .subscribe( heroe => this.heroe = heroe)
    });
  }
}
