import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';

//servicios
import { HeroesService } from './servicios/heroes.service';

//routes
import { FeatureRoutingModule } from './app.routes';
import { HeroeComponent } from './components/heroe/heroe.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { BuscarHeroesComponent } from './components/buscar-heroes/buscar-heroes.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component'



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    HeroeComponent,
    FooterComponent,
    BuscarHeroesComponent,
    HeroeTarjetaComponent
  ],
  imports: [
    BrowserModule,
    FeatureRoutingModule,
    HttpClientModule
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
