import { Component } from '@angular/core';
import { NavegacionComponent } from "../navegacion/navegacion.component";
import { PostComponent } from "../post/post.component";



@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NavegacionComponent, PostComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
