import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { PersonasComponent } from './personas/personas.component';

const rutas: Routes = [
  {path: '', component: PersonasComponent},
  {path: 'personas', component: PersonasComponent, children: [
    {path: 'agregar', component: FormularioComponent},
    {path: ':id', component: FormularioComponent},
    ]
  },
  {path: '**', component: ErrorComponent},


];

@NgModule({
  imports: [
    RouterModule.forRoot(
      rutas
    )
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
