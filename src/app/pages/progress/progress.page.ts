import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  porcentaje:number = 0.05; 
  
  constructor() { }

  ngOnInit() {
  }

  rangeChange(event){
    const {detail} = event;

    this.porcentaje = detail.value/100;
  }

}
