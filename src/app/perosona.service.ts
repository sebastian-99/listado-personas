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



}