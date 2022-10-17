import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DbzComponent } from './dbz/dbz.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AddComponent } from './add/add.component';



@NgModule({
  declarations: [
    DbzComponent,
    PersonajesComponent,
    AddComponent
  ],
  exports:[
    DbzComponent,
    PersonajesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class DbzModule { }
