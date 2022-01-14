import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { LogginServices } from '../LogginService.service';
import { personasService } from '../perosona.service';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
 
})
export class FormularioComponent  {

  //@Output() personaCreada = new EventEmitter<Persona>();
  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;
  //nombreInput: string = '';
  //apellidoInput: string = '';
  
  constructor(private logginService: LogginServices, 
              private personaService: personasService){

    this.personaService.saludar.subscribe(
    ( indice:number) => alert("el indice es: " + indice)
    );
  }
  agregarPersona(){

    let persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    //this.logginService.enviaMensajeConsola("Envia persona: " + persona1.nombre + " apellido" + persona1.apellido);
    //this.personas.push(persona1);
    //this.personaCreada.emit(persona1);
    this.personaService.agregarPersona(persona1);
  }


}
