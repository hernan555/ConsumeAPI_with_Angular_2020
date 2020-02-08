import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';//importamos ActivateRoute para obtener info de la url
import{WorkGroupService} from './../work-group.service'//importamos el servicio
import {Router} from '@angular/router';
import { empty } from 'rxjs';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  team:any[]=null;

  constructor(private ruta:ActivatedRoute, private _servicio:WorkGroupService, private router:Router) {
    this.ruta.params.subscribe(params=>{
      //La ruta nos da la url y params la lee y nos permite obtener la id pasada en la url...
      //Por lo tanto params [id] nos brinda la id 
      this.team=this._servicio.ObtainOne(params['id']); //Guardo en el array team el miembro a mostrar en la vista "team.component.html" que obtuvimos a partir del metodo obtainOne()
    })

  if(this.team==null){
    this.router.navigate(['/us']);
  }
  
  }

  ngOnInit() {
  }

}
