import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hw1prob10PageRoutingModule } from './hw1prob10-routing.module';

import { Hw1prob10Page } from './hw1prob10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hw1prob10PageRoutingModule
  ],
  declarations: [Hw1prob10Page]
})
export class Hw1prob10PageModule {}
