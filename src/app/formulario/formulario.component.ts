import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent  {

  @Output() personaCreada = new EventEmitter<Persona>();
  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;
  //nombreInput: string = '';
  //apellidoInput: string = '';
  
  
  agregarPersona(){

    let persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    //this.personas.push(persona1);
    this.personaCreada.emit(persona1);

  }


}