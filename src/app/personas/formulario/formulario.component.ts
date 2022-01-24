import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogginServices } from '../../LogginService.service';
import { personasService } from '../../perosona.service';
import { Persona } from '../../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
 
})
export class FormularioComponent  {

  //@Output() personaCreada = new EventEmitter<Persona>();
  nombreInput: string;
  apellidoInput: string;
  index: number;
  modoEdicion: number;

  constructor(private logginService: LogginServices, 
              private personaService: personasService,
              private router: Router,
              private route: ActivatedRoute){
                  
                  this.personaService.saludar.subscribe(
                  ( indice:number) => alert("el indice es: " + indice)
                  );
                }

  ngOnInit(){
    
    this.index = this.route.snapshot.params['id'];
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];

      if(this.modoEdicion != null && this.modoEdicion == 1){
       let persona: Persona = this.personaService.encontrarPersona(this.index);
       this.nombreInput = persona.nombre;
       this.apellidoInput = persona.apellido;
      }
  }

  
  onGuardarPersona(){

    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    
    if(this.modoEdicion != null && this.modoEdicion == 1){
      this.personaService.modificarPersona(this.index, persona1);
    }else{
      this.personaService.agregarPersona(persona1);
    }

    this.router.navigate(['personas']);
  }

  eliminarPersona(){
    if(this.index != null){
      
      this.personaService.eliminarPersona(this.index);
    }
    this.router.navigate(['personas']);
  }


}
