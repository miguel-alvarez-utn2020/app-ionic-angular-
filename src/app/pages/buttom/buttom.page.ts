import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttom',
  templateUrl: './buttom.page.html',
  styleUrls: ['./buttom.page.scss'],
})
export class ButtomPage implements OnInit {

  favorito: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
      this.favorito = !this.favorito;
  }

}
