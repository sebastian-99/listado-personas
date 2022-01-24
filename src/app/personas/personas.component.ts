import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { personasService } from '../perosona.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  constructor(
    private personasService: personasService,
    private router: Router){}

  personas: Persona[] = [];
  pato: string = "pato";
  ngOnInit(): void {
    this.personas = this.personasService.personas;
  }

  agregar(){
    this.router.navigate(['personas/agregar']);
  }


}
