import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CityPagePageRoutingModule } from './city-page-routing.module';




import { CityPagePage } from './city-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CityPagePageRoutingModule
  ],
  declarations: [CityPagePage]
})
export class CityPagePageModule {}
