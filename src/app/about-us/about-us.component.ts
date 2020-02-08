import { Component, OnInit } from '@angular/core';
import{WorkGroupService} from'./../work-group.service';
import { HttpClient } from '@angular/common/http';
import { employeInterface } from '../Interfaces/employeInterface';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  team:any[]=[]; //para guardar todo el array que nos provee el servicio
  employ:employeInterface[];

  ApiUrl:any="http://localhost/apiEmployees/public/api";


  constructor( private service:WorkGroupService, private htttpcliente:HttpClient) {
    htttpcliente.get<employeInterface[]>(this.ApiUrl+'/employee').subscribe ((data)=>{
      //console.log(data);
      this.employ=data;
    });
    this.team=service.ObtainworkGroup(); 
  } 

  ngOnInit() {
  }

}
