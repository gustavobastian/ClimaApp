import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoPagePage } from './info-page.page';

const routes: Routes = [
  {
    path: '',
    component: InfoPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoPagePageRoutingModule {}
