import { Component, Input, OnInit } from '@angular/core';
import { personasService } from '../perosona.service';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  @Input() persona: Persona;
  @Input() indice: number;
  @Input() pollo: string;
  constructor(private personaService: personasService) {

   }

  ngOnInit(): void {
  }

  emitirSaludo(){
    this.personaService.saludar.emit(this.indice);
  }

}
