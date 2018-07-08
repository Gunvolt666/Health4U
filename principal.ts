import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AltaPage} from '../alta/alta';
import { AboutPage } from '../about/about';

/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }

}
