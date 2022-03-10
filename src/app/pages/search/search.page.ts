import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { Albunes } from '../../interfaces/interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albunes:Observable<Albunes[]>;
  busqueda:string ='';

  constructor(private dataService:DataService) { }

  ngOnInit() {
      this.albunes = this.dataService.getAlbumes();
  }

  onSearchChange(event){
      this.busqueda = event.detail.value;
  }
}
