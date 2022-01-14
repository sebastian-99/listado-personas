import { Component, OnInit } from '@angular/core';
import { LogginServices } from './LogginService.service';
import { personasService } from './perosona.service';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private logginService: LogginServices , 
              private personasService: personasService){

  }
  title = 'listado de personas';
  pato: string = "pato";
  personas: Persona[] = [];

  ngOnInit(): void {
    this.personas = this.personasService.personas;
  }
  



  /* personaAgregada(persona: Persona){
    //this.personas.push(persona);
    this.personasService.agregarPersona(persona);
  } */
}
