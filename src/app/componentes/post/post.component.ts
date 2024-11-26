
import { Component } from '@angular/core';
import { WordpressService } from '../../services/wordpress.service';
import { ListadoComponent } from '../listado/listado.component';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [ListadoComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  posts: any[]=[];



  
  constructor (private wordpress: WordpressService){}

  idCat:string="";


   numero(id:string){
    this.idCat=id;
console.log(this.idCat, id, "esto me esta complicando");
   }

  // ngOnInit(){
  //   this.wordpress.getPost()
  //     .subscribe(response =>{
  //       this.posts= response; 
  //     })
  //     console.log(this.posts);
  
  
 
   
  }  
   