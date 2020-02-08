import { Injectable } from '@angular/core';

@Injectable({ //permite inyectar el servicio para cualquier componente
  providedIn: 'root'
})
export class WorkGroupService {

  team:any[] = [
    {
      name:"Marcos S. Storm",
      skills:"Chief Executive",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit Molestiae quasi voluptates excepturi delectus at voluptatibus dignissimos.",
      anotherinfo: "Lorem ipsum dolor sit, amet consectetur adipisicing elitipsum dolor sit, amet consectetur adipisicing elitipsum dolor sit, amet consectetur adipisicing elitipsum dolor sit, amet consectetur adipisicing elitipsum dolor sit, amet consectetur adipisicing elit Molestiae quasi voluptates excepturi delectus at voluptatibus dignissimos."
    },

    {
      name:"John F. Kennedy",
      skills:"President of CEO",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae quasi voluptates excepturi delectus at voluptatibus dignissimos blanditiis, autem officia consequatur, adipisci assumenda et velit ex aspernatur nulla voluptate eum quia.",
      anotherinfo: "Lorem ipsum dolor sit, amet consectetur adipisicing elitipsum dolor sit, amet consectetur adipisicing elitipsum dolor sit, amet consectetur adipisicing elitipsum dolor sit, amet consectetur adipisicing elitipsum dolor sit, amet consectetur adipisicing elit Molestiae quasi voluptates excepturi delectus at voluptatibus dignissimos."
    },

  ]
  constructor() { 
    console.log('servicio funcionando...');
  }
  //Metodos del servicio
  ObtainworkGroup(){
    return this.team;
  }


  ObtainOne(id:any){
    if(id<=this.team.length) //comparo si la id que llega de la url es menor igual q cantidad de datos en el array
    return this.team[id]; //si es menor significa q existe el dato
    else{
      return this.team=null;
    }
  }


}
