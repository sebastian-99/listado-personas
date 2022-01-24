import { Component } from '@angular/core';
import { LogginServices } from './LogginService.service';
import { personasService } from './perosona.service';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  title = 'listado de personas';
  
  
  



  /* personaAgregada(persona: Persona){
    //this.personas.push(persona);
    this.personasService.agregarPersona(persona);
  } */
}
