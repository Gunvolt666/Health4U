import { NgModule } from '@angular/core';
import { IonicPageModule, NavController } from 'ionic-angular';
import { AboutPage } from './about';


@NgModule({
  declarations: [
    AboutPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutPage),
  ],
})
export class AboutPageModule {
  constructor(public navCtrl: NavController){

    

  }

  

}
