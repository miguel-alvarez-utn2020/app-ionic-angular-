import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../../app/interfaces/interface';
import { Albunes } from '../interfaces/interface';
import { delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }


  getUsuarios(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenuOpts(){
    return this.http.get<Componente[]>('/assets/data/menu-opts.json');
  }

  getAlbumes(){
    return this.http.get<Albunes[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getHeroes(){
    return this.http.get<Componente[]>('/assets/data/superheroes.json')
      .pipe(
        delay(1500)
      );
  }

}
