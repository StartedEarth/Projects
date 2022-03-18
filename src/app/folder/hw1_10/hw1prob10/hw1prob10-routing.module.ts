import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hw1prob10Page } from './hw1prob10.page';

const routes: Routes = [
  {
    path: '',
    component: Hw1prob10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Hw1prob10PageRoutingModule {}
