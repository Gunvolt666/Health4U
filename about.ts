import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfiguracionPage } from '../configuracion/configuracion';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    console.log(navParams.get('val'));

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  loadconfig(){
    this.navCtrl.push(ConfiguracionPage, {
      val: 'config'
    })
  }

}
