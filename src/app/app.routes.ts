import { Routes } from '@angular/router';
import { PostComponent } from './componentes/post/post.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';


export const routes: Routes = [
   
    {   path:'informacion', component: NavegacionComponent  },
    {   path:'post', component: PostComponent},
  
    
];
