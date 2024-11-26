import { Component, Input, SimpleChanges } from '@angular/core';
import { WordpressService } from '../../services/wordpress.service';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {

posts: any[]=[];
num:number=0; 

  @Input() idCat!: string;

  
   constructor ( private wordpress: WordpressService){}

   
   ngOnChanges(changes: SimpleChanges): void {
    console.log('esto se ejecuto',this.idCat);
this.num= parseInt(this.idCat)
console.log('esto es un numero', this.num);

  this.wordpress.buscarNum(this.num)
      .subscribe( posts => this.posts = posts)
      console.log(this.posts, this.num, "para ver si llega la variable");

  }

}
  
  

