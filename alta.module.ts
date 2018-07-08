import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AltaPage } from './alta';

@NgModule({
  declarations: [
    AltaPage,
  ],
  imports: [
    IonicPageModule.forChild(AltaPage),
  ],
})
export class AltaPageModule {}
