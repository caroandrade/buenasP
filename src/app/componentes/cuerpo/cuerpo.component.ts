import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { PostComponent } from "../post/post.component";
import { ListadoComponent } from "../listado/listado.component";


@Component({
  selector: 'app-cuerpo',
  standalone: true,
  imports: [MenuComponent, PostComponent, ListadoComponent],
  templateUrl: './cuerpo.component.html',
  styleUrl: './cuerpo.component.css'
})
export class CuerpoComponent {

}
