import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CityPagePage } from './city-page.page';

const routes: Routes = [
  {
    path: '',
    component: CityPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CityPagePageRoutingModule {}
