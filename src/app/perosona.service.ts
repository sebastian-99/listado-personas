import { EventEmitter, Injectable } from "@angular/core";
import { LogginServices } from "./LogginService.service";
import { Persona } from "./persona.model";
@Injectable()

export class personasService{

    personas: Persona[] = [
        new Persona('Juan', 'Perez'), 
        new Persona('Laura', 'Juarez'),
        new Persona('Violet', 'Evergarden')
    ];

    saludar = new EventEmitter<number>();

    constructor(private logginService: LogginServices){


    }
    agregarPersona(persona: Persona){
        this.logginService.enviaMensajeConsola("Envia persona: " + persona.nombre + " apellido" + persona.apellido);
        this.personas.push(persona);
    }

    encontrarPersona(index: number){
        let persona: Persona = this.personas[index];
        return persona;
    }

    modificarPersona(index: number, persona:Persona){
        let persona1 = this.personas[index];
        persona1.nombre = persona.nombre;
        persona1.apellido = persona.apellido;
    }

    eliminarPersona(index:number){
        
        this.personas.splice(index,1);
    }

}