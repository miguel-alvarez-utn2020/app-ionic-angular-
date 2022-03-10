import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ButtomPageRoutingModule } from './buttom-routing.module';

import { ButtomPage } from './buttom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ButtomPageRoutingModule
  ],
  declarations: [ButtomPage]
})
export class ButtomPageModule {}
