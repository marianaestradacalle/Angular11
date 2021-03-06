import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { DirectivaPruebaDirective } from './directiva-prueba.directive';
import { PipePruebaPipe } from './pipe-prueba.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    DirectivaPruebaDirective,
    PipePruebaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
