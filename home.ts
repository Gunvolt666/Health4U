import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { AltaPage } from '../alta/alta';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
load(){
  this.navCtrl.push(AboutPage, {

      val: 'anishnirmal'

    })
  }

  loadalta(){
    this.navCtrl.push(AltaPage, {

      val: 'alta'

    })
  }

}
