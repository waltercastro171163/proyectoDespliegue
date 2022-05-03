import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { XboxComponent } from './componente/xbox/xbox.component';
import { InicioComponent } from './componente/inicio/inicio.component';
import { Ps5Component } from './componente/ps5/ps5.component';
import { NintentoComponent} from './componente/nintento/nintento.component';


const routes: Routes = [

  {path:'xbox',component:XboxComponent},
  {path:'inicio',component:InicioComponent},
  {path:'Ps5',component: Ps5Component},
  {path:'Nintendo',component:NintentoComponent},
  {path: '', component: InicioComponent }, //*predeterminado al ingresar a la pagina ppal
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
