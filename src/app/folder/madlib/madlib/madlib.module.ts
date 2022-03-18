import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MadlibPageRoutingModule } from './madlib-routing.module';

import { MadlibPage } from './madlib.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MadlibPageRoutingModule
  ],
  declarations: [MadlibPage]
})
export class MadlibPageModule {}
