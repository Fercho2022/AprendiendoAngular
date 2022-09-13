import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';

import { FooterComponent } from './footer/footer.component';
import { ContactoComponent } from './contacto/contacto.component';

import { NosotrosComponent } from './nosotros/nosotros.component';
import { InicioComponent } from './inicio/inicio.component';
import { PagerrorComponent } from './pagerror/pagerror.component';

//servicios

import { EquipoService } from './equipo.service';
import { EquipoComponent } from './equipo/equipo.component'

const routes: Routes = [
  { path: 'contacto', component: ContactoComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'error', component: PagerrorComponent },

  { path: '', component: InicioComponent, pathMatch: 'full'},
  { path: 'inicio', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: 'error', pathMatch: 'full' },
 

];



@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    FooterComponent,
    ContactoComponent,
    NosotrosComponent,
    InicioComponent,
    PagerrorComponent,
    EquipoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes) 
  ],
  providers: [
    EquipoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
