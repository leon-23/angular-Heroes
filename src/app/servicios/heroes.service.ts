import { Injectable } from '@angular/core';
import { Heroe } from '../components/heroes/heroe';
import { heroes } from './heroesData';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable( {
   providedIn: 'root'
})
export class HeroesService {

  private heroes : Heroe[];

  private urlEndPoint: string = 'http://localhost:8080/heroes';

  //private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient){
    this.heroes = heroes;
  }

  public getHeroes(): Observable<Heroe[]>{
      //return this.heroes;
      console.log("entro al list heroes del service");
      return this.http.get(this.urlEndPoint).pipe( map( heroes => heroes as Heroe[]));
  }

  public getHeroe(id : number) : Heroe{
      return this.heroes[id];
  }

  public buscarHeroes(term : string) : Observable<Heroe[]>{

    // let heroes : Heroe[] = new Array();
    //
    // this.heroes.forEach( x =>{
    //     if(x.nombre.toLowerCase().indexOf(term.toLowerCase()) >= 0 )
    //           heroes.push(x);
    // });
    // return heroes;

    return this.http.get(`${this.urlEndPoint}/buscar/${term}`)
            .pipe(map(heroes => heroes as Heroe[]));
  }
}
