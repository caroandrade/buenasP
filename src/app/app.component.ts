import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';



import { EncabezadoComponent } from "./componentes/encabezado/encabezado.component";


import { CuerpoComponent } from './componentes/cuerpo/cuerpo.component';
import { FooterComponent } from './componentes/footer/footer.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EncabezadoComponent, CuerpoComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'buenasPA';
}
