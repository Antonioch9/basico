//recoge y organiza todos los componentes
//importaciones de libreria de angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//importacion de app.compoente o archivo raiz.
import { AppComponent } from './app.component';
//aqui imporatmos el archivo nuevo
import { FechaComponent } from './fecha/fecha.component';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { MonoarchivoComponent } from './monoarchivo/monoarchivo.component'

//este bloque es un decorador en los que vamos introduciondo datos para que vaya funcionando

@NgModule({
  declarations: [
    //introduciomos nuestro componente
    AppComponent,
    FechaComponent,
    ImagenesComponent,
    MonoarchivoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
