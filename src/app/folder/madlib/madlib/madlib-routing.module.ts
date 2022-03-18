import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MadlibPage } from './madlib.page';

const routes: Routes = [
  {
    path: '',
    component: MadlibPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MadlibPageRoutingModule {}
