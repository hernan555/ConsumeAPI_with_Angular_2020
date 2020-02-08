import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; //httpCLient para consumir api
//Rutas
import { AppRoutingModule } from './app-routing.module';

/**Servicios...una vez importado y agregado a providers nuestro servicio app.module.ts...
 estara disponible para cualq componente, solo debemos importar el servicio en el componente 
 q necesite usarlo...**/
 import{WorkGroupService} from './work-group.service';

//Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    ContactComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [WorkGroupService],//servicio 
  bootstrap: [AppComponent]
})
export class AppModule { }
