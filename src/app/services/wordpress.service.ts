import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WordpressService {
  
  private url = 'https://buenaspracticas.mendoza.edu.ar/wp-json/wp/v2/posts?';
 
  constructor( private http: HttpClient) { }

  getPost(){
    return this.http.get(this.url);
}


  buscarNum(numero:number):Observable<any[]>{

    return  this.http.get<any[]>(`${this.url}/categories=${numero}`);

    
       
   }
}
  

